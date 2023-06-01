export type ValidatorDelegate<T> = (data: T) => boolean;
export enum ValidatorStrategy {
	ValidateAndLog,
	ValidateAndFilter
}
export type Validator<T> = {
	strategy: ValidatorStrategy;
	delegate: ValidatorDelegate<T>;
};