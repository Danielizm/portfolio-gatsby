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
            <h4>My Approach</h4>
            <p>
            I believe in clean, efficient code and user-centered design. Every project I undertake is an opportunity to push boundaries, learn something new, and create solutions that make a real impact. Whether it's a personal blog, an e-commerce platform, or a complex web application, I approach each project with enthusiasm, creativity, and a commitment to excellence.
            </p>
            <h4>Let's Connect</h4>
            <p>
            I'm always excited to take on new challenges and collaborate on innovative projects. If you're looking for a dedicated web developer who can turn your vision into reality, let's connect! Feel free to explore my portfolio and reach out to discuss how we can work together to bring your ideas to life on the web.
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
