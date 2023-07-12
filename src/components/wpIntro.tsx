import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const wpIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      wp: file(relativePath: { eq: "wordpress-developer.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
    }
  `)
  return (
    <div className="wp-intro">
      <div className="container">
        <div className="content">
          <h2 data-sal="slide-up" data-sal-duration='1000'>
            CMS developer
          </h2>
          <div
            className="divider"
            data-sal="slide-up"
            data-sal-duration='1000'
            data-sal-delay='200'
          >
            <span></span>
          </div>
          <div
            className="intro-img"
            data-sal="flip-up"
            data-sal-duration='1000'
            data-sal-delay='400'
          >
            <GatsbyImage image={getImage(data.wp)} alt="wordpress-developer"/>
          </div>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='600'>
            In many projects, clients require the ability to manage the content
            of their website. WordPress is the world’s most popular content
            management system which I have years of experience with. My focus
            when using WordPress is on ease of use and maintainability; making
            sure client can manage the content as simply and quickly as
            possible.
          </p>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='800'>
            I have a thorough understanding of each part of the platform, as
            well as the verious programming languages used to run it
          </p>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='1000'>
            Typically, WordPress development perform the following tasks:</p>
            <ul data-sal="slide-up" data-sal-duration='1000' data-sal-delay='1000'>
              <li>Creating and customizing plugins and themes.</li>
              <li>
                Developing code and troubleshooting for WordPress core (that is,
                the actual software of WordPress).
              </li>
              <li>
                Working closely with clients to help design and build their
                WordPress websites.
              </li>
              <li>Ensuing that client websites are maintained efficiently.</li>
              <li>Improving the accessibility of the WordPress platform.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default wpIntro
