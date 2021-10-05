import React from 'react'
import ContentParser from 'gatsby-plugin-wordpress-parser'
import { cf7ParserFunction } from 'gatsby-plugin-wpcf7'

import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'

const ParsedContent = ({ content }) => {
  const options = useThemeOptions()
  const parserFunctions = [cf7ParserFunction]

  return <ContentParser content={content} customFn={parserFunctions} />
}

export default ParsedContent
