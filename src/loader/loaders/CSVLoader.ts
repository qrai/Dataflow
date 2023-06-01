import { ILoader } from "../ILoader.type";

export const CSVLoader: ILoader = (raw: string) => {
	const rows = raw.split('\n');
	const columns = rows[0]?.split(',');
	delete rows[0];

	// Get data
	const data: (Record<string, string>)[] = [];
	for(const row of rows) {
		const rowData: string[] = row.split(',');
		const rowObject: Record<string, string> = {};

		// Fill row object
		for(let i = 0; i < columns.length; i++) {
			rowObject[columns[i]] = rowData[i] as any;
		}

		// Add row object
		data.push(rowObject);
	}

	return {
		columns, rows: data
	};
};