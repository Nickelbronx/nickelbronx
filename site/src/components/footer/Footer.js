/** @jsx jsx */
import { Container, jsx, Box } from 'theme-ui'
import SocialFollow from '../social/SocialFollows'
import ContactInfo from '../ContactInfo'
import Menu from '../header/Menu'
import { Link, useStaticQuery, graphql } from 'gatsby'
import footerLogo from '../../images/logo-footer.png'

const LAST_POSTS = graphql`
  query {
    allWpPost(limit: 4) {
      nodes {
        id
        title
        uri
      }
    }
  }
`;

const Footer = () => {
  const data = useStaticQuery(LAST_POSTS)
  const { nodes: posts } = data.allWpPost

  return (
    <footer className="pt-10 pb-8 bg-black">
      <div className="container mx-auto px-7 ">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex justify-center">
            <div>
              <img src={footerLogo} alt="logo" className="max-w-[150px]" />
            </div>
          </div>
          <div className="">
            <h3 className="footer-title">Contact</h3>
            <ContactInfo className="mb-10" />
            <h3 className="footer-title">follow</h3>
            <SocialFollow />
          </div>
          <div className="">
            <h3 className="footer-title">News</h3>
            <ul role="menu" className="m-0">
              {posts?.map((post) => (
                <li key={post.id} className="m-1">
                  <Link to={post.uri} className="text-base text-white">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="footer-title">Services</h3>
            <h4 className="footer-subtitle">Design</h4>
            <Menu
              menuName="design"
              sx={{ ...footerMenuStyles }}
              className="mb-5"
            />
            <h4 className="footer-subtitle">Marketing</h4>
            <Menu menuName="marketing" sx={{ ...footerMenuStyles }} />
          </div>
        </div>
        <div className="flex justify-center mt-5 text-sm text-center text-white">
          NickelBronx, Copyright {new Date().getFullYear()}
          <script type="text/javascript" class="testing" id="hs-script-loader" async defer src="//js.hs-scripts.com/8151700.js"></script>
        </div>
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
    fontSize: 16,
    mb: 4,
    a: {
      color: 'white',
      '&:hover': {
        color: 'primary',
      },
    },
  },
}

export default Footer
