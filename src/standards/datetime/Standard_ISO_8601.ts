import { IStandard } from "../IStandard";

export const Standard_ISO_8601 = new class implements IStandard<Date> {
	public formula = /\d{4}\-\d{2}\-\d{2}/g;

	public standartize<Date>(val: Date): string {
		return '';
	}
}
