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
              <StaticImage src="../images/projects_thumb/ranbuild_feature.png" alt="" placeholder="blurred" />
                <figcaption>
                  <h2>Ranbuild</h2>
                  <p>
                  Ranbuild is an Australian company that specializes in steel buildings.
                  </p>
                </figcaption>
              </figure>
            </AniLink>
          </div>
          <div className="wrap-item" id="item-3" data-sal="slide-up" data-sal-duration="800">
          <AniLink paintDrip direction="up" hex="#beb2c7" duration={0.7} to="/work/lanolips">
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
              <StaticImage src="../images/projects_thumb/amnesty-1.png" alt="" placeholder="blurred" />
                <figcaption>
                  <h2>
                  Amnesty
                  </h2>
                  <p>
                  Amnesty International Australia searches out facts about human rights abuses and raises awareness of these abuses in Australia, the Asia-Pacific and around the world.
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
