'use strict';

describe('contextual', function () {
  var contextual = require('../../lib').default;

  var isRequired = false;
  var React = { PropTypes: { object: { isRequired: isRequired }, string: { isRequired: isRequired }, number: { isRequired: isRequired }, bool: { isRequired: isRequired }, shape: function shape() {
        isRequired;
      } } };
  var goodThemeNames = ['solarized-dark', 'solarized-light', 'tomorrow-dark'];
  var badThemeNames = ['solarized-brown', 'off-white', 'solarized'];

  it('is a function', function () {
    return expect(contextual).toEqual(jasmine.any(Function));
  });
  goodThemeNames.map(function (defaultThemeName) {
    it('returns an object for defaultThemeName \'' + defaultThemeName + '\'', function () {
      var result = contextual({ React: React, defaultThemeName: defaultThemeName });
      expect(result).toEqual(jasmine.any(Object));
    });
    it('returns contextTypes object for defaultThemeName ' + defaultThemeName, function () {
      var result = contextual({ React: React, defaultThemeName: defaultThemeName });
      expect(result.contextTypes).toEqual(jasmine.any(Object));
    });
    it('returns getTheme function for defaultThemeName ' + defaultThemeName, function () {
      var result = contextual({ React: React, defaultThemeName: defaultThemeName });
      expect(result.getTheme).toEqual(jasmine.any(Function));
    });
    it('returns schemeNames array for defaultThemeName ' + defaultThemeName, function () {
      var result = contextual({ React: React, defaultThemeName: defaultThemeName });
      expect(result.schemeNames).toEqual(jasmine.any(Array));
    });
    it('returns matching defaultTheme for defaultThemeName ' + defaultThemeName, function () {
      var result = contextual({ React: React, defaultThemeName: defaultThemeName });
      expect(result.defaultTheme.themeName).toEqual(defaultThemeName);
    });
    it('returns theme for valid theme name passed to getTheme for ' + defaultThemeName, function () {
      var _contextual = contextual({ React: React, defaultThemeName: defaultThemeName });

      var getTheme = _contextual.getTheme;

      var result = getTheme('tomorrow-light');
      expect(result).toEqual(jasmine.any(Object));
    });
  });

  it('throws when React not passed', function () {
    return expect(function () {
      return contextual({ defaultThemeName: goodThemeNames[0] });
    }).toThrow();
  });
  badThemeNames.map(function (defaultThemeName) {
    return it('throws on defaultThemeName \'' + defaultThemeName + '\'', function () {
      return expect(function () {
        return contextual({ React: React, defaultThemeName: defaultThemeName });
      }).toThrow();
    });
  });
});