import { assert } from 'chai'
import createContextTypes from './createContextTypes'
import theme from './theme'
import { schemeNames } from './theme/scheme'

export default function contextual( { React
                                    , defaultThemeName
                                    , overrideTheme = (themeName, context) => {}
                                    , themeShape
                                    , useGridProps
                                    } = {} ) {
  const contextTypes = createContextTypes({ React, themeShape, useGridProps })
  const getTheme = theme({ defaultThemeName, overrideTheme })
  assert.ok(contextTypes, 'contextTypes could not be generated')
  assert.ok(getTheme, 'getTheme could not be generated')
  return { contextTypes, getTheme, defaultTheme: getTheme(defaultThemeName), schemeNames }
}
