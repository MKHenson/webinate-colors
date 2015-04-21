var PainterBrushes = (function () {
    function PainterBrushes() {
    }
    //styles
    PainterBrushes.bold = ['\x1B[1m', '\x1B[22m'];
    PainterBrushes.italic = ['\x1B[3m', '\x1B[23m'];
    PainterBrushes.underline = ['\x1B[4m', '\x1B[24m'];
    PainterBrushes.inverse = ['\x1B[7m', '\x1B[27m'];
    PainterBrushes.strikethrough = ['\x1B[9m', '\x1B[29m'];
    //text colors
    PainterBrushes.white = ['\x1B[37m', '\x1B[39m'];
    PainterBrushes.grey = ['\x1B[90m', '\x1B[39m'];
    PainterBrushes.black = ['\x1B[30m', '\x1B[39m'];
    PainterBrushes.blue = ['\x1B[34m', '\x1B[39m'];
    PainterBrushes.cyan = ['\x1B[36m', '\x1B[39m'];
    PainterBrushes.green = ['\x1B[32m', '\x1B[39m'];
    PainterBrushes.magenta = ['\x1B[35m', '\x1B[39m'];
    PainterBrushes.red = ['\x1B[31m', '\x1B[39m'];
    PainterBrushes.yellow = ['\x1B[33m', '\x1B[39m'];
    //background colors
    PainterBrushes.whiteBG = ['\x1B[47m', '\x1B[49m'];
    PainterBrushes.greyBG = ['\x1B[49;5;8m', '\x1B[49m'];
    PainterBrushes.blackBG = ['\x1B[40m', '\x1B[49m'];
    PainterBrushes.blueBG = ['\x1B[44m', '\x1B[49m'];
    PainterBrushes.cyanBG = ['\x1B[46m', '\x1B[49m'];
    PainterBrushes.greenBG = ['\x1B[42m', '\x1B[49m'];
    PainterBrushes.magentaBG = ['\x1B[45m', '\x1B[49m'];
    PainterBrushes.redBG = ['\x1B[41m', '\x1B[49m'];
    PainterBrushes.yellowBG = ['\x1B[43m', '\x1B[49m'];
    return PainterBrushes;
})();
var Painter = (function () {
    function Painter(text) {
        if (text === void 0) { text = ""; }
        this._text = text;
        this._tags = [];
    }
    Painter.prototype.underline = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.underline[0]);
        this._tags.push(PainterBrushes.underline[1]);
        return this;
    };
    Painter.prototype.grey = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.grey[0]);
        this._tags.push(PainterBrushes.grey[1]);
        return this;
    };
    Painter.prototype.white = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.white[0]);
        this._tags.push(PainterBrushes.white[1]);
        return this;
    };
    Painter.prototype.black = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.black[0]);
        this._tags.push(PainterBrushes.black[1]);
        return this;
    };
    Painter.prototype.blue = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.blue[0]);
        this._tags.push(PainterBrushes.blue[1]);
        return this;
    };
    Painter.prototype.cyan = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.cyan[0]);
        this._tags.push(PainterBrushes.cyan[1]);
        return this;
    };
    Painter.prototype.green = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.green[0]);
        this._tags.push(PainterBrushes.green[1]);
        return this;
    };
    Painter.prototype.magenta = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.magenta[0]);
        this._tags.push(PainterBrushes.magenta[1]);
        return this;
    };
    Painter.prototype.red = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.red[0]);
        this._tags.push(PainterBrushes.red[1]);
        return this;
    };
    Painter.prototype.yellow = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.yellow[0]);
        this._tags.push(PainterBrushes.yellow[1]);
        return this;
    };
    Painter.prototype.toString = function () {
        this._tags.splice(this._tags.length / 2, 0, this._text);
        return this._tags.join();
    };
    return Painter;
})();
exports.Painter = Painter;
function red(text) {
    return new Painter(text).red();
}
exports.red = red;
function green(text) {
    return new Painter(text).green();
}
exports.green = green;
