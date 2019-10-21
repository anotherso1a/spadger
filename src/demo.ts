export function sum(...args: Array<number>): number {
	return args.reduce((c, v) => c + v);
}

export function shuffle([...arr]: Array<number>): Array<number> {
	arr = arr.slice();
	let i: number = arr.length;
	while (i) {
		let j: number = Math.floor(Math.random() * i--);
		[arr[j], arr[i]] = [arr[i], arr[j]];
	}
	return arr;
}
