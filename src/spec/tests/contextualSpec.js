describe('contextual', () => {
  const contextual = require('../../lib').default

  const isRequired = false
  const React = { PropTypes: { object: { isRequired }, string: { isRequired }, number: { isRequired }, bool: { isRequired }, shape: () => { isRequired } } }
  const goodThemeNames = ['solarized-dark', 'solarized-light', 'tomorrow-dark']
  const badThemeNames = ['solarized-brown', 'off-white', 'solarized']

  it('is a function', () => expect(contextual).toEqual(jasmine.any(Function)))
  goodThemeNames.map(defaultTheme => {
    it(`returns an object for defaultTheme '${defaultTheme}'`, () => {
      const result = contextual({ React, defaultTheme })
      expect(result).toEqual(jasmine.any(Object))
    })
    it(`returns contextTypes object for defaultTheme ${defaultTheme}`, () => {
      const result = contextual({ React, defaultTheme })
      expect(result.contextTypes).toEqual(jasmine.any(Object))
    })
    it(`returns getTheme function for defaultTheme ${defaultTheme}`, () => {
      const result = contextual({ React, defaultTheme })
      expect(result.getTheme).toEqual(jasmine.any(Function))
    })
    it(`returns schemeNames array for defaultTheme ${defaultTheme}`, () => {
      const result = contextual({ React, defaultTheme })
      expect(result.schemeNames).toEqual(jasmine.any(Array))
    })
    it(`returns theme for valid theme name passed to getTheme for ${defaultTheme}`, () => {
      const { getTheme } = contextual({ React, defaultTheme })
      const result = getTheme('tomorrow-light')
      expect(result).toEqual(jasmine.any(Object))
    })
  })

  it('throws when React not passed', () => expect(() => contextual({ defaultTheme: goodThemeNames[0] })).toThrow())
  badThemeNames.map(defaultTheme => it(`throws on defaultTheme '${defaultTheme}'`, () => expect(() => contextual({ React, defaultTheme })).toThrow()))
})
