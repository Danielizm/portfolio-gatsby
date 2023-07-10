import React, { useEffect, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import {FiLinkedin} from "react-icons/fi"
import { StaticImage } from "gatsby-plugin-image"
import {gsap,Power2} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"

const banner = () => {
  const [isLoaded, setIsLoad] = useState(false)
  useEffect(() => {
    setIsLoad(true)
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      }
      gsap.to('.scroll',{duration:0.5,opacity:0,ease:Power2.easeInOut,scrollTrigger:{trigger:'.scroll',start:'top 95%',scrub:true,markers:false}})
      return () => {
        setIsLoad(false)
        ScrollTrigger.getAll().forEach(t => t.kill());
      }; 
  }, [isLoaded])

  return (
    <div className={"home-banner " + (isLoaded ? "loaded" : "")}>
      <div className="animated-bg">
        {Array.from(Array(25)).map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div className="container">
        <div className="row">
          <div className="main-text">
            <p>
              Welcome to my portfolio!
              <br />I am a passionate and versatile web developer with experiences of both frontend and
              backend, focusing on constructing and developing websites and web apps by using technologies like 
              <span className="rw-words rw-words-1">
                <span>HTML5</span>
                <span>CSS/SASS</span>
                <span>Javascript</span>
                <span>ReactJS</span>
                <span>Node.js</span>
                <span>Git</span>
                <span>PHP</span>
                <span>CMS</span>
              </span>
            </p>
            <h1>
              {"Daniel".split('').map((letter:string,index:number)=>(
                <span key={index} className="bounceIn" id={"letter-"+index}>{letter}</span>
              ))}</h1>
              <h1>
              {"Su".split('').map((letter:string,index:number)=>(
                <span key={index} className="bounceIn" id={"letter-"+(index+6)}>{letter}</span>
              ))}
            </h1>
          </div>
          <div className="face">
            <StaticImage
              src="../images/face-3.png"
              alt="Hero Image"
              placeholder="blurred"
              className="hero-img"
            />
          </div>
          <div className="scroll">
            <div>Scroll Down</div>
            <span>
              <MdKeyboardArrowDown />
            </span>
            <a className="linkedin" href="https://www.linkedin.com/in/daniel-su-a13668191/" target="_black"><FiLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="fixed-misc">Web Development</div>
    </div>
  )
}

export default banner
