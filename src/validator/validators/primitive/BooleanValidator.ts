import { ValidatorDelegate } from "../../Validator.type";

export const BooleanValidator: ValidatorDelegate<any> =
	(data) => {
		const normalizedData = data.toString().toLowerCase();
		return normalizedData === 'true' || normalizedData === 'false';
	};