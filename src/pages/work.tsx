import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Grid from "../components/grid"
import ContactBar from "../components/contactBar"
import SEO from '../components/seo'

const works = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      banner: file(relativePath: { eq: "banner-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      allContentfulProjects(sort: { fields: id, order: ASC }) {
        edges {
          node {
            id
            title
            blurb
            detail{raw}
            description{raw}
            featured_image {
                gatsbyImageData(
                  placeholder: BLURRED
                )
            }
          }
        }
      }
    }
  `)

  return (
    <Layout isHome={false}>
      <SEO title="Work"/>
      <Banner
        header="Related Projects"
        img={data.banner}
        alt="work hero image"
      />
      <div className="work-intro">
        <div className="container">
          <div className="intro-img">
          <div className="hometown">
            <div className="heart"></div>
            <div id="top">
            {"Made by".split('').map((letter,index)=>(
              <span className={"char"+(index + 1)} key={index}>{letter}</span>
            ))}
            </div>
            <div className="city">Daniel</div>
            <div id="bottom">
              {" With heart".split('').map((letter,index)=>(
                <span className={"char"+(index + 1)} key={index}>{letter}</span>
              ))}
            </div>
          </div>
          </div>
          <div className="intro-texts">
          <p>Succeed online with a website that is fast, easy to use, and built with best practices.</p>
          <p>My web developer portfolio highlights just some of the website projects I’ve participated. I have worked on many web programming projects over the years, ranging from full website development to small programming jobs.</p>
          <p>Since web technologies are developing fast,different web projects with different requirements should be handled with verious techniques.</p>
          </div>
        </div>
      </div>
      <Grid projects={data.allContentfulProjects.edges} />
      <ContactBar />
    </Layout>
  )
}

export default works
