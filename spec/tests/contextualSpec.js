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
  goodThemeNames.map(function (defaultTheme) {
    it('returns an object for defaultTheme \'' + defaultTheme + '\'', function () {
      var result = contextual({ React: React, defaultTheme: defaultTheme });
      expect(result).toEqual(jasmine.any(Object));
    });
    it('returns contextTypes object for defaultTheme ' + defaultTheme, function () {
      var result = contextual({ React: React, defaultTheme: defaultTheme });
      expect(result.contextTypes).toEqual(jasmine.any(Object));
    });
    it('returns getTheme function for defaultTheme ' + defaultTheme, function () {
      var result = contextual({ React: React, defaultTheme: defaultTheme });
      expect(result.getTheme).toEqual(jasmine.any(Function));
    });
    it('returns schemeNames array for defaultTheme ' + defaultTheme, function () {
      var result = contextual({ React: React, defaultTheme: defaultTheme });
      expect(result.schemeNames).toEqual(jasmine.any(Array));
    });
    it('returns theme for valid theme name passed to getTheme for ' + defaultTheme, function () {
      var _contextual = contextual({ React: React, defaultTheme: defaultTheme });

      var getTheme = _contextual.getTheme;

      var result = getTheme('tomorrow-light');
      expect(result).toEqual(jasmine.any(Object));
    });
  });

  it('throws when React not passed', function () {
    return expect(function () {
      return contextual({ defaultTheme: goodThemeNames[0] });
    }).toThrow();
  });
  badThemeNames.map(function (defaultTheme) {
    return it('throws on defaultTheme \'' + defaultTheme + '\'', function () {
      return expect(function () {
        return contextual({ React: React, defaultTheme: defaultTheme });
      }).toThrow();
    });
  });
});