class PainterBrushes
{
	//styles
	static bold: Array<string> = ['\x1B[1m', '\x1B[22m'];
	static italic: Array<string> = ['\x1B[3m', '\x1B[23m'];
	static underline: Array<string> = ['\x1B[4m', '\x1B[24m'];
	static inverse: Array<string> = ['\x1B[7m', '\x1B[27m'];
	static strikethrough: Array<string> = ['\x1B[9m', '\x1B[29m'];
	
	//text colors
	static white: Array<string> = ['\x1B[37m', '\x1B[39m'];
	static grey: Array<string> = ['\x1B[90m', '\x1B[39m'];
	static black: Array<string> = ['\x1B[30m', '\x1B[39m'];
	static blue: Array<string> = ['\x1B[34m', '\x1B[39m'];
	static cyan: Array<string> = ['\x1B[36m', '\x1B[39m'];
	static green: Array<string> = ['\x1B[32m', '\x1B[39m'];
	static magenta: Array<string> = ['\x1B[35m', '\x1B[39m'];
	static red: Array<string> = ['\x1B[31m', '\x1B[39m'];
	static yellow: Array<string> = ['\x1B[33m', '\x1B[39m'];

	//background colors
	static whiteBG: Array<string> = ['\x1B[47m', '\x1B[49m'];
	static greyBG: Array<string> = ['\x1B[49;5;8m', '\x1B[49m'];
	static blackBG: Array<string> = ['\x1B[40m', '\x1B[49m'];
	static blueBG: Array<string> = ['\x1B[44m', '\x1B[49m'];
	static cyanBG: Array<string> = ['\x1B[46m', '\x1B[49m'];
	static greenBG: Array<string> = ['\x1B[42m', '\x1B[49m'];
	static magentaBG: Array<string> = ['\x1B[45m', '\x1B[49m'];
	static redBG: Array<string> = ['\x1B[41m', '\x1B[49m'];
	static yellowBG: Array<string> = ['\x1B[43m', '\x1B[49m'];
}

/**
* A simple class that chains together escaped console commands
*/
export class Painter
{
	private _tags: Array<string>;
	private _text: string;

	constructor(text: string = "")
	{
		this._text = text;
		this._tags = [];
	}

	whiteBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.whiteBG[0]);
		this._tags.push(PainterBrushes.whiteBG[1]);
		return this;
	}

	greyBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.greyBG[0]);
		this._tags.push(PainterBrushes.greyBG[1]);
		return this;
	}

	blackBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.blackBG[0]);
		this._tags.push(PainterBrushes.blackBG[1]);
		return this;
	}

	blueBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.blueBG[0]);
		this._tags.push(PainterBrushes.blueBG[1]);
		return this;
	}

	cyanBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.cyanBG[0]);
		this._tags.push(PainterBrushes.cyanBG[1]);
		return this;
	}

	greenBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.greenBG[0]);
		this._tags.push(PainterBrushes.greenBG[1]);
		return this;
	}

	magentaBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.magentaBG[0]);
		this._tags.push(PainterBrushes.magentaBG[1]);
		return this;
	}

	redBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.redBG[0]);
		this._tags.push(PainterBrushes.redBG[1]);
		return this;
	}

	yellowBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.yellowBG[0]);
		this._tags.push(PainterBrushes.yellowBG[1]);
		return this;
	}
	
	bold(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.bold[0]);
		this._tags.push(PainterBrushes.bold[1]);
		return this;
	}

	italic(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.italic[0]);
		this._tags.push(PainterBrushes.italic[1]);
		return this;
	}

	underline(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.underline[0]);
		this._tags.push(PainterBrushes.underline[1]);
		return this;
	}

	inverse(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.inverse[0]);
		this._tags.push(PainterBrushes.inverse[1]);
		return this;
	}

	strikeThrough(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.strikethrough[0]);
		this._tags.push(PainterBrushes.strikethrough[1]);
		return this;
	}

	grey(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.grey[0]);
		this._tags.push(PainterBrushes.grey[1]);
		return this;
	}

	white(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.white[0]);
		this._tags.push(PainterBrushes.white[1]);
		return this;
	}

	black(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.black[0]);
		this._tags.push(PainterBrushes.black[1]);
		return this;
	}

	blue(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.blue[0]);
		this._tags.push(PainterBrushes.blue[1]);
		return this;
	}

	cyan(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.cyan[0]);
		this._tags.push(PainterBrushes.cyan[1]);
		return this;
	}

	green(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.green[0]);
		this._tags.push(PainterBrushes.green[1]);
		return this;
	}

	magenta(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.magenta[0]);
		this._tags.push(PainterBrushes.magenta[1]);
		return this;
	}

	red(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.red[0]);
		this._tags.push(PainterBrushes.red[1]);
		return this;
	}

	yellow(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.yellow[0]);
		this._tags.push(PainterBrushes.yellow[1]);
		return this;
	}

	toString(): string
	{
		this._tags.splice(this._tags.length / 2, 0, this._text);
		return this._tags.join("");
	}
}

export function bold(text?: string): Painter { return new Painter(text).bold(); }
export function italic(text?: string): Painter { return new Painter(text).italic(); }
export function underline(text?: string): Painter { return new Painter(text).underline(); }
export function strikeThrough(text?: string): Painter { return new Painter(text).strikeThrough(); }
export function inverse(text?: string): Painter { return new Painter(text).inverse(); }

export function whiteBG(text?: string): Painter { return new Painter(text).whiteBG(); }
export function greyBG(text?: string): Painter { return new Painter(text).greyBG(); }
export function blackBG(text?: string): Painter { return new Painter(text).blackBG(); }
export function blueBG(text?: string): Painter { return new Painter(text).blueBG(); }
export function cyanBG(text?: string): Painter { return new Painter(text).cyanBG(); }
export function greenBG(text?: string): Painter { return new Painter(text).greenBG(); }
export function magentaBG(text?: string): Painter { return new Painter(text).magentaBG(); }
export function redBG(text?: string): Painter { return new Painter(text).redBG(); }
export function yellowBG(text?: string): Painter { return new Painter(text).yellowBG(); }

export function white(text?: string): Painter { return new Painter(text).white(); }
export function grey(text?: string): Painter { return new Painter(text).grey(); }
export function black(text?: string): Painter { return new Painter(text).black(); }
export function blue(text?: string): Painter { return new Painter(text).blue(); }
export function cyan(text?: string): Painter { return new Painter(text).cyan(); }
export function green(text?: string): Painter { return new Painter(text).green(); }
export function magenta(text?: string): Painter { return new Painter(text).magenta(); }
export function red(text?: string): Painter { return new Painter(text).red(); }
export function yellow(text?: string): Painter { return new Painter(text).yellow(); }

/**
* Logs a message to the console
*/
export function log(painter: Painter) { console.log(painter.toString()); }