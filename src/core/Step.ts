import { FlowDataUnit } from "./FlowDataUnit.type";
import { FlowOptions } from "./FlowOptions.type";
import { FlowValidators } from "./FlowValidators.type";

export class Step<T> {
	private validators: FlowValidators<T> = {};

	constructor(validators: FlowValidators<T>) {
		this.validators = validators;
	}

	// Run step logic on the data
	run(opts: FlowOptions,data: FlowDataUnit<T>[]): FlowDataUnit<T>[] {
		return data;
	}
}