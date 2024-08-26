import React,{useState,useEffect} from 'react'
import {BsArrowUp} from 'react-icons/bs'

const scrollUp = () =>{ 
    const [showScroll, setShowScroll] = useState(false)
    const checkScroll = () => {
        if(!showScroll && window.pageYOffset > 700){
            setShowScroll(true)
        }else if(showScroll && window.pageYOffset <= 700){
            setShowScroll(false)
        }
    }
    const scrollUp = () => {
        window.scrollTo({top:0,behavior:'smooth'})
    }
    useEffect(()=>{
        window.addEventListener('scroll',checkScroll)
        return ()=>{
            window.removeEventListener('scroll',checkScroll)
        }
    },[showScroll])
    
    return (
        <div className="scroll-up" onClick={scrollUp} style={{display:showScroll?'flex':'none'}}>
        <BsArrowUp />
        </div>
    )
}

export default scrollUp
