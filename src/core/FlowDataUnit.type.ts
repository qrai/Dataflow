export type FlowDataUnit<T> = {
	[Property in keyof T]?: unknown
};