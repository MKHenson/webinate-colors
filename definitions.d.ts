declare module "webinate-colors"
{
	/**
	* A simple class that chains together escaped console commands
	*/
	class Painter
	{
		constructor(text: string);

		whiteBG(text?: string): Painter;
		greyBG(text?: string): Painter;
		blackBG(text?: string): Painter;
		blueBG(text?: string): Painter;
		cyanBG(text?: string): Painter;
		greenBG(text?: string): Painter;
		magentaBG(text?: string): Painter;
		redBG(text?: string): Painter;
		yellowBG(text?: string): Painter;
		bold(text?: string): Painter;
		italic(text?: string): Painter;
		underline(text?: string): Painter;
		inverse(text?: string): Painter;
		strikeThrough(text?: string): Painter;
		grey(text?: string): Painter;
		white(text?: string): Painter;
		black(text?: string): Painter;
		blue(text?: string): Painter;
		cyan(text?: string): Painter;
		green(text?: string): Painter;
		magenta(text?: string): Painter;
		red(text?: string): Painter;
		yellow(text?: string): Painter;
		toString(): string;
	}

	export function bold(text?: string): Painter;
	export function italic(text?: string): Painter;
	export function underline(text?: string): Painter;
	export function strikeThrough(text?: string): Painter;
	export function inverse(text?: string): Painter;

	export function whiteBG(text?: string): Painter;
	export function greyBG(text?: string): Painter;
	export function blackBG(text?: string): Painter;
	export function blueBG(text?: string): Painter;
	export function cyanBG(text?: string): Painter;
	export function greenBG(text?: string): Painter;
	export function magentaBG(text?: string): Painter;
	export function redBG(text?: string): Painter;
	export function yellowBG(text?: string): Painter;

	export function white(text?: string): Painter;
	export function grey(text?: string): Painter;
	export function black(text?: string): Painter;
	export function blue(text?: string): Painter;
	export function cyan(text?: string): Painter;
	export function green(text?: string): Painter;
	export function magenta(text?: string): Painter;
	export function red(text?: string): Painter;
	export function yellow(text?: string): Painter;

	/**
	* Logs a message to the console
	*/
	export function log(painter: Painter);
}