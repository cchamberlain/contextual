import { assert } from 'chai'
import invert from './palettes/invert'
import { schemeNames, getScheme } from './scheme'

export default ({ defaultTheme, overrideTheme }) => {
  assert.typeOf(defaultTheme, 'string')
  assert(defaultTheme.includes('-'))
  const themeSplit = defaultTheme.split('-')
  assert(schemeNames.indexOf(themeSplit[0]) !== -1, `'${defaultTheme}' is not a valid theme`)
  assert(['light', 'dark'].indexOf(themeSplit[1]) !== -1, `'${defaultTheme}' is not a valid theme`)

  const buildTheme = (themeName, palette, inverted = false) => {
    const p = inverted ? invert(palette) : palette

    const color = { primary: p['base3']
                  , secondary: p['base00']
                  , tertiary: p['base1']
                  , accent: p['yellow']
                  , emphasized: p['base01']
                  }

    const brand = { default: p['base2']
                  , primary: p['yellow']
                  , info: p['cyan']
                  , success: p['green']
                  , warning: p['orange']
                  , danger: p['red']
                  }

    return  { themeName
            , palette: p
            , color
            , brand
                        /** body styles are set directly on the html (should not be react shorthands) */
            , style:  { body: { width: '100%'
                              , backgroundColor: p['base3']
                              , float: 'left'
                              , paddingBottom: '50px'
                              }
                      , app:  { width: '100%'
                              , height: '100%'
                              , backgroundColor: color.primary
                              , color: color.secondary
                              }
                      , panel:  { backgroundColor: brand.default
                                , borderColor: color.tertiary
                                , borderStyle: 'solid'
                                , borderWidth: 1
                                , margin: 20
                                , paddingLeft: 10
                                , paddingRight: 10
                                , borderRadius: 8
                                , fontFamily: 'Lato'
                                , fontWeight: 400
                                }
                      , bold: { fontWeight: 700 }
                      , link: { color: p['blue']
                              , cursor: 'pointer'
                              }
                      , label:  { color: color.secondary
                                , backgroundColor: brand.default
                                , borderColor: color.secondary
                                , borderWidth: 1
                                , borderStyle: 'solid'
                                , borderRadius: 2
                                , margin: 2
                                , padding: 2
                                , paddingLeft: 4
                                , paddingRight: 4
                                , fontSize: 10
                                , fontWeight: 700
                                , fontFamily: ['Helvetica Neue','Helvetica','Arial','sans-serif']
                                , whiteSpace: 'nowrap'
                                , display: 'inline'
                                , cursor: 'default'
                                }
                      , input:  { color: p['base03']
                                , backgroundColor: p['base3']
                                , borderColor: color.tertiary
                                , borderWidth: 1
                                , borderStyle: 'solid'
                                }
                      }
            }
  }

  const getTheme = (themeName = defaultTheme, context) => {
    assert.ok(themeName)
    assert.typeOf(themeName, 'string')
    assert(themeName.includes('-'), `themeName must be of format '(schemeName)-(light|dark)`)
    const [schemeName, lightOrDark] = themeName.split('-')
    assert(['light', 'dark'].indexOf(lightOrDark) !== -1, 'theme must have light or dark specified.')
    const inverted = lightOrDark === 'dark'
    const palette = getScheme(schemeName)
    assert.ok(palette, `No theme exists for scheme '${schemeName}', options are [${schemeNames.join(',')}]`)
    const theme = buildTheme(`${schemeName}-${inverted ? 'dark' : 'light'}`, palette, inverted)
    const override = overrideTheme(themeName, context)
    if(override)
      return { ...theme, ...override(theme), isOverridden: true }
    return theme
  }

  return getTheme
}
