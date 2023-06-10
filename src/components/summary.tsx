import React from "react"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const summary = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg-pattern-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wt: file(relativePath: { eq: "web-tech.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
    }
  `)
  return (
    <BackgroundImage
      fluid={data.bg.childImageSharp.fluid}
      className="sum-intro"
      style={{ backgroundSize: "contain", backgroundRepeat: "repeat" }}
    >
      <div className="tag-open">&#8220;</div>
      <div className="container">
        <div className="content">
          <h2 data-sal="slide-up" data-sal-duration='1000'>
          Philosophy
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
            <GatsbyImage image={getImage(data.wt)} />
          </div>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='400'>
            Web technology is vast and only getting bigger. There are a huge
            number of tools available and endless methods for using them,
            without there always being a clear and concise "go-to" approach.
          </p>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='600'>
            I believe in:</p>
            <ul data-sal="slide-up" data-sal-duration='1000' data-sal-delay='600'>
              <li>
                Putting the user first. Users that have a good experience are
                more likely to complete the actions that lead to your business
                goals being met
              </li>
              <li>
                Maintain a deep understanding of foundational technology and
                rely on tools and frameworks where they will best serve your
                requirements -- not treat them as the be-all and end-all
              </li>
            </ul>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='800'>
            After understanding the requirements, I can use my experience to
            determine the right tools and development methods. Often the
            simplest approach is the most successful.
          </p>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='1000'>
            The sustainability of the web development is important to me too. By
            ensuring we work in ways that are most efficient, we can reduce the
            footprint of what we produce on the web. This in many cases has a
            benefit to the user because if a website is efficient, it benefits
            from good performance and a quick user experience.
          </p>
        </div>
      </div>
      <div className="tag-close">
      &#8221;
      </div>
    </BackgroundImage>
  )
}

export default summary
