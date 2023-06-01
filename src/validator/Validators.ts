import { NumberValidator } from "./validators/primitive/NumberValidator";
import { TextValidator } from "./validators/primitive/TextValidator";
import { BooleanValidator } from "./validators/primitive/BooleanValidator";

export const Validators = Object.freeze({
	Text: TextValidator,
	Number: NumberValidator,
	Boolean: BooleanValidator
});