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
            <span></span>
          </div>
          <p className="content">
            Professionally connected with the web development industry and
            information technology for many years. Well-organised person,
            problem solver, independent employee with high attention to detail.
            Fan of tennis, outdoor activities, movies.
          </p>
          <p>
            Interested in the entire spectrum of web development and working on ambitious
            projects with positive people. The main area of my expertise is
            front end development. HTML5, CSS3, Javascript (TypeScript), building web
            pages and web apps with React, custom plugins, features, animations,
            and coding interactive layouts.
          </p>
          <p>
            I have also full-stack developer experience with Node.js related projects.
          </p>
        </div>
      </div>
      <div className="container plain-text">
        <div>
          <h2>What I Bring to the Table</h2>
          <div className="divider">
            <span></span>
          </div>
          <h4>Front-End Mastery</h4>
          <p className="content">
          With expertise in HTML, CSS/SASS, JavaScript, and React, I create stunning, responsive interfaces that captivate users and enhance their experience.
          </p>
          <h4>Back-End Capabilities</h4>
          <p>
          My proficiency in Node.js and PHP allows me to develop robust server-side applications and RESTful APIs, ensuring seamless functionality behind the scenes.
          </p>
          <h4>CMS Expertise</h4>
          <p>
          As a skilled WordPress developer, I can build and customize content management systems that empower clients to manage their websites with ease.
          </p>
          <h4>Full-Stack Integration</h4>
          <p>
          My ability to work across the entire web development stack enables me to deliver comprehensive solutions, from concept to deployment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default aboutMe
