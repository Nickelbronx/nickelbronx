/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import visualIdentity from '../images/visualIdentityNb.png'
import content from '../images/contentNb.png'
import lead from '../images/leadNb.png'
import web from '../images/webNb.png'
import marketing from '../images/marketingNb.png'
import social from '../images/socialNb.png'
import seo from '../images/seoNb.png'
import yourBrand from '../images/yourBrandNb.png'

const BrandAnimation = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)
      gsap.core.globals(
        'ScrollTrigger,DrawSVGPlugin',
        ScrollTrigger,
        DrawSVGPlugin
      )
    }

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#brandAnimation',
        scrub: true,
        pin: '.svgContainer',
        // pinSpacing: false,
        // markers: true,
        start: 'top top',
        end: 'bottom bottom',
      },
    })
    tl2.from('#visualIdentityLine', { duration: 1, drawSVG: 0 }, 0)
    tl2.from('#visualIdentityArr', 1, { autoAlpha: 0 })
    tl2.from('#visualIdentityImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#contentLine', { duration: 1, drawSVG: 0 })
    tl2.from('#contentArr', 1, { autoAlpha: 0 })
    tl2.from('#contentImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#seoLine', { duration: 1, drawSVG: 0 })
    tl2.from('#seoArr', 1, { autoAlpha: 0 })
    tl2.from('#seoImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#leadLine', { duration: 1, drawSVG: 0 })
    tl2.from('#leadArr', 1, { autoAlpha: 0 })
    tl2.from('#leadImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#marketingLine', { duration: 1, drawSVG: 0 })
    tl2.from('#marketingArr', 1, { autoAlpha: 0 })
    tl2.from('#marketingImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#socialLine', { duration: 1, drawSVG: 0 })
    tl2.from('#socialArr', 1, { autoAlpha: 0 })
    tl2.from('#socialImg', { duration: 3, autoAlpha: 0, scale: 0.95 })

    tl2.from('#webLine', { duration: 1, drawSVG: 0 })
    tl2.from('#webArr', 1, { autoAlpha: 0 })
    tl2.from('#webImg', { duration: 3, autoAlpha: 0, scale: 0.95 })
    // tl2.to(".slideTwo", { duration: 1, height: "100vh" });
  }, [])
  return (
    <div id="brandAnimation" sx={{ bg: 'black', height: '500vh' }}>
      <div
        className="svgContainer"
        sx={{ height: '100vh', position: 'relative' }}
      >
        <svg
          fill="none"
          viewBox="0 0 1920 1080"
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <rect width="1920" height="1080" fill="#000" />
          <g
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="#fff"
            strokeWidth="6"
          >
            <path
              id="visualIdentityLine"
              className="line"
              d="M978.3 477.8c25.4-15.6 62.3-34.4 78.9-71.7 14.1-31.4 11.3-80.4 10.5-90.5-.8-10.1-4.3-35.7-4.3-35.7"
            />
            <path
              id="marketingLine"
              className="line"
              d="M1111.4 483.3s9.6-29.3 34.5-65.6c23.6-34.4 36-57 66.7-92.3 38.4-44.2 82.3-65.1 82.3-65.1"
            />
            <path
              id="contentLine"
              className="line"
              d="M1124.6 524.7s15.8 8.8 49.4 13.7c33.6 4.8 53.2 2 70.4-1.3 17.2-3.2 31.4-17.2 35.4-27.1 4-9.9.5-24.4-13.8-28.2-14.4-3.8-19.8 7-19 14.2.7 7.2 9.7 17.2 22.3 19.2s33.8 2.2 66.3-2.7c26.6-4 46.7 2 46.7 2"
            />
            <path
              id="socialLine"
              className="line"
              d="M1161.9 610.8s15.9-7.1 31.4-5.9 26.8 5 46.4 18.8c19.5 13.8 37 39.7 48.5 62.4 11.5 22.8 22 49.5 28.4 63.3 6.3 13.8 18.4 39.1 33.3 54.5 13.1 13.5 33.8 23.9 57.6 14.6"
            />
            <path
              id="seoLine"
              className="line"
              d="M776.1 581.7s-22.6 39.8-32.7 61.6c-10.1 21.8-19.1 43.6-22.6 59.6-4.1 19-2.4 43.8 12.1 53.5 9 6 33.5 14.8 53.7 8.6 20.1-6.2 19.5-28.2 16.4-36.1s-15.6-30.3-40.2-12c-25.6 19-34 50-37.4 64.8-2.9 12.8-4.8 44.3 14.7 61.3 11.2 9.8 31.5 17.3 54.5 4.7 23-12.5 40.8-39.2 40.8-39.2"
            />
            <path
              id="webLine"
              className="line"
              d="M681.6 534.4s-60.5-6.7-107.1-2.2C528 536.8 496.8 551.9 473 571c-23.8 19.1-51 50.6-65.7 94.3"
            />
            <path
              id="leadLine"
              className="line"
              d="M758.5 462.3s-15.4-43.7-33-63.9c-15.8-18.1-31.5-29.6-56.9-32.3-20.1-2.2-39.3 2.6-40.5 13.5-1.3 10.9 16 17.5 24.3 12.4 8.3-5.2 19.6-13.4 15.7-38.3-3.9-25.5-28.2-42.4-44.1-51.5-15.9-9.1-35.9-17.3-60.9-19.7"
            />
            <path
              id="visualIdentityArr"
              className="arrow"
              d="M1083.15 300.517s-8.128-13.024-16.316-23.517c-6.169 8.811-12.028 28.076-12.028 28.076s16.354-23.719 18.495-26.533"
            />
            <path
              id="marketingArr"
              className="arrow"
              d="M1267.25 252.644s7.286.751 11.93 2.249c4.644 1.498 13.531 4.134 17.066 3.615-2.351 5.4-6.055 13.029-8.266 17.133-1.399 2.587-8.056 10.561-8.056 10.561"
            />
            <path
              id="contentArr"
              className="arrow"
              d="M1375.28 498.393s13.315 15.437 19.667 19.134c-8.874 3.286-32.034 8.799-32.034 8.799"
            />
            <path
              id="socialArr"
              className="arrow"
              d="M1382.99 807.475s4.73 5.692 11.26 8.239c7.339 2.988 12.182 2.219 15.119 2.066-2.087 4.644-6.19 14.118-17.635 22.851 5.107-7.395 17.319-22.838 18.753-24.132"
            />
            <path
              id="seoArr"
              className="arrow"
              d="M819.708 809.239s16.325-6.981 24.744-13.935c-.03 6.046-1.107 33.214-1.107 33.214"
            />
            <path
              id="webArr"
              className="arrow"
              d="M399.357 646.653l2.86 21.14s13.249-11.662 34.01-20.564"
            />
            <path
              id="leadArr"
              className="arrow"
              d="M576.006 265.906S570.2 274.775 563 282.5c4.061 1.61 6.421 5.161 7.17 10.762"
            />
          </g>
          <image
            id="yourBrand"
            href={yourBrand}
            x="699.77"
            y="489.82"
            width="440"
            height="207"
          />
          <Link to="/service/visualIdentity">
            <image
              id="visualIdentityImg"
              className="img"
              href={visualIdentity}
              x="694.22"
              y="60"
              width="471"
              height="210"
            />
          </Link>
          <Link to="/service/marketing">
            <image
              id="marketingImg"
              className="img"
              href={marketing}
              x="1327.201"
              y="79.649"
              width="470"
              height="270"
            />
          </Link>
          <Link to="/service/content">
            <image
              id="contentImg"
              className="img"
              href={content}
              x="1419.14"
              y="398.25"
              width="401"
              height="210"
            />
          </Link>
          <Link to="/service/social">
            <image
              id="socialImg"
              className="img"
              href={social}
              x="1442.91"
              y="723.88"
              width="382"
              height="197"
            />
          </Link>
          <Link to="/service/seo-dev">
            <image
              id="seoImg"
              className="img"
              href={seo}
              x="831.066"
              y="746.86"
              width="483"
              height="205"
            />
          </Link>
          <Link to="/service/web">
            <image
              id="webImg"
              className="img"
              href={web}
              x="106.455"
              y="580"
              width="511"
              height="325"
            />
          </Link>
          <Link to="/service/design">
            <image
              id="leadImg"
              className="img"
              href={lead}
              x="85.84"
              y="153.94"
              width="437"
              height="305"
            />
          </Link>
        </svg>
      </div>
    </div>
  )
}

export default BrandAnimation
