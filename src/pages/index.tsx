import React from "react"
//import "../styles/style.scss"
import Layout from "../components/layout"
/*import Banner from "../components/homeBanner"
import AboutBlurb from "../components/aboutBlurb"
import PortfolioBlurb from "../components/portfolioBlurb"
import ContactBar from "../components/contactBar"*/
import SEO from "../components/seo"
//import {gsap,Power2} from 'gsap'
//import {ScrollTrigger} from "gsap/ScrollTrigger"

const IndexPage = () => {

  /*useEffect(()=>{   
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      } 
    const tlAbimg = gsap.timeline({scrollTrigger:{trigger:'.images',start:'top 80%',end:'bottom top'}})
    const tlAbout = gsap.timeline({ease:Power2.easeInOut,scrollTrigger:{trigger:'.content',start:'top 85%',end:'bottom top'}})
    
    tlAbimg.from('.images .top-right',{duration:1.5,opacity:0,y:100,ease:Power2.easeInOut})
            .from('.images .top-right > *',{duration:1.5,scale:1.8,ease:Power2.easeInOut},"0.5")
            .from('.black-box',{duration:2,opacity:0,x:500,ease:Elastic.easeInOut},'<')
            .from('.images .bottom-left',{duration:1,opacity:0,y:100,ease:Power2.easeInOut},'<')
            .from('.images .bottom-left > *',{duration:1.5,scale:1.8,ease:Power2.easeInOut},'<0.5')
    
    tlAbout.from('.content',{duration:0.8,y:100,scrollTrigger:{trigger:'.content',start:'top bottom',end:'bottom top'}})
      .from('.content > *',{duration:0.8,stagger:0.2,y:60,opacity:0},"<0.2")


    gsap.to('.scroll',{duration:0.5,opacity:0,ease:Power2.easeInOut,scrollTrigger:{trigger:'.scroll',start:'top 95%',scrub:true,markers:false}})
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  },[])*/
  
  return (
  <Layout isHome={true}>
    <SEO title="Home"/>
    {/*<Banner />
    <AboutBlurb />
    <PortfolioBlurb />
    <ContactBar />*/}
  </Layout>
  )
}

export default IndexPage
