/**
* A class with a list of codes for various console styles and colors. This is an internal class only.
*/
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
* Use the Painter class to chain together escaped console commands.
* Usage: new Painer().underline().red("This text will be underlined and red!");
*/
export class Painter
{
	private _tags: Array<string>;
	private _text: string;

	/**
	* Creates an instance of the Painter class
	* @param {string} text [Optional] Specify the text of the painter
	*/
	constructor(text: string = "")
	{
		this._text = text;
		this._tags = [];
	}

	/**
	* White background
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	whiteBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.whiteBG[0]);
		this._tags.push(PainterBrushes.whiteBG[1]);
		return this;
	}

	/**
	* Grey background
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	greyBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.greyBG[0]);
		this._tags.push(PainterBrushes.greyBG[1]);
		return this;
	}

	/**
	* Black background
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	blackBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.blackBG[0]);
		this._tags.push(PainterBrushes.blackBG[1]);
		return this;
	}

	/**
	* Blue background
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	blueBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.blueBG[0]);
		this._tags.push(PainterBrushes.blueBG[1]);
		return this;
	}

	/**
	* Cyan background
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	cyanBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.cyanBG[0]);
		this._tags.push(PainterBrushes.cyanBG[1]);
		return this;
	}

	/**
	* Green background
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	greenBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.greenBG[0]);
		this._tags.push(PainterBrushes.greenBG[1]);
		return this;
	}

	/**
	* Magenta background
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	magentaBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.magentaBG[0]);
		this._tags.push(PainterBrushes.magentaBG[1]);
		return this;
	}

	/**
	* Red background
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	redBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.redBG[0]);
		this._tags.push(PainterBrushes.redBG[1]);
		return this;
	}

	/**
	* Yellow background
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	yellowBG(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.yellowBG[0]);
		this._tags.push(PainterBrushes.yellowBG[1]);
		return this;
	}
	
	/**
	* Bolds the text
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	bold(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.bold[0]);
		this._tags.push(PainterBrushes.bold[1]);
		return this;
	}

	/**
	* Italics the text
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	italic(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.italic[0]);
		this._tags.push(PainterBrushes.italic[1]);
		return this;
	}

	/**
	* Underlines the text
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	underline(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.underline[0]);
		this._tags.push(PainterBrushes.underline[1]);
		return this;
	}

	/**
	* Inverts the text
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	inverse(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.inverse[0]);
		this._tags.push(PainterBrushes.inverse[1]);
		return this;
	}

	/**
	* Strikes the text
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	strikeThrough(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.strikethrough[0]);
		this._tags.push(PainterBrushes.strikethrough[1]);
		return this;
	}

	/**
	* Sets the text grey
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	grey(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.grey[0]);
		this._tags.push(PainterBrushes.grey[1]);
		return this;
	}

	/**
	* Sets the text white
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	white(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.white[0]);
		this._tags.push(PainterBrushes.white[1]);
		return this;
	}

	/**
	* Sets the text black
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	black(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.black[0]);
		this._tags.push(PainterBrushes.black[1]);
		return this;
	}

	/**
	* Sets the text blue
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	blue(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.blue[0]);
		this._tags.push(PainterBrushes.blue[1]);
		return this;
	}

	/**
	* Sets the text cyan
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	cyan(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.cyan[0]);
		this._tags.push(PainterBrushes.cyan[1]);
		return this;
	}

	/**
	* Sets the text green
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	green(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.green[0]);
		this._tags.push(PainterBrushes.green[1]);
		return this;
	}

	/**
	* Sets the text magenta
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	magenta(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.magenta[0]);
		this._tags.push(PainterBrushes.magenta[1]);
		return this;
	}

	/**
	* Sets the text red
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	red(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.red[0]);
		this._tags.push(PainterBrushes.red[1]);
		return this;
	}

	/**
	* Sets the text yellow
	* @param {string} text [Optional] Specify the text of the painter
	* @returns {Painter}
	*/
	yellow(text?: string): Painter
	{
		if (text !== undefined) this._text = text;
		this._tags.splice(0, 0, PainterBrushes.yellow[0]);
		this._tags.push(PainterBrushes.yellow[1]);
		return this;
	}

	/**
	* Combines the codes and text into a single string
	* @returns {string}
	*/
	toString(): string
	{
		this._tags.splice(this._tags.length / 2, 0, this._text);
		return this._tags.join("");
	}
}

/**
* Bolds the text
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function bold(text?: string): Painter { return new Painter(text).bold(); }

/**
* Italics the text
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function italic(text?: string): Painter { return new Painter(text).italic(); }

/**
* Underlines the text
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function underline(text?: string): Painter { return new Painter(text).underline(); }

/**
* Strikes the text
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function strikeThrough(text?: string): Painter { return new Painter(text).strikeThrough(); }

/**
* Inverts the text
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function inverse(text?: string): Painter { return new Painter(text).inverse(); }

/**
* White background
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function whiteBG(text?: string): Painter { return new Painter(text).whiteBG(); }

/**
* Grey background
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function greyBG(text?: string): Painter { return new Painter(text).greyBG(); }

/**
* Black background
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function blackBG(text?: string): Painter { return new Painter(text).blackBG(); }

/**
* Blue background
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function blueBG(text?: string): Painter { return new Painter(text).blueBG(); }

/**
* Cyan background
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function cyanBG(text?: string): Painter { return new Painter(text).cyanBG(); }

/**
* Green background
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function greenBG(text?: string): Painter { return new Painter(text).greenBG(); }

/**
* Magenta background
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function magentaBG(text?: string): Painter { return new Painter(text).magentaBG(); }
/**
* Red background
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function redBG(text?: string): Painter { return new Painter(text).redBG(); }
/**
* Yellow background
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function yellowBG(text?: string): Painter { return new Painter(text).yellowBG(); }

/**
* Sets the text to white
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function white(text?: string): Painter { return new Painter(text).white(); }

/**
* Sets the text to grey
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function grey(text?: string): Painter { return new Painter(text).grey(); }

/**
* Sets the text to black
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function black(text?: string): Painter { return new Painter(text).black(); }

/**
* Sets the text to blue
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function blue(text?: string): Painter { return new Painter(text).blue(); }

/**
* Sets the text to cyan
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function cyan(text?: string): Painter { return new Painter(text).cyan(); }

/**
* Sets the text to green
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function green(text?: string): Painter { return new Painter(text).green(); }

/**
* Sets the text to magenta
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function magenta(text?: string): Painter { return new Painter(text).magenta(); }

/**
* Sets the text to red
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function red(text?: string): Painter { return new Painter(text).red(); }

/**
* Sets the text to yellow
* @param {string} text [Optional] Specify the text of the painter
* @returns {Painter}
*/
export function yellow(text?: string): Painter { return new Painter(text).yellow(); }

/**
* Logs a message to the console
* @param {Painter} painter
*/
export function log(painter: Painter) { console.log(painter.toString()); }