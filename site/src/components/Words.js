/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, Fragment } from 'react'
import { gsap, Linear } from 'gsap'

import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import {AnimatedWords} from './animatedWords'

const Words = (props) => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(DrawSVGPlugin)
      gsap.core.globals('DrawSVGPlugin', DrawSVGPlugin)
    }
    gsap.set(
      [
        "#Brands_Lab",
      "#Websites_Lab",
      "#Marketing_Lab",
      "#Strategy_Lab",
      "#Lead_Gen_Lab",
      "#Demand_gen_Lab",
      "#Content_Lab",
      "#Messaging_Lab",
      "#Social_Lab",
      "#Ads_Lab"
      ],
      { autoAlpha: 0 }
    )
    
    const gen = ["#m-gen-G", "#m-gen-e", "#m-gen-n"];
    function genTl() {
      let gen_tl = gsap.timeline();
      gen_tl
        .fromTo("#m-gen-G", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
        .fromTo("#m-gen-e", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
        .fromTo("#m-gen-n", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });
      return gen_tl;
    }
    let brands_tl = gsap.timeline({ paused: true });
brands_tl
  .fromTo("#m-Brands-B-line", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Brands-B-circle", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Brands-r", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Brands-a", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Brands-n", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Brands-d", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Brands-s", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });

let websites_tl = gsap.timeline({ paused: true });
websites_tl
  .fromTo("#m-Websites-W", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Websites-e-1", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Websites-b", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Websites-s-1", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Websites-i", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Websites-t-vLine", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Websites-t-hLine", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Websites-e-2", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Websites-s-2", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });

let marketing_tl = gsap.timeline({ paused: true });
marketing_tl
  .fromTo("#m-marketing-M", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-marketing-a", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-marketing-r", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-marketing-k-line", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-marketing-k-cross", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-marketing-e", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-marketing-t", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })

  .fromTo("#m-marketing-i-line", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-marketing-i-dot", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-marketing-n", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-marketing-g", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });

let strategy_tl = gsap.timeline({ paused: true });
strategy_tl
  .fromTo("#m-strategy-S", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-strategy-t", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-strategy-r", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-strategy-a", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-strategy-t-2-vLine", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-strategy-t-2-hLine", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-strategy-e", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-strategy-g", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-strategy-y", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });

let lead_gen_tl = gsap.timeline({ paused: true });
lead_gen_tl
  .fromTo("#m-Lead-L", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Lead-e", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Lead-a", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-Lead-d", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });

let demand_gen_tl = gsap.timeline({ paused: true });
demand_gen_tl
  .fromTo("#m-demand-D-line", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-demand-D-circle", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-demand-e", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-demand-m", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-demand-a", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-demand-n", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-demand-d-2", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });

let content_tl = gsap.timeline({ paused: true });
content_tl
  .fromTo("#m-content-C", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-content-o", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-content-n", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-content-t-1-vLine", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-content-t-1-hLine", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-content-e", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-content-n-2", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-content-t-2-vLine", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-content-t-2-hLine", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });

let messaging_tl = gsap.timeline({ paused: true });
messaging_tl
  .fromTo("#m-messaging-M", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-messaging-e", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-messaging-s-1", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-messaging-s-2", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-messaging-a", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-messaging-g-1", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-messaging-i-line", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-messaging-i-dot", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-messaging-n", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-messaging-g-2", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });

let social_tl = gsap.timeline({ paused: true });
social_tl
  .fromTo("#m-social-S", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-social-o", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-social-c", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-social-i-line", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-social-i-dot", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-social-a", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-social-l", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });

let ads_tl = gsap.timeline({ paused: true });
ads_tl
  .fromTo("#m-ads-A", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-ads-d", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" })
  .fromTo("#m-ads-s", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%" });
    

    let master = gsap.timeline({
      paused: true,
      onComplete: function () {
        this.restart()
      },
    })
    master
    .to("#Brands_Lab", { autoAlpha: 1, duration: 0.1 })
    .add(brands_tl.play())
    .to("#Brands_Lab", { autoAlpha: 0, duration: 0.1 })

    .to(["#Websites_Lab"], { autoAlpha: 1, duration: 0.1 })
    .add(websites_tl.play())

    .to("#Websites_Lab", { autoAlpha: 0, duration: 0.1 })

    .to("#Marketing_Lab", { autoAlpha: 1, duration: 0.1 })
    .add(marketing_tl.play())

    .to("#Marketing_Lab", { autoAlpha: 0, duration: 0.1 })

    .to("#Strategy_Lab", { autoAlpha: 1, duration: 0.1 })
    .add(strategy_tl.play())

    .to("#Strategy_Lab", { autoAlpha: 0, duration: 0.1 })

    .to("#Lead_Gen_Lab", { autoAlpha: 1, duration: 0.1 })
    .add(lead_gen_tl.play())
    .add(genTl())

    .to("#Lead_Gen_Lab", { autoAlpha: 0, duration: 0.1 })
    .set(gen, { drawSVG: "0% 0%" })

    .to("#Demand_gen_Lab", { autoAlpha: 1, duration: 0.1 })
    .add(demand_gen_tl.play())
    .add(genTl())

    .to("#Demand_gen_Lab", { autoAlpha: 0, duration: 0.1 })
    .set(gen, { drawSVG: "0% 0%" })

    .to("#Content_Lab", { autoAlpha: 1, duration: 0.1 })
    .add(content_tl.play())

    .to("#Content_Lab", { autoAlpha: 0, duration: 0.1 })

    .to("#Messaging_Lab", { autoAlpha: 1, duration: 0.1 })
    .add(messaging_tl.play())

    .to("#Messaging_Lab", { autoAlpha: 0, duration: 0.1 })

    .to("#Social_Lab", { autoAlpha: 1, duration: 0.1 })
    .add(social_tl.play())

    .to("#Social_Lab", { autoAlpha: 0, duration: 0.1 })
    
    .to("#Ads_Lab", { autoAlpha: 1, duration: 0.1 })
    .add(ads_tl.play())

    .to("#Ads_Lab", { autoAlpha: 0, duration: 0.1 });
    master.timeScale(2.5).play()
  }, [])

  return (
    <div>
      <AnimatedWords />
    </div>
  )
}

export default Words
