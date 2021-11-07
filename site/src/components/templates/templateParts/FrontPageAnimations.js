/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Parallax from '../../Parallax'
import BrandAnimation from '../../BrandAnimation'
import servicesMobile from '../../../images/services-mobile.svg'

export const FrontPageAnimations = ({ page, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "services-mobile.svg" }) {
        childImageSharp {
          fixed(width: 375) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return (
    <Box {...props} sx={{ ...style }}>
      <Parallax />
      <div id="brand">
        <BrandAnimation />
      </div>
      <Flex
        className="px-5 mobileImage"
        sx={{ bg: 'black', justifyContent: 'center' }}
      >
        <img src={servicesMobile} alt="services" />
      </Flex>
    </Box>
  )
}

const style = {
  '#brand': {
    display: ['none', 'block'],
  },
  '.mobileImage': {
    display: ['flex', 'none'],
  },
}
