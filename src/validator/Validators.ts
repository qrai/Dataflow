import { NumberValidator } from "./validators/primitive/NumberValidator";
import { TextValidator } from "./validators/primitive/TextValidator";
import { BooleanValidator } from "./validators/primitive/BooleanValidator";
import { DateValidator } from "./validators/datetime/DateValidator";
import { CustomValidator } from "./validators/CustomValidator";

export const Validators = Object.freeze({
	Custom: CustomValidator,
	
	Text: TextValidator,
	Number: NumberValidator,
	Boolean: BooleanValidator,

	Date: DateValidator
});