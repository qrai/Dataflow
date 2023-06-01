import { Flow } from "./core/Flow"
import { Step } from "./core/Step"
import { StepBuilder } from "./core/StepBuilder"
import { Validators } from "./validator/Validators"
import { Validator, ValidatorDelegate, ValidatorStrategy } from "./validator/Validator.type"

export {
	Flow,

	Step,
	StepBuilder,

	Validators,
	Validator, ValidatorDelegate, ValidatorStrategy
}

interface Book {
	name: string
	date: string
	price: number
}

const validateStep = new StepBuilder<Book>()
    .validateColumn('date', Validators.Date, ValidatorStrategy.ValidateAndFilter)
    .validateColumn('price', Validators.Price, ValidatorStrategy.ValidateAndFilter)
	.build();

const standartizeStep = new StepBuilder<Book>()
    .standartizeColumn('date', Standardizers.Date.ISO_8601)
    .standartizeColumn('price', Standardizers.Price.Default)
	.build();

const flow = new Flow<Book>()
    .loadFile('./dataset.csv')
    .step(validateStep)
    .step(standartizeStep)
    .run({ threads: 4 });