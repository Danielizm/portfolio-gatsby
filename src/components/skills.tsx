import React, { useEffect } from "react"
import { gsap, Power2 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const skills = () => {
  const skills: Array<any> = [
    ["HTML", "90%"],
    ["CSS", "90%"],
    ["JAVASCRIPT", "85%"],
    ["REACT", "85%"],
    ["REDUX", "80%"],
    ["NODE.JS", "75%"],
    ["PHP", "75%"],
    ["WORDPRESS", "85%"],
  ]

  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
      }
      const bar = gsap.timeline({
        scrollTrigger: { trigger: ".chart", start: "top 100%" },
      })
      bar
        .from(".chart", {
          duration: 1,
          opacity: 0,
          y: 150,
          ease: Power2.easeInOut,
        })
        .from(".fill", { duration: 1, width: 0, ease: Power2.easeInOut }, "<")
    }, 1000)
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])
  return (
    <div className="skills">
      <div className="container">
        <div className="skill-texts">
          <h2 data-sal="slide-up" data-sal-duration="1000">
            Skills
          </h2>
          <div
            className="divider"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="200"
          >
            {" "}
            <span></span>
          </div>
          <p data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
            By sticking with web development over the years, I have learned,
            comprehanded and imporove many development techniques as my skill
            set.
          </p>
          <p data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
            In views of the fast change of the web development, I am aways
            passionate and keep open-minded to differnet web development
            techniques.
          </p>
          <p data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
            Example of techniques stack I am using like MERN(MongoDB + Express +
            React + Node.js) which is one of the best full stack development
            suites.
          </p>
          <p data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
            Other skills include but not limit to: Sass, Bootstrap,
            Styled-components, Tailwind, GIT version control, Webpack, Unit test, GraphQL.
          </p>
        </div>
        <div className="chart">
          {skills.map((skill: Array<any>, index: number) => (
            <div className="bar wrap" key={index}>
              <div
                id={"bar-" + index}
                className="bar progress fill"
                style={{ width: `${skill[1]}` }}
              >
                <div className="tag">{skill[0]}</div>
              </div>
              {/*<span>{skill[1]}</span>*/}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default skills
