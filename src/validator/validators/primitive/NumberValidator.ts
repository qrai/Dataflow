import { ValidatorDelegate } from "../../Validator.type";

export const NumberValidator: ValidatorDelegate<any> =
	(data) => Number.isNaN(+(data.toString())) === false;