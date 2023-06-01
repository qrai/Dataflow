import { Validator } from "../validator/Validator.type";

export type FlowValidators<T> = {
	[Property in keyof T]?: Validator<T[Property]>[];
};