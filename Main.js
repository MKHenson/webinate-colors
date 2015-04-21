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
/**
* A simple class that chains together escaped console commands
*/
var Painter = (function () {
    function Painter(text) {
        if (text === void 0) { text = ""; }
        this._text = text;
        this._tags = [];
    }
    Painter.prototype.whiteBG = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.whiteBG[0]);
        this._tags.push(PainterBrushes.whiteBG[1]);
        return this;
    };
    Painter.prototype.greyBG = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.greyBG[0]);
        this._tags.push(PainterBrushes.greyBG[1]);
        return this;
    };
    Painter.prototype.blackBG = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.blackBG[0]);
        this._tags.push(PainterBrushes.blackBG[1]);
        return this;
    };
    Painter.prototype.blueBG = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.blueBG[0]);
        this._tags.push(PainterBrushes.blueBG[1]);
        return this;
    };
    Painter.prototype.cyanBG = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.cyanBG[0]);
        this._tags.push(PainterBrushes.cyanBG[1]);
        return this;
    };
    Painter.prototype.greenBG = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.greenBG[0]);
        this._tags.push(PainterBrushes.greenBG[1]);
        return this;
    };
    Painter.prototype.magentaBG = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.magentaBG[0]);
        this._tags.push(PainterBrushes.magentaBG[1]);
        return this;
    };
    Painter.prototype.redBG = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.redBG[0]);
        this._tags.push(PainterBrushes.redBG[1]);
        return this;
    };
    Painter.prototype.yellowBG = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.yellowBG[0]);
        this._tags.push(PainterBrushes.yellowBG[1]);
        return this;
    };
    Painter.prototype.bold = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.bold[0]);
        this._tags.push(PainterBrushes.bold[1]);
        return this;
    };
    Painter.prototype.italic = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.italic[0]);
        this._tags.push(PainterBrushes.italic[1]);
        return this;
    };
    Painter.prototype.underline = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.underline[0]);
        this._tags.push(PainterBrushes.underline[1]);
        return this;
    };
    Painter.prototype.inverse = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.inverse[0]);
        this._tags.push(PainterBrushes.inverse[1]);
        return this;
    };
    Painter.prototype.strikeThrough = function (text) {
        if (text !== undefined)
            this._text = text;
        this._tags.splice(0, 0, PainterBrushes.strikethrough[0]);
        this._tags.push(PainterBrushes.strikethrough[1]);
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
        return this._tags.join("");
    };
    return Painter;
})();
exports.Painter = Painter;
function bold(text) {
    return new Painter(text).bold();
}
exports.bold = bold;
function italic(text) {
    return new Painter(text).italic();
}
exports.italic = italic;
function underline(text) {
    return new Painter(text).underline();
}
exports.underline = underline;
function strikeThrough(text) {
    return new Painter(text).strikeThrough();
}
exports.strikeThrough = strikeThrough;
function inverse(text) {
    return new Painter(text).inverse();
}
exports.inverse = inverse;
function whiteBG(text) {
    return new Painter(text).whiteBG();
}
exports.whiteBG = whiteBG;
function greyBG(text) {
    return new Painter(text).greyBG();
}
exports.greyBG = greyBG;
function blackBG(text) {
    return new Painter(text).blackBG();
}
exports.blackBG = blackBG;
function blueBG(text) {
    return new Painter(text).blueBG();
}
exports.blueBG = blueBG;
function cyanBG(text) {
    return new Painter(text).cyanBG();
}
exports.cyanBG = cyanBG;
function greenBG(text) {
    return new Painter(text).greenBG();
}
exports.greenBG = greenBG;
function magentaBG(text) {
    return new Painter(text).magentaBG();
}
exports.magentaBG = magentaBG;
function redBG(text) {
    return new Painter(text).redBG();
}
exports.redBG = redBG;
function yellowBG(text) {
    return new Painter(text).yellowBG();
}
exports.yellowBG = yellowBG;
function white(text) {
    return new Painter(text).white();
}
exports.white = white;
function grey(text) {
    return new Painter(text).grey();
}
exports.grey = grey;
function black(text) {
    return new Painter(text).black();
}
exports.black = black;
function blue(text) {
    return new Painter(text).blue();
}
exports.blue = blue;
function cyan(text) {
    return new Painter(text).cyan();
}
exports.cyan = cyan;
function green(text) {
    return new Painter(text).green();
}
exports.green = green;
function magenta(text) {
    return new Painter(text).magenta();
}
exports.magenta = magenta;
function red(text) {
    return new Painter(text).red();
}
exports.red = red;
function yellow(text) {
    return new Painter(text).yellow();
}
exports.yellow = yellow;
/**
* Logs a message to the console
*/
function log(painter) {
    console.log(painter.toString());
}
exports.log = log;
