/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BgImage from './images/BgImage'
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax, TimelineMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FormDown } from 'grommet-icons'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

const Parallax = (props) => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller()
    var parallaxTl = new TimelineMax()
    parallaxTl
      .to('.overlay', 2, { backgroundColor: 'rgba(0,0,0,.85)' })
      .to('.textOne', 1, { y: -300, autoAlpha: 0 }, 0)
      .to('.textTwo', 1, { y: -300, autoAlpha: 1 }, 0.5)

    var parallaxScene = new ScrollMagic.Scene({
      triggerElement: '.slideOne',
      triggerHook: 0,
      duration: '100%',
    })
      .setPin('.slideOne')
      .setTween(parallaxTl)
      .addIndicators()
      .addTo(controller)
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
        <Flex className="overlay">
          <h1 className="textOne">
            this is your <span>Design Lab</span>
          </h1>
          <h2 className="textTwo">
            At The Falcon Lab, We strive to intimately understand your brand so
            we are able to fluidly execute your vision.
          </h2>
        </Flex>
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
      color: 'white',
      span: {
        fontFamily: 'have_heart_oneregular',
        color: 'primary',
      },
    },
    '.textOne': {
      fontSize: [30, 50, 80],
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '.textTwo': {
      maxWidth: 550,
      px: [30, 0],
      lineHeight: 1.3,
      fontSize: [30, 45],
      position: 'relative',
      top: 200,
      opacity: 0,
      visibility: 'hidden',
    },
  },
}
