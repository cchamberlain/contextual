import * as base16 from 'base16'

export const schemeNames = Object.keys(base16)

export const getScheme = schemeName => fromBase16(base16[schemeName])

/** Converts base16 to solarized style colors */
export const fromBase16 = scheme => ( { scheme: scheme.scheme
                                      , base03: scheme.base00
                                      , base02: scheme.base01
                                      , base01: scheme.base02
                                      , base00: scheme.base03
                                      , base0: scheme.base04
                                      , base1: scheme.base05
                                      , base2: scheme.base06
                                      , base3: scheme.base07
                                      , red: scheme.base08
                                      , orange: scheme.base09
                                      , yellow: scheme.base0A
                                      , green: scheme.base0B
                                      , cyan: scheme.base0C
                                      , blue: scheme.base0D
                                      , magenta: scheme.base0E
                                      , violet: scheme.base0F
                                      } )
