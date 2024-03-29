import { rem } from 'polished'

export const fonts = {
  body: 'proxima_novaregular, sans-serif',
  heading: 'Apex, sans-serif',
  script: 'Have Heart One',
  bold: 'proxima_novabold, sans-serif',
}

export const fontWeights = {
  body: 400,
  heading: 'normal',
  bold: 700,
}

export const fontSizes = {
  xxs: rem('12px'),
  xs: rem('14px'),
  s: rem('18px'),
  m: rem('20px'),
  l: rem('24px'),
  xl: rem('32px'),
  xxl: rem('48px'),
  Big: rem('64px'),
  Bigger: rem('96px'),
}

export const lineHeights = {
  body: 1.8,
  heading: 1.1,
  loose: 2,
  none: 1,
}

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  color: 'text',
  textTransform: 'uppercase',
  a: {
    borderBottom: 'none',
  },
}

export const a = {
  variant: 'transitions.m',
  color: 'accent',
  // fontWeight: 'bold',
  textDecoration: 'none',
  '&:hover': {
    color: 'primary',
  },
}

export const p = {
  fontSize: ['s'],
  lineHeight: 'body',
  color: 'text',
}

export const h1 = {
  ...heading,
  fontSize: ['xl', 'xxl'],
  mt: 'xxs',
}
export const h2 = {
  ...heading,
  fontSize: ['l', 'xl'],
  mt: 'xxs',
}

export const h3 = {
  ...heading,
  fontSize: ['m', 'l'],
  mt: 'xs',
}
export const h4 = {
  ...heading,
  fontSize: ['s', 'm'],
}

export const h5 = {
  ...heading,
  fontSize: 'xs',
}
export const h6 = {
  ...heading,
  fontSize: 'xs',
  color: 'muted',
  mb: 'xxs',
}
export const blockquote = {
  fontStyle: 'italic',
  bg: 'background',
  px: [20, 50],
  py: 40,
  borderLeft: '5px solid',
  borderColor: 'primary',
  maxWidth: '800px !important',
  mx: 'auto',
}

export const base = {
  fontSize: 's',
  color: 'text',
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
}
