//import { Link } from "gatsby"
import React,{useEffect, useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink"

interface Props{
  atHome?:boolean;
}

const Header = ({atHome}:Props) => {
  const [isSticky,setIsSticky] = useState(false)
  const handleScroll = () => {
    setIsSticky(window.pageYOffset > 50)
  }
  const heightUnit = ()=>{
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh',`${vh}px`)
  }
  
  useEffect(()=>{
    heightUnit()
    window.addEventListener('resize',heightUnit)
    window.addEventListener('scroll', handleScroll)
    return () =>{
      window.removeEventListener('resize',heightUnit)
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
  <header className={isSticky?'sticky':''}>
    <div>
      <div className="inner-header">
        <div className="logo">
           <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/">
           <StaticImage 
              src="../images/logo.png"
              alt="Logo Image"
              placeholder="blurred" />
           </AniLink>
        </div>
        <div className={atHome?"navigation":"navigation white"}>
          <nav>
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/">Home</AniLink>
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/about">About</AniLink>
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work">Work</AniLink>
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/contact">Contact</AniLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
}

export default Header
