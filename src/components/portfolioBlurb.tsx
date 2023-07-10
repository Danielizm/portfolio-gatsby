import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink"

const portfolioBlurb = () => {

  return (
    <div className="portfolio-blurb">
      <div className="container">
        <div className="wrap">
          <div className="wrap-item" id="item-1" data-sal="slide-up" data-sal-duration="800">
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work/alloc8recruitment">
              <figure className="effect-ming card">
                <StaticImage src="../images/projects_thumb/alloc8-1.png" alt="" placeholder="blurred" />
                <figcaption>
                  <h2>
                  Alloc8 <span>Recruitment</span>
                  </h2>
                  <p>
                  alloc8 recruitment is a recruitment agency based in Sydney offering jobs in data science, data engineering, data warehouse, and data analytics.
                  </p>
                </figcaption>
              </figure>
            </AniLink>
          </div>
          <div className="wrap-item" id="item-2" data-sal="slide-up" data-sal-duration="800">
            <h2 className="blurb-head">
              My values:
              <br />
              Innovation
              <br />
              Collaboration
              <br />
              Adaptability
            </h2>
            <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work/coastbeat">
              <figure className="effect-ming card">
              <StaticImage src="../images/projects_thumb/coastbeat-1.png" alt="" placeholder="blurred" />
                <figcaption>
                  <h2>Coastbeat</h2>
                  <p>
                    'Coastbeat' is a one hundred page plus magazine that
                    highlights the best and sometimes hidden gems of the NSW
                    North Coast.
                  </p>
                </figcaption>
              </figure>
            </AniLink>
          </div>
          <div className="wrap-item" id="item-3" data-sal="slide-up" data-sal-duration="800">
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work/lanolips">
              <figure className="effect-ming card">
              <StaticImage src="../images/projects_thumb/lanolips-1.png" alt="" placeholder="blurred" />
                <figcaption>
                  <h2>
                  Lanolips
                  </h2>
                  <p>
                  Lanolips is a 100% natural and awesome remedy for dry skin and lips, an awarded fun and travel-sized solution for your daily skincare
                  </p>
                </figcaption>
              </figure>
            </AniLink>
            <div className="btn-wrap">
            <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work" className="btn-ra">
                <span>Portfolio</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </AniLink>
            </div>
          </div>
          <div className="wrap-item" id="item-4" data-sal="slide-up" data-sal-duration="800">
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work/northcape">
              <figure className="effect-ming card">
              <StaticImage src="../images/projects_thumb/northcape-1.png" alt="" placeholder="blurred" />
                <figcaption>
                  <h2>
                  Northcape
                  </h2>
                  <p>
                  Investment Specialists in Australian & International Equities. Northcape Capital has a proud record of achieving a strong outperformance
                  </p>
                </figcaption>
              </figure>
            </AniLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default portfolioBlurb
