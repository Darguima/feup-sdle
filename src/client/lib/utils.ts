import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function splitOnceFromEnd(str: string, sep: string): [string, string] {
	const index = str.lastIndexOf(sep);
	if (index === -1) {
		return [str, ''];
	}
	return [str.slice(0, index), str.slice(index + sep.length)];
}

export function isIterableEmpty<T>(iterable: Iterable<T>): boolean {
	for (const _ of iterable) {
		return false;
	}
	return true;
}