import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const wpIntro = () => {
  const data = useStaticQuery(graphql`
    query {
      wp: file(relativePath: { eq: "cms-cover.webp" }) {
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
          CMS development with WordPress and other headless CMS options, such as Strapi or Contentful, has become a critical aspect of modern web development, particularly for developers working with React. WordPress, one of the most popular and versatile CMS platforms, can be used in a traditional full-stack setup or as a headless CMS where it solely manages content, delivering it via APIs like REST or GraphQL.
          </p>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='800'>
          Headless CMS architecture decouples the backend from the frontend, offering developers greater flexibility and control over the user experience. With React, developers can leverage this approach to build highly dynamic, scalable, and responsive web applications, integrating content from the CMS seamlessly. This method also allows for the integration of modern JavaScript frameworks and libraries, such as Next.js, enabling fast, server-side rendering and rich client-side interactivity.
          </p>
          <p data-sal="slide-up" data-sal-duration='1000' data-sal-delay='1000'>
          Ultimately, headless CMS solutions, combined with the power of React, allow developers to create more flexible, performant, and scalable web applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default wpIntro
