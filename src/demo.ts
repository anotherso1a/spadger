export function sum ([...args]: Array<number>): number {
	return args.reduce((c, v) => c + v);
}
