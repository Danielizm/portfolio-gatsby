import React from "react"
import "../styles/style.scss"
import Layout from "../components/layout"
import Banner from "../components/homeBanner"
import AboutBlurb from "../components/aboutBlurb"
import PortfolioBlurb from "../components/portfolioBlurb"
import ContactBar from "../components/contactBar"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
  <Layout isHome={true}>
    <SEO title="Home"/>
    <Banner />
    <AboutBlurb />
    <PortfolioBlurb />
    <ContactBar />
  </Layout>
  )
}

export default IndexPage
