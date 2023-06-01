import { FlowValidators } from "../core/FlowValidators.type";
import { ValidatorDelegate, ValidatorStrategy } from "../validator/Validator.type";
import { Step } from "./Step";

export class StepBuilder<T> {
	constructor() { }

	private validators: FlowValidators<T> = {};
	public validateColumn(columnName: keyof T, delegate: ValidatorDelegate<unknown>, strategy: ValidatorStrategy): this {
		// Initialize array of validators for this column
		if(!(columnName in this.validators)) {
			this.validators[columnName] = [];
		}

		// Add validator
		this.validators[columnName]?.push({
			delegate,
			strategy
		});

		return this;
	}

	public standartizeColumn(columnName: keyof T): this {
		return this;
	}

	public build(): Step<T> {
		return new Step<T>(this.validators);
	}
}