import { ValidatorDelegate } from "../../Validator.type";

export const PriceValidator: ValidatorDelegate<any> =
	(data: any) => (/\d/g).test(data)