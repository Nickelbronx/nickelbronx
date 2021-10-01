/** @jsx jsx */
import { Container, jsx, Box } from 'theme-ui'
import SocialFollow from '../social/SocialFollows'
import ContactInfo from '../ContactInfo'
import Menu from '../header/Menu'
import { FeaturedPosts } from '../widgets'
import footerLogo from '../../images/logo-footer.png'

const Footer = () => {
  return (
    <footer className="pb-5 bg-black pt-9">
      {/* <Container className="footerContainer">
        <div>
          <div className="flex">
            <img src="../../images/logo-footer.png" alt="footer logo" />
          </div>
        </div>
        <Box>
          <div>
            <h3>Contact</h3>
            <ContactInfo />

            <Box className="social" sx={{ fontWeight: 'bold' }}>
              Follow us on
              <Box className="socialItems" sx={{ ...socialStyles }}>
                <SocialFollow />
              </Box>
            </Box>
          </div>
        </Box>
        <Box>
          <div>
            <h3>News</h3>
            <FeaturedPosts
              location="footer"
              sx={{ a: { display: 'inline-block', mb: 10.8 } }}
            />
          </div>
        </Box>
        <Box>
          <div>
            <h3>Services</h3>
            <Menu menuName="footer" sx={{ ...footerMenuStyles }} />
          </div>
        </Box>
      </Container> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-[1100px] md:px-5 mx-auto">
        <div className="">
          <img src={footerLogo} alt="logo" />
        </div>

        <div className="">
          <h3 className="footer-title">Contact</h3>
          <ContactInfo className="mb-10" />
          <h3 className="footer-title">follow</h3>
        </div>
        <div className=" bg-gray-500 h-[300px]"></div>
        <div className=" bg-gray-500 h-[300px]"></div>
      </div>
    </footer>
  )
}

const styles = {
  bg: 'footerBg',
  pt: 20,
  pb: 40,
  color: 'footerColor',
  fontSize: 16,
  a: {
    color: 'footerColor',
    '&:hover': {
      color: 'accent',
    },
  },
  '.footerContainer': {
    width: '100%',
    display: ['block', 'flex', 'flex'],
    justifyContent: 'space-between',
    maxWidth: 1100,
    '>div': {
      display: ['block', 'flex', 'flex'],
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: ['100%', '33%', '33%'],
    },
  },
  h3: {
    color: 'white',
    textTransform: 'uppercase',
    mb: 25,
    fontSize: 20,
  },
}

const socialStyles = {
  mb: [50, 0],
  bg: 'primary',
  mt: 10,
  height: 40,
  position: 'relative',
  ml: [0, '-50vw'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.widget': {
    position: ['relative', 'absolute'],
    right: ['initial', '3%'],
    top: [3, 8],
  },
  a: {
    '&:hover': {
      svg: {
        color: 'black',
      },
    },
  },
  svg: {
    mr: 20,
    width: 22,
    height: 22,
    variant: 'transitions.m',
  },
}

const footerMenuStyles = {
  ul: {
    m: 0,
  },
  '.menu-item': {
    listStyleType: 'none',
  },
}

export default Footer
