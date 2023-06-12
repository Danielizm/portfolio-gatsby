import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface Bpros {
  header?: String
  alt?: String
  img: any
}

const banner = (props: Bpros) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const handleOnScroll = () => {
    const toggle_btn = document.getElementById("toggle-btn")!.classList
    setIsScroll(window.scrollY > 50)
    if (!isScroll && !toggle_btn.contains("white")) {
      toggle_btn.add("white")
    } else if(isScroll && toggle_btn.contains("white")){
      toggle_btn.remove("white")
    }
  }

  useEffect(() => {
    setIsLoaded(true)
    window.addEventListener("scroll", handleOnScroll)
    return () => {
      setIsLoaded(false)
      window.removeEventListener("scroll", handleOnScroll)
    }
  }, [isLoaded,isScroll])

  return (
    <div className="banner" data-loaded={isLoaded ? "loaded" : ""}>
      <GatsbyImage image={getImage(props.img)} alt={props.alt} className="banner-image"/>
      <h1>{props.header}</h1>
      <div className="overlay"></div>
    </div>
  )
}

export default banner
