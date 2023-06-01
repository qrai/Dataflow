import { ILoader } from "./ILoader.type";
import { CSVLoader } from "./loaders/CSVLoader";

export const Loaders: Record<string, ILoader> = {
	'csv': CSVLoader
};