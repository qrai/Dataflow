export interface IStandard<T> {
	formula: RegExp;

	standartize<T>(val: T): string;
}