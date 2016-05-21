'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _chai = require('chai');

var _invert = require('./palettes/invert');

var _invert2 = _interopRequireDefault(_invert);

var _scheme = require('./scheme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var defaultTheme = _ref.defaultTheme;
  var overrideTheme = _ref.overrideTheme;

  _chai.assert.typeOf(defaultTheme, 'string');
  (0, _chai.assert)(defaultTheme.includes('-'));
  var themeSplit = defaultTheme.split('-');
  (0, _chai.assert)(_scheme.schemeNames.indexOf(themeSplit[0]) !== -1, '\'' + defaultTheme + '\' is not a valid theme');
  (0, _chai.assert)(['light', 'dark'].indexOf(themeSplit[1]) !== -1, '\'' + defaultTheme + '\' is not a valid theme');

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
      , style: { body: { width: '100%',
          backgroundColor: p['base3'],
          float: 'left',
          paddingBottom: '50px'
        },
        app: { width: '100%',
          height: '100%',
          backgroundColor: color.primary,
          color: color.secondary
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
        input: { color: p['base03'],
          backgroundColor: p['base3'],
          borderColor: color.tertiary,
          borderWidth: 1,
          borderStyle: 'solid'
        }
      }
    };
  };

  var getTheme = function getTheme() {
    var themeName = arguments.length <= 0 || arguments[0] === undefined ? defaultTheme : arguments[0];
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
    var theme = buildTheme(schemeName + '-' + (inverted ? 'dark' : 'light'), palette, inverted);
    var override = overrideTheme(themeName, context);
    if (override) return _extends({}, theme, override(theme), { isOverridden: true });
    return theme;
  };

  return getTheme;
};