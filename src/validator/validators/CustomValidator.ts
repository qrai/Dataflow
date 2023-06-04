import { ValidatorDelegate } from "../Validator.type";

export const CustomValidator: (standard: RegExp) => ValidatorDelegate<any> =
	(standard: RegExp) => (data: any) => (standard).test(data)