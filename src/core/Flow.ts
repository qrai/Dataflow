import { Step } from "./Step";
import { StepBuilder } from "./StepBuilder";
import { FlowDataUnit } from "./FlowDataUnit.type";
import { FlowOptions } from "./FlowOptions.type";
import { keys } from 'ts-transformer-keys'
import { Loaders } from "../loader/Loaders";
import { LoadedData } from "../loader/LoadedData.type";

export class Flow<T extends object> {
	private data: FlowDataUnit<T>[] = [];
	private columns: string[] = [];

	loadRaw(type: keyof typeof Loaders, content: string): this {
		// Load columns & data from table
		const { columns, rows } = Loaders[type](content);

		// Get columns from type (T) and validate the columns in table
		const typeColumns: (keyof T)[] = keys<T> as any as (keyof T)[];
		for(const typeColumn of typeColumns) {
			if(!columns.includes(typeColumn as string)) {
				throw new Error(`Failed to load data: the column "${typeColumn.toString()}" (from type) is missing in table"`)
			}
		}

		// Set data
		this.data = rows as FlowDataUnit<T>[];
		
		return this;
	}

	loadFile(path: string): this {
		return this;
	}

	private steps: Step<T>[] = [];

	// Add step to the flow
	public step(step: Step<T> | StepBuilder<T>): this {
		this.steps.push(
			'build' in step
				? step.build()
				: step
		);

		return this;
	}

	async run(opts: FlowOptions) {
		// Run step by step
		for(const step of this.steps) {
			this.data = await step.run(opts, this.data)
		}
	}
}