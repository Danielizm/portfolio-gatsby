import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Form from '../components/form'
import SEO from '../components/seo'

const contact = () => {

    const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner-2.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
    }
  `)

    return (
        <Layout isHome={false}>
          <SEO title="Contact"/>
            <Banner header="Contact" img={data.banner} alt="Contact hero image"/>
            <div className="container form-section">
            <h2>Send me a message</h2>
            <h3>Or email me on <a href="mailto:jiacheng_su@hotmail.com">jiacheng_su@hotmail.com</a></h3>
            <Form />
            </div>
        </Layout>
    )
}

export default contact
