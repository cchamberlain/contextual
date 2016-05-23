'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.createThemeName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _chai = require('chai');

var _invert = require('./palettes/invert');

var _invert2 = _interopRequireDefault(_invert);

var _scheme = require('./scheme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createThemeName = exports.createThemeName = function createThemeName(schemeName) {
        var inverted = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
        return schemeName + '-' + (inverted ? 'dark' : 'light');
};

exports.default = function (_ref) {
        var defaultThemeName = _ref.defaultThemeName;
        var overrideTheme = _ref.overrideTheme;

        _chai.assert.typeOf(defaultThemeName, 'string');
        (0, _chai.assert)(defaultThemeName.includes('-'));
        var themeSplit = defaultThemeName.split('-');
        (0, _chai.assert)(_scheme.schemeNames.indexOf(themeSplit[0]) !== -1, '\'' + defaultThemeName + '\' is not a valid theme');
        (0, _chai.assert)(['light', 'dark'].indexOf(themeSplit[1]) !== -1, '\'' + defaultThemeName + '\' is not a valid theme');

        var buildTheme = function buildTheme(themeName, palette) {
                var inverted = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

                var p = inverted ? (0, _invert2.default)(palette) : palette;

                var color = { primary: p['base3'],
                        secondary: p['base00'],
                        tertiary: p['base1'],
                        accent: p['yellow'],
                        emphasized: p['base01']
                };

                var brand = { default: p['base2'],
                        primary: p['yellow'],
                        info: p['cyan'],
                        success: p['green'],
                        warning: p['orange'],
                        danger: p['red']
                };

                return { themeName: themeName,
                        palette: p,
                        color: color,
                        brand: brand
                        /** body styles are set directly on the html (should not be react shorthands) */
                        , style: { app: { width: '80%',
                                        height: '100%',
                                        color: color.secondary,
                                        marginLeft: '10%'
                                },
                                body: { backgroundColor: p['base3'],
                                        padding: 0,
                                        margin: 0
                                },
                                content: { width: '100%',
                                        backgroundColor: p['base2'],
                                        float: 'left',
                                        marginTop: 10,
                                        marginBottom: 30,
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        borderRadius: 5,
                                        border: '1px solid ' + p['base0']
                                },
                                header: { wrapper: { display: 'flex',
                                                flexDirection: 'row',
                                                flex: '1 0 300px',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginTop: 10,
                                                marginBottom: 10
                                        },
                                        hamburger: { backgroundColor: p['base2'],
                                                borderRadius: 4,
                                                border: '1px solid ' + p['base3'],
                                                height: 32,
                                                width: 32,
                                                cursor: 'pointer'
                                        },
                                        title: { fontSize: '1.8em',
                                                fontFamily: 'Lato',
                                                fontWeight: 'bold',
                                                marginLeft: 20,
                                                marginRight: 'auto'
                                        },
                                        subtitle: { fontSize: 9, marginLeft: 10, marginTop: 0, paddingTop: 0 },
                                        anchor: { color: color.accent, textDecoration: 'none' },
                                        banner: { marginRight: 20, marginTop: 3 },
                                        settings: {},
                                        settingsImage: { height: 45, textShadow: '-1px -1px 0 #000' }
                                },
                                footer: { wrapper: { display: 'flex',
                                                flexDirection: 'row',
                                                flex: '0 1 10px',
                                                flexWrap: 'nowrap',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-end',
                                                position: 'fixed',
                                                bottom: 5,
                                                width: '80%'
                                        },
                                        left: { display: 'flex',
                                                flexDirection: 'column'
                                        },
                                        right: { display: 'flex',
                                                flexDirection: 'column'
                                        },
                                        row: { display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                flexWrap: 'nowrap'
                                        },
                                        anchor: { color: color.accent, textDecoration: 'none' }
                                },
                                panel: { backgroundColor: brand.default,
                                        borderColor: color.tertiary,
                                        borderStyle: 'solid',
                                        borderWidth: 1,
                                        margin: 20,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        borderRadius: 8,
                                        fontFamily: 'Lato',
                                        fontWeight: 400
                                },
                                bold: { fontWeight: 700 },
                                link: { color: p['blue'],
                                        cursor: 'pointer'
                                },
                                label: { color: color.secondary,
                                        backgroundColor: brand.default,
                                        borderColor: color.secondary,
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderRadius: 2,
                                        margin: 2,
                                        padding: 2,
                                        paddingLeft: 4,
                                        paddingRight: 4,
                                        fontSize: 10,
                                        fontWeight: 700,
                                        fontFamily: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
                                        whiteSpace: 'nowrap',
                                        display: 'inline',
                                        cursor: 'default'
                                },
                                ul: { marginLeft: '15%',
                                        marginRight: '15%',
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        lineHeight: 2
                                },
                                paragraph: {
                                        //, margin: 15
                                        padding: 10
                                },
                                form: {
                                        //, margin: 15
                                        padding: 10
                                },
                                input: { color: p['base03'],
                                        backgroundColor: p['base3'],
                                        fontSize: '1.1em',
                                        padding: 10,
                                        minWidth: 300,
                                        borderColor: color.tertiary,
                                        borderRadius: 4,
                                        borderWidth: 1,
                                        borderStyle: 'solid'
                                }
                        }
                };
        };

        var getTheme = function getTheme() {
                var themeName = arguments.length <= 0 || arguments[0] === undefined ? defaultThemeName : arguments[0];
                var context = arguments[1];

                _chai.assert.ok(themeName);
                _chai.assert.typeOf(themeName, 'string');
                (0, _chai.assert)(themeName.includes('-'), 'themeName must be of format \'(schemeName)-(light|dark)');

                var _themeName$split = themeName.split('-');

                var _themeName$split2 = _slicedToArray(_themeName$split, 2);

                var schemeName = _themeName$split2[0];
                var lightOrDark = _themeName$split2[1];

                (0, _chai.assert)(['light', 'dark'].indexOf(lightOrDark) !== -1, 'theme must have light or dark specified.');
                var inverted = lightOrDark === 'dark';
                var palette = (0, _scheme.getScheme)(schemeName);
                _chai.assert.ok(palette, 'No theme exists for scheme \'' + schemeName + '\', options are [' + _scheme.schemeNames.join(',') + ']');
                var theme = buildTheme(themeName, palette, inverted);
                var override = overrideTheme(themeName, context);
                if (override) return _extends({}, theme, override(theme), { isOverridden: true });
                return theme;
        };

        return getTheme;
};