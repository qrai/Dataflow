import { ValidatorDelegate } from "../Validator.type";

export const ComposeValidator: (standards: RegExp[]) => ValidatorDelegate<any> =
	(standards: RegExp[]) =>
		(data: any) => standards.some(standard => standard.test(data))