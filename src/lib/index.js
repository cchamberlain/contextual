import { assert } from 'chai'
import createContextTypes from './createContextTypes'
import theme from './theme'

export default function contextual( { React
                                    , defaultTheme
                                    , overrideTheme = (themeName, context) => {}
                                    , themeShape
                                    , useGridProps
                                    } = {} ) {
  const contextTypes = createContextTypes({ React, themeShape, useGridProps })
  const getTheme = theme({ defaultTheme, overrideTheme })
  assert.ok(contextTypes, 'contextTypes could not be generated')
  assert.ok(getTheme, 'getTheme could not be generated')
  return { contextTypes, getTheme }
}
