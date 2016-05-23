import { assert } from 'chai'
import invert from './palettes/invert'
import { schemeNames, getScheme } from './scheme'

export const createThemeName = (schemeName, inverted = false) => `${schemeName}-${inverted ? 'dark' : 'light'}`

export default ({ defaultThemeName, overrideTheme }) => {
  assert.typeOf(defaultThemeName, 'string')
  assert(defaultThemeName.includes('-'))
  const themeSplit = defaultThemeName.split('-')
  assert(schemeNames.indexOf(themeSplit[0]) !== -1, `'${defaultThemeName}' is not a valid theme`)
  assert(['light', 'dark'].indexOf(themeSplit[1]) !== -1, `'${defaultThemeName}' is not a valid theme`)

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
            , style:  { app:  { width: '80%'
                              , height: '100%'
                              , color: color.secondary
                              , marginLeft: '10%'
                              }
                      , body: { backgroundColor: p['base3']
                              , padding: 0
                              , margin: 0
                              }
                      , content:  { width: '100%'
                                  , backgroundColor: p['base2']
                                  , float: 'left'
                                  , marginTop: 10
                                  , marginBottom: 30
                                  , paddingTop: 20
                                  , paddingBottom: 20
                                  , borderRadius: 5
                                  , border: `1px solid ${p['base0']}`
                                  }
                      , header: { wrapper:  { display: 'flex'
                                            , flexDirection: 'row'
                                            , flex: '1 0 300px'
                                            , justifyContent: 'space-between'
                                            , alignItems: 'center'
                                            , marginTop: 10
                                            , marginBottom: 10
                                            }
                                , hamburger:  { backgroundColor: p['base2']
                                              , borderRadius: 4
                                              , border: `1px solid ${p['base3']}`
                                              , height: 32
                                              , width: 32
                                              , cursor: 'pointer'
                                              }
                                , title:  { fontSize: '1.8em'
                                          , fontFamily: 'Lato'
                                          , fontWeight: 'bold'
                                          , marginLeft: 20
                                          , marginRight: 'auto'
                                          }
                                , subtitle: { fontSize: 9, marginLeft: 10, marginTop: 0, paddingTop: 0 }
                                , anchor: { color: color.accent, textDecoration: 'none' }
                                , banner: { marginRight: 20, marginTop: 3 }
                                , settings: { }
                                , settingsImage: { height: 45, textShadow: '-1px -1px 0 #000' }
                                }
                      , footer: { wrapper:  { display: 'flex'
                                            , flexDirection: 'row'
                                            , flex: '0 1 10px'
                                            , flexWrap: 'nowrap'
                                            , justifyContent: 'space-between'
                                            , alignItems: 'flex-end'
                                            , position: 'fixed'
                                            , bottom: 5
                                            , width: '80%'
                                            }
                                , left: { display: 'flex'
                                        , flexDirection: 'column'
                                        }
                                , right: { display: 'flex'
                                        , flexDirection: 'column'
                                        }
                                , row:  { display: 'flex'
                                        , flexDirection: 'row'
                                        , justifyContent: 'space-between'
                                        , flexWrap: 'nowrap'
                                        }
                                , anchor: { color: color.accent, textDecoration: 'none' }
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
                      , ul: { marginLeft: '15%'
                            , marginRight: '15%'
                            , paddingTop: 10
                            , paddingBottom: 10
                            , lineHeight: 2
                            }
                      , paragraph:  {
                                    //, margin: 15
                                    padding: 10
                                    }
                      , form: {
                              //, margin: 15
                              padding: 10
                              }
                      , input:  { color: p['base03']
                                , backgroundColor: p['base3']
                                , fontSize: '1.1em'
                                , padding: 10
                                , minWidth: 300
                                , borderColor: color.tertiary
                                , borderRadius: 4
                                , borderWidth: 1
                              , borderStyle: 'solid'
                              }
                    }
            }
  }

  const getTheme = (themeName = defaultThemeName, context) => {
    assert.ok(themeName)
    assert.typeOf(themeName, 'string')
    assert(themeName.includes('-'), `themeName must be of format '(schemeName)-(light|dark)`)
    const [schemeName, lightOrDark] = themeName.split('-')
    assert(['light', 'dark'].indexOf(lightOrDark) !== -1, 'theme must have light or dark specified.')
    const inverted = lightOrDark === 'dark'
    const palette = getScheme(schemeName)
    assert.ok(palette, `No theme exists for scheme '${schemeName}', options are [${schemeNames.join(',')}]`)
    const theme = buildTheme(themeName, palette, inverted)
    const override = overrideTheme(themeName, context)
    if(override)
      return { ...theme, ...override(theme), isOverridden: true }
    return theme
  }

  return getTheme
}
