import React from "react"
import { graphql } from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Layout from "../components/layout"
import Banner from "../components/banner"
import ContactBar from "../components/contactBar"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import SEO from '../components/seo'
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink"

const project = ({ data, pageContext }: any) => {
  const project = data.contentfulProjects
  const { next, previous } = pageContext
  let next_url = null
  let previous_url =null
  next && (next_url  = next.title.replace(/\s/g, '').toLowerCase())
  previous &&  (previous_url = previous.title.replace(/\s/g, '').toLowerCase())

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    },
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
      [MARKS.UNDERLINE]: text => <u>{text}</u>,
    },
  }

  return (
    <Layout class_name="project" isHome={false}>
      <SEO title="Related Project"/>
      <Banner
        header={project.title}
        img={project.fullwidth_image}
        alt="hero image"
      />
      <div className="back-to-work container">
      <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work">
          <BsArrowLeft />
          <span>Back To Work</span>
        </AniLink>
      </div>
      <div className="contents">
        <div className="container">
          <div className="show-image card">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 801 23"
            >
              <path
                fill="#f1f1f1"
                d="M801 23H0V4c0-2.8 3.3-4 6.1-4H797c2.8 0 4.1 1.2 4.1 4v19z"
              ></path>
              <circle
                opacity=".71"
                fill="#E74C3C"
                cx="14.1"
                cy="11.5"
                r="4.7"
              ></circle>
              <circle
                opacity=".71"
                fill="#F1C40F"
                cx="29.5"
                cy="11.5"
                r="4.7"
              ></circle>
              <circle
                opacity=".71"
                fill="#2ECC71"
                cx="44.9"
                cy="11.5"
                r="4.7"
              ></circle>
            </svg>
            <GatsbyImage image={getImage(project.show_image)} />
          </div>
          <div className="texts">
            <div className="description">
              <h3>Description</h3>
              {renderRichText(project.description, options)}
            </div>
            <div className="details">
              <h3>Details</h3>
              {renderRichText(project.detail, options)}
            </div>
            <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to={project.link} target="_blank">
              <span>See The Site</span>
              <BsArrowRight />
            </AniLink>
          </div>
        </div>
      </div>
      <div className="full-width">
        <GatsbyImage image={getImage(project.fullwidth_image)} />
      </div>
      <div className="mobile-images">
        <div className="container">
          {project.mobile_images.map((image: any, index: number) => (
            <div className="mobile-image card" key={index} id={"mi-" + index} data-sal="slide-up" data-sal-duration="1000" data-sal-delay={index*300}>
              <GatsbyImage image={getImage(image)} />
            </div>
          ))}
        </div>
      </div>
      <div className="prev-next">
        <div className="conatainer">
        {(previous_url !== null) && (
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to={"/work/" + previous_url} className="prev-link">
            <div className="link-text">
            <strong>Previous Project</strong> <br />
            <span>{previous.title}</span>
            </div>
            <BsArrowLeft />
            </AniLink>
        )}
        {(next_url !== null) && (
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to={"/work/" + next_url} className="next-link">
            <div className="link-text">
            <strong>Next Project</strong> <br />
            <span>{next.title}</span>
            </div>
            <BsArrowRight />
          </AniLink>
        )}
        </div> 
      </div>
      <ContactBar />
    </Layout>
  )
}

export default project

export const data = graphql`
  query ProjectTemplate($id: String!) {
    contentfulProjects(id: { eq: $id }) {
      id
      title
      blurb{blurb}
      link
      description{raw}
      detail{raw}
      featured_image {
        gatsbyImageData(placeholder:BLURRED)
      }
      show_image {
        gatsbyImageData(
          width: 900
          placeholder:BLURRED
          quality: 100
        )
      }
      fullwidth_image {
        gatsbyImageData(
          width: 1800
          placeholder:BLURRED
          quality: 100
        )
      }
      mobile_images {
        gatsbyImageData(
          width: 350
          placeholder:BLURRED
          quality: 100
        )
      }
    }
  }
`
