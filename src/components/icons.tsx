import React from 'react'
import {FcBullish,FcMultipleDevices,FcIdea,FcPortraitMode} from 'react-icons/fc'

const icons = () => {
    return (
        <div className="icons-badge">
            <div className="container">
                <div className="icon-wrap" data-sal="slide-up" data-sal-duration={1000}>
                <div className="icon"><FcBullish /></div>
                <h3>Fast</h3>
                <p>Fast load times and lag free interaction as high priority.</p>
                </div>
                <div className="icon-wrap" data-sal="slide-up" data-sal-duration={1000} data-sal-delay={300}>
                <div className="icon"><FcMultipleDevices /></div>
                <h3>Responsive</h3>
                <p>Web apps will work on any device, big or small.</p>
                </div>
                <div className="icon-wrap" data-sal="slide-up" data-sal-duration={1000} data-sal-delay={600}>
                <div className="icon"><FcIdea /></div>
                <h3>Creative</h3>
                <p>Creatively utilise and combine these tools and data.</p>
                </div>
                <div className="icon-wrap" data-sal="slide-up" data-sal-duration={1000} data-sal-delay={900}>
                <div className="icon"><FcPortraitMode /></div>
                <h3>Simple</h3>
                <p>Strong preference for easy to use, intuitive UX/UI.</p>
                </div>
            </div>
        </div>
    )
}

export default icons
