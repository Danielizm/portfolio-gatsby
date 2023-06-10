import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const education = () => {
  const data = useStaticQuery(graphql`
    query {
      education: file(relativePath: { eq: "education.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
    }
  `)
  return (
    <div className="education">
      <div className="container">
        <div className="edu-texts">
          <h2 data-sal="slide-up" data-sal-duration={1000}>Education</h2>
          <div className="divider" data-sal="slide-up" data-sal-duration={1000} data-sal-delay={200}> <span></span></div>
          <p className="content" data-sal="slide-up" data-sal-duration={1000} data-sal-delay={200}>
            I have graduated as Master of Information
            Technology form University of Technology Sydney. My field of
            Expertise is web development. I am highly skill-qualified
            by accomplishing academic courses as below:
          </p>
          <ul data-sal="slide-up" data-sal-duration={1000} data-sal-delay={200}>
            <li>Internet Programming</li>
            <li>Web Services Technologies and Applications</li>
            <li>UNIX Systems Programming</li>
            <li>Digital Media Technologies</li>
            <li>Advanced Database</li>
            <li>Technology Research Methods</li>
            <li>Project Management</li>
          </ul>
        </div>
        <div className="edu-image" data-sal="slide-up" data-sal-duration={1000}>
          <GatsbyImage image={getImage(data.education)} alt="education" />
        </div>
      </div>
    </div>
  )
}

export default education
