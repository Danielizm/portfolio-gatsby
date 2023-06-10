import React from 'react'
import { DiJavascript } from "react-icons/di";
import {FaReact,FaPhp,FaWordpress,FaNode,FaLinkedin} from 'react-icons/fa'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from "gatsby-background-image"


const footer = () => {
    const data = useStaticQuery(graphql`
    query {
        footer_bg:file(relativePath:{eq:"footer-bg-cut.jpg"}){
            childImageSharp{
                fluid(maxWidth:1500,quality:100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    return (
        <footer>
            <div className="footer-banner">
                <div className="container">
                    <div className="lang-icon"><DiJavascript/></div>
                    <div className="lang-icon"><FaReact/></div>
                    <div className="lang-icon lg"><FaPhp/></div>
                    <div className="lang-icon"><FaWordpress/></div>
                    <div className="lang-icon lg"><FaNode/></div>
                </div>
            </div>
            <div className="copyright">
            <div className="container">
                <span>© {new Date().getFullYear()} Daniel Su All Rights Reserved</span>
                <a href="https://www.linkedin.com/in/daniel-su-a13668191/" target="_black"><FaLinkedin /></a>
                </div>
                
            </div>
            {/*<StaticImage
              src="../images/footer-bg-cut.jpg"
              alt="Footer Image"
              placeholder="blurred"
              layout="fullWidth"
              className="footer-bg"
            />
            <GatsbyImage image={getImage(data.footer_bg)} alt="footer banner" className="footer-bg" />*/}
            <BackgroundImage fluid={data.footer_bg.childImageSharp.fluid} className="footer-bg"/>
        </footer>
    )
}

export default footer
