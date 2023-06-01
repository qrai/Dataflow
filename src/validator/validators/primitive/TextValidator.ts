import { ValidatorDelegate } from "../../Validator.type";

export const TextValidator: ValidatorDelegate<any> =
	(data) => typeof data === 'string';