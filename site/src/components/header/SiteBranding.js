/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import logo from '../../images/logo-header.png'

const SiteBranding = ({ title, ...props }) => {
  return (
    <Link as="Link" to="/" rel="home">
      <div {...props}>
        <img src={logo} className="w-[250px] mb-0 py-3" alt="falcon lab logo" />
      </div>
    </Link>
  )
}

const styles = {
  alignItems: 'center',
  img: {
    maxWidth: [50, 73],
    mb: 0,
    mr: [10, 22],
  },
  h1: {
    fontSize: ['m', 'l'],
    textTransform: 'uppercase',
    fontFamily: 'heading',
    fontWeight: 500,
    letterSpacing: [4, 9],
    lineHeight: 1.5,
    color: 'headerColor',
    variant: 'transitions.m',
    '.home-page &,.contact-page &,.services-page &': {
      color: 'white',
    },
    '&:hover': {
      color: 'primary',
    },
    m: 0,
  },
}
export default SiteBranding
