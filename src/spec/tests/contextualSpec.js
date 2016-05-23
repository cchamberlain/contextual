describe('contextual', () => {
  const contextual = require('../../lib').default

  const isRequired = false
  const React = { PropTypes: { object: { isRequired }, string: { isRequired }, number: { isRequired }, bool: { isRequired }, shape: () => { isRequired } } }
  const goodThemeNames = ['solarized-dark', 'solarized-light', 'tomorrow-dark']
  const badThemeNames = ['solarized-brown', 'off-white', 'solarized']

  it('is a function', () => expect(contextual).toEqual(jasmine.any(Function)))
  goodThemeNames.map(defaultThemeName => {
    it(`returns an object for defaultThemeName '${defaultThemeName}'`, () => {
      const result = contextual({ React, defaultThemeName })
      expect(result).toEqual(jasmine.any(Object))
    })
    it(`returns contextTypes object for defaultThemeName ${defaultThemeName}`, () => {
      const result = contextual({ React, defaultThemeName })
      expect(result.contextTypes).toEqual(jasmine.any(Object))
    })
    it(`returns getTheme function for defaultThemeName ${defaultThemeName}`, () => {
      const result = contextual({ React, defaultThemeName })
      expect(result.getTheme).toEqual(jasmine.any(Function))
    })
    it(`returns schemeNames array for defaultThemeName ${defaultThemeName}`, () => {
      const result = contextual({ React, defaultThemeName })
      expect(result.schemeNames).toEqual(jasmine.any(Array))
    })
    it(`returns matching defaultTheme for defaultThemeName ${defaultThemeName}`, () => {
      const result = contextual({ React, defaultThemeName })
      expect(result.defaultTheme.themeName).toEqual(defaultThemeName)
    })
    it(`returns theme for valid theme name passed to getTheme for ${defaultThemeName}`, () => {
      const { getTheme } = contextual({ React, defaultThemeName })
      const result = getTheme('tomorrow-light')
      expect(result).toEqual(jasmine.any(Object))
    })
  })

  it('throws when React not passed', () => expect(() => contextual({ defaultThemeName: goodThemeNames[0] })).toThrow())
  badThemeNames.map(defaultThemeName => it(`throws on defaultThemeName '${defaultThemeName}'`, () => expect(() => contextual({ React, defaultThemeName })).toThrow()))
})
