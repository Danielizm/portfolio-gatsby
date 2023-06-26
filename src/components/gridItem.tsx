import React from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink"

interface gridItemProps {
  project: any
  key: string
}

const gridItem = (props: gridItemProps) => {
  return (
    <AniLink
      paintDrip
      direction="up"
      hex="#beb2c7"
      duration={0.7}
      to={"/work/" + props.project.title.replace(/\s/g, "").toLowerCase()}
      key={props.project.id}
      data-sal="slide-up"
      data-sal-duration="800"
    >
      <div className="item">
        <div className="i">
          <GatsbyImage
            className="img"
            image={getImage(props.project.featured_image)}
          />
        </div>
        <div className="s1"></div>
        <div className="s2"></div>
        <div className="s3"></div>
        <p>{props.project.blurb.blurb}</p>
      </div>
      <h2 className="card">{props.project.title}</h2>
    </AniLink>
  )
}

export default gridItem
