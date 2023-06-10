import React,{useEffect} from 'react'
//import {Link} from 'gatsby'
import {gsap,Power2} from 'gsap'
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink"

interface Props{
    atHome?:boolean;
}

const mobileNav = ({atHome}:Props) => {
    useEffect(()=>{
        const tlMenu = gsap.timeline({ease:Power2.easeInOut,pause:true, reversed:true})
        const handleClick = function(){
            tlMenu.reversed(!tlMenu.reversed())
          }
        tlMenu.to('.mobile-nav',{duration:0.2,top:"0%"})
           .addLabel('span')
           .from('.mobile-nav nav a', {duration:0.4,y:-50,opacity:0,stagger:0.1},'span')
           .to('span.up',{duration:0.4,background:"#fff",y:12,rotation:45},'span')
           .to('span.mid',{duration:0.4,background:"#fff",opacity:0},'span')
           .to('span.down',{duration:0.4,background:"#fff",y:-12,rotation:-45},'span')
        document.querySelector('.toggle-btn')?.addEventListener('click',handleClick)
        return ()=>{
            document.querySelector('.toggle-btn')?.removeEventListener('click',handleClick)
        }
      },[])

    return (
        <>
        <div className={atHome?"toggle-btn":"toggle-btn white"} id="toggle-btn">
            <span className="up" style={{background:'#000'}}></span>
            <span className="mid" style={{background:'#000'}}></span>
            <span className="down" style={{background:'#000'}}></span>
        </div>
        <div className="mobile-nav">
            <nav>
            <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/">Home</AniLink>
            <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/about">About</AniLink>
            <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work">Work</AniLink>
            <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/contact">Contact</AniLink>
            </nav>
        </div>
        </>
    )
}

export default mobileNav
