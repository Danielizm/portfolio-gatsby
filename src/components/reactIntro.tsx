import React from "react"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const reactIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg-pattern.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ra: file(relativePath: { eq: "reactjs-code.jpg" }) {
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
      className="react-intro"
      style={{ backgroundSize: "contain", backgroundRepeat: "repeat" }}
    >
      <div className="tag-open">&lt;</div>
      <div className="container">
        <div className="content">
          <h2 data-sal="slide-up" data-sal-duration='1200'>Web developer</h2>
          <div className="divider" data-sal="slide-up" data-sal-duration='1000' data-sal-delay='200'>
            <span></span>
          </div>
          <div className="intro-img" data-sal="flip-up" data-sal-duration='1000' data-sal-delay='400'>
          <GatsbyImage image={getImage(data.ra)}/>
          </div>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='400'>
            I build responsive websites and
            web apps that provide users the best and most appropriate experience
            suited to their device and browser.
          </p>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='600'>
            I write standards based code that is semantic, accessible,
            search-engine friendly, easy to maintain, cross browser compatible,
            and performant.
          </p>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='600'>
            Building future-proof and easy-to-maintain websites and web apps is achieved by
            breaking down a web page into its smallest pieces, often called
            components, and building them in a way that exists outside the
            context of the design they first appear in. This allows for
            components that can be re-used in other areas of a website as it
            grows and makes the intention easier for other developers to
            understand and test. Wherever possible, I find it valuable to create
            a style guide (using Storybook for example) that acts as a document
            for a reusable and maintainable code base. All involved in a project
            can rely on a style guide to understand a project's language and
            produce a more consistent user experience. Re-usable components make
            for a website that can quickly grow as does your business.
          </p>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='600'>
            I am experienced in building systems that implement business
            logic and interact with server-side technology via APIs and tools
            such as React and Redux, as well as testing code using tools.
          </p>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='600'>
            I have a special interest in use of animation on the web. I
            particularly like working on websites that have seamless transitions
            and require high-level performance to maintain a smooth and
            appealing website.
          </p>
        </div>
      </div>
      <div className="tag-close"><span>/</span>&gt;</div>
    </BackgroundImage>
  )
}

export default reactIntro
