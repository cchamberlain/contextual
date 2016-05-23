'use strict';

Object.defineProperty(exports, "__esModule", {
                                    value: true
});
exports.default = contextual;

var _chai = require('chai');

var _createContextTypes = require('./createContextTypes');

var _createContextTypes2 = _interopRequireDefault(_createContextTypes);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _scheme = require('./theme/scheme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contextual() {
                                    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                                    var React = _ref.React;
                                    var defaultThemeName = _ref.defaultThemeName;
                                    var _ref$overrideTheme = _ref.overrideTheme;
                                    var overrideTheme = _ref$overrideTheme === undefined ? function (themeName, context) {} : _ref$overrideTheme;
                                    var themeShape = _ref.themeShape;
                                    var useGridProps = _ref.useGridProps;

                                    var contextTypes = (0, _createContextTypes2.default)({ React: React, themeShape: themeShape, useGridProps: useGridProps });
                                    var getTheme = (0, _theme2.default)({ defaultThemeName: defaultThemeName, overrideTheme: overrideTheme });
                                    _chai.assert.ok(contextTypes, 'contextTypes could not be generated');
                                    _chai.assert.ok(getTheme, 'getTheme could not be generated');
                                    return { contextTypes: contextTypes, getTheme: getTheme, defaultTheme: getTheme(defaultThemeName), schemeNames: _scheme.schemeNames };
}