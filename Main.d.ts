/**
* A simple class that chains together escaped console commands
*/
export declare class Painter {
    private _tags;
    private _text;
    constructor(text?: string);
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
export declare function bold(text?: string): Painter;
export declare function italic(text?: string): Painter;
export declare function underline(text?: string): Painter;
export declare function strikeThrough(text?: string): Painter;
export declare function inverse(text?: string): Painter;
export declare function whiteBG(text?: string): Painter;
export declare function greyBG(text?: string): Painter;
export declare function blackBG(text?: string): Painter;
export declare function blueBG(text?: string): Painter;
export declare function cyanBG(text?: string): Painter;
export declare function greenBG(text?: string): Painter;
export declare function magentaBG(text?: string): Painter;
export declare function redBG(text?: string): Painter;
export declare function yellowBG(text?: string): Painter;
export declare function white(text?: string): Painter;
export declare function grey(text?: string): Painter;
export declare function black(text?: string): Painter;
export declare function blue(text?: string): Painter;
export declare function cyan(text?: string): Painter;
export declare function green(text?: string): Painter;
export declare function magenta(text?: string): Painter;
export declare function red(text?: string): Painter;
export declare function yellow(text?: string): Painter;
/**
* Logs a message to the console
*/
export declare function log(painter: Painter): void;
