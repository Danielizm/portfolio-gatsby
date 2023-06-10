import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const aboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      face: file(relativePath: { eq: "about-face-edt.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
    }
  `)
  return (
    <div className="about-me">
      <div className="container">
        <div className="am-image">
          <GatsbyImage image={getImage(data.face)} alt="about-face-edt" />
        </div>
        <div className="am-texts">
          <h2>About Me</h2>
          <div className="divider">
            {" "}
            <span></span>
          </div>
          <p className="content">
            Professionally connected with the web development industry and
            information technology for many years. Well-organised person,
            problem solver, independent employee with high attention to detail.
            Fan of tennis, outdoor activities, movies.
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people. The main area of my expertise is
            front end development. HTML5, CSS3, JS (TypeScript), building web
            pages and web apps with React, custom plugins, features, animations,
            and coding interactive layouts.
          </p>
          <p>
            I have also full-stack developer experience with Node.js related projects.
          </p>
        </div>
      </div>
    </div>
  )
}

export default aboutMe
