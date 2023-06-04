import { Flow } from "./core/Flow"
import { Step } from "./core/Step"
import { StepBuilder } from "./core/StepBuilder"
import { Validators } from "./validator/Validators"
import { Validator, ValidatorDelegate, ValidatorStrategy } from "./validator/Validator.type"
import { Standard_ISO_8601 } from "./standards/datetime/Standard_ISO_8601"

export {
	Flow,

	Step,
	StepBuilder,

	Validators,
	Validator, ValidatorDelegate, ValidatorStrategy
}

const books = ``
interface Book {
	name: string
	date: string
	price: number
}

const validateStep = new StepBuilder<Book>()
    .validateColumn('date', Validators.Date, ValidatorStrategy.ValidateAndFilter)
    .validateColumn('price', Validators.Number, ValidatorStrategy.ValidateAndFilter)
	.build();

const standartizeStep = new StepBuilder<Book>()
    .standartizeColumn('date', Standard_ISO_8601)
	.build();

const flow = new Flow<Book>()
    .loadRaw(books, 'csv')
    .step(validateStep)
    .step(standartizeStep)
    .run({ threads: 4 });