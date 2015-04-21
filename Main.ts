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

export class Painter
{
	private _tags: Array<string>;
	private _text: string;

	constructor(text: string = "")
	{
		this._text = text;
		this._tags = [];
	}

	underline(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.underline[0]);
		this._tags.push(PainterBrushes.underline[1]);
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
		return this._tags.join();
	}
}


export function red(text: string): Painter { return new Painter(text).red(); }
export function green(text: string): Painter { return new Painter(text).green(); }