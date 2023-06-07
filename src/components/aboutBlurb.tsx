import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { MdKeyboardBackspace } from "react-icons/md"
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink"

const aboutBlurb = () => {

  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content card" data-sal="slide-up" data-sal-duration="1500">
            <h3>The ability to create</h3>
            <h4>Web Development</h4>
            <p>
              I use HTML, CSS/SASS, and JavaScript library like React to produce responsive websites and
              web apps that provide users the best and most appropriate
              experience suited to their device and browser.
            </p>
            <h4>WordPress Development</h4>
            <p>
              My focus when using WordPress is on ease of use and
              maintainability; making sure you can manage your content as simply
              and quickly as possible.
            </p>
            <div className="btn-row">
              <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/about">
                <span>View More </span>
                <MdKeyboardBackspace />
              </AniLink>
            </div>
          </div>
          <div className="images">
            <div className="top-right card" data-sal="slide-up" data-sal-duration="1500">
              <StaticImage src="../images/home-1.jpg" alt="home image 1" placeholder="blurred" />
            </div>
            <div className="bottom-left card" data-sal="slide-up" data-sal-duration="1500">
              <StaticImage src="../images/home-2.jpg" alt="home image 2" placeholder="blurred" />
            </div>
          </div>
        </div>
        <div className="black-box" data-sal="slide-left" data-sal-duration="1500" data-sal-delay="1000"></div>
        <div className="black-box overlay"data-sal="slide-left" data-sal-duration="1500" data-sal-delay="1000"></div>
      </div>
    </div>
  )
}

export default aboutBlurb
