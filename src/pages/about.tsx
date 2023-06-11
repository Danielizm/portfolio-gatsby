import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/banner'
import AboutMe from '../components/aboutMe'
import Education from '../components/education'
import ContactBar from '../components/contactBar'
import Skills from '../components/skills'
import Icons from '../components/icons'
import ReactIntro from '../components/reactIntro'
import WpIntro from '../components/wpIntro'
import Summary from '../components/summary'
import SEO from '../components/seo'

const about = () => {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner-3.jpg" }) {
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
            <SEO title="About"/>
            <Banner header="About Me" img={data.banner} alt="About Me"/>
            <AboutMe />
            <Education />
            <Skills />
            <Icons />
            <ReactIntro />
            <WpIntro />
            <Summary />
            <ContactBar />
        </Layout>
    )
}

export default about
