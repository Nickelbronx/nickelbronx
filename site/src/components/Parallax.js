/** @jsx jsx */
import { jsx, Flex, Box, Container } from 'theme-ui'
import { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BgImage from './images/BgImage'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Words from './Words'
// import clsx from 'clsx'

import { FormDown } from 'grommet-icons'

const Parallax = (props) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }
    gsap.to('.textOne', { duration: 0.01, autoAlpha: 1 })

    gsap.fromTo(
      '.textWrap',
      { autoAlpha: 0, y: 50 },
      { duration: 0.5, autoAlpha: 1, y: 0, delay: 1 }
    )
    let tl = gsap.timeline({
      // paused: true,
      scrollTrigger: {
        trigger: '.slideOne',
        scrub: true,
        pin: true,
        // markers: true,
        start: 'top top',
        end: 'bottom top',
      },
    })
    tl.to('.overlay', 2, { backgroundColor: 'rgba(0,0,0,.85)' })
    tl.to(['.textOne, .letters'], 1, { y: -300, autoAlpha: 0 }, 0)

    tl.to('.textTwo', 1, { y: -300, autoAlpha: 1 }, 0.5)
  }, [])

  const data = useStaticQuery(graphql`
    query {
      wp {
        themeOptions {
          homeImage {
            heroImage {
              ...ImageCoverFragment
            }
          }
        }
      }
    }
  `)

  const { heroImage } = data.wp.themeOptions.homeImage

  return (
    <Box id="top" className="slideOne" sx={{ ...styles }} {...props}>
      <BgImage
        img={heroImage}
        className="bgImage"
        backgroundColor="black"
        sx={{ minHeight: '100vh', bg: 'black' }}
      >
        <div className="flex overlay">
          <Container
            className="textWrap absolute top-[45%] !px-8"
            // sx={{
            //   position: 'relative',
            //   px: '30px !important',
            // }}
          >
            <div className="flex">
              <h1
                className="text-white textOne"
                sx={{
                  float: ['none', 'none', 'none', 'left'],
                  textAlign: 'center',
                  mr: 25,
                  mb: 0,
                  opacity: 0,
                  visibility: 'hidden',
                }}
              >
                we give{' '}
              </h1>
              <div className="letters">
                <Words />
              </div>
            </div>
            <h1 className="text-white textOne">
              an unfair{' '}
              <span
                className="!text-black"
                style={{ color: 'black' }}
                sx={{
                  WebkitTextStrokeWidth: '1px',
                  WebkitTextStrokeColor: 'white',
                }}
              >
                advantage
              </span>
            </h1>
          </Container>

          <div className="textTwo max-w-[700px] px-50 sm:px-0 relative">
            <h3 className="-mb-2 capitalize text-7xl font-script text-primary">
              Our Mission
            </h3>
            <div className="text-xl leading-relaxed text-white">
              You can't just buy a great brand, but we can build one for you.
              When it comes to identity, looks more than skin deep.Analytics,
              Traffic, SEO and SEM are critical components to bring people to
              you - but what makes them stay?
            </div>
            <div className="inline-block p-2 my-5 text-2xl text-black uppercase bg-primary font-heading">
              If you don't care about your aesthetic,
              <div>we're probably not the agency for you</div>
            </div>
            <div className="text-xl leading-relaxed text-white">
              if you want to build a magnetic brand that resonates and attracts
              the RIGHT clients, across all mediums and chanels, then maybe we
              are.
            </div>
          </div>
        </div>
        <Flex
          sx={{
            height: '100vh',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'flex-end',
            pb: 50,
          }}
        >
          <AnchorLink href="#brand" sx={{ position: 'relative', bottom: 0 }}>
            <Flex className="scrollDown">
              <FormDown
                color="white"
                size="large"
                sx={{ polyline: { strokeWidth: 1 } }}
              />
            </Flex>
          </AnchorLink>
        </Flex>
      </BgImage>
    </Box>
  )
}

export default Parallax

const styles = {
  position: 'relative',
  '.overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'rgba(0,0,0,.6)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',

    '.textOne, .textTwo': {
      // color: 'white',
      // span: {
      //   fontFamily: 'have_heart_oneregular',
      //   color: 'primary',
      // },
    },
    // '.textWrap': {
    //   position: 'absolute',
    //   top: '45%',
    //   // transform: 'translateY(-50%)',
    // },
    '.textOne': {
      fontSize: [30, 50, 70],
    },
    '.textTwo': {
      // maxWidth: 800,
      px: [50, 0],
      // lineHeight: 1.3,
      // fontSize: [25, 30, 45],
      // position: 'relative',
      top: 200,
      opacity: 0,
      visibility: 'hidden',
    },
    '.letters': {
      position: 'relative',
      top: [0, 0, 0, 0],
      //ml: 25,
      svg: { visibility: 'hidden',width: [200, 300, 450], cursor: 'pointer', fill: "#d83e00" }
    },
  },
}
