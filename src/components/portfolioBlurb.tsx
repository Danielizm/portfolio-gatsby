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
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work/loanbase">
              <figure className="effect-ming card">
                <StaticImage src="../images/projects_thumb/loanbase-feature.png" alt="" placeholder="blurred" />
                <figcaption>
                  <h2>
                  Loan Base
                  </h2>
                  <p>
                  Loan Base is a mortgage broking practice, privately owned and operated in Australia.
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
            <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work/employsure">
              <figure className="effect-ming card">
                <StaticImage src="../images/projects_thumb/employsure_feature.png" alt="" placeholder="blurred" />
                <figcaption>
                  <h2>
                  Employsure
                  </h2>
                  <p>
                  Employsure is Australia's largest advice firm for small businesses on employee management and WHS.
                  </p>
                </figcaption>
              </figure>
            </AniLink>
          </div>
          <div className="wrap-item" id="item-3" data-sal="slide-up" data-sal-duration="800">
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work/raggc">
              <figure className="effect-ming card">
              <StaticImage src="../images/projects_thumb/raggc_feature.png" alt="" placeholder="blurred" />
                <figcaption>
                  <h2>RAGGC</h2>
                  <p>
                  The premier golf club and golfing facility within the Auckland region, New Zealand.
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
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work/aspengroup">
              <figure className="effect-ming card">
              <StaticImage src="../images/projects_thumb/aspengroup_feature.png" alt="" placeholder="blurred" />
                <figcaption>
                  <h2>
                  Aspen Group
                  </h2>
                  <p>
                  Discover Aspen Group, an ASX-listed leader in affordable, quality accommodation across Australia.
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
