'use strict';

Object.defineProperty(exports, "__esModule", {
                                      value: true
});
exports.fromBase16 = exports.getScheme = exports.schemeNames = undefined;

var _base = require('base16');

var base16 = _interopRequireWildcard(_base);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var schemeNames = exports.schemeNames = Object.keys(base16);

var getScheme = exports.getScheme = function getScheme(schemeName) {
                                      return fromBase16(base16[schemeName]);
};

/** Converts base16 to solarized style colors */
var fromBase16 = exports.fromBase16 = function fromBase16(scheme) {
                                      return { scheme: scheme.scheme,
                                                                            base03: scheme.base00,
                                                                            base02: scheme.base01,
                                                                            base01: scheme.base02,
                                                                            base00: scheme.base03,
                                                                            base0: scheme.base04,
                                                                            base1: scheme.base05,
                                                                            base2: scheme.base06,
                                                                            base3: scheme.base07,
                                                                            red: scheme.base08,
                                                                            orange: scheme.base09,
                                                                            yellow: scheme.base0A,
                                                                            green: scheme.base0B,
                                                                            cyan: scheme.base0C,
                                                                            blue: scheme.base0D,
                                                                            magenta: scheme.base0E,
                                                                            violet: scheme.base0F
                                      };
};