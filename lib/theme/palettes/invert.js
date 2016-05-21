"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = invertPalette;
/** Inverts solarized style palette. */
function invertPalette(palette) {
        return _extends({}, palette, { base03: palette.base3,
                base02: palette.base2,
                base01: palette.base1,
                base00: palette.base0,
                base0: palette.base00,
                base1: palette.base01,
                base2: palette.base02,
                base3: palette.base03
        });
}