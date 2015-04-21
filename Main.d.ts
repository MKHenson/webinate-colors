export declare class Painter {
    private _tags;
    private _text;
    constructor(text?: string);
    underline(text?: string): Painter;
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
export declare function red(text: string): Painter;
export declare function green(text: string): Painter;
