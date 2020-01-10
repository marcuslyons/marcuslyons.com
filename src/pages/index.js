import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/layout/header"

export default ({ data }) => {
  return (
    <div>
      <Header />
      <main
        style={{
          boxSizing: "border-box",
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gridTemplateRows: "",
          gridRowGap: "26px",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ width: "100%" }}
            alt={"Illustration of a person walking toward a browser of code"}
          />
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "360px",
            // gridRowGap: "15px",
          }}
        >
          <h1 style={{}}>
            Hi I’m Marcus.
            <br /> A Developer focused on React, a11y, and testing.
          </h1>
          <p
            style={{
              margin: "0",
            }}
          >
            I love web development, design, devops, and reducing manual
            workflows through automation; basically all the things!
          </p>
          <p
            style={{
              margin: "0",
            }}
          >
            Killing unnecessary policy, process, and beauracracy are my jam
            though.
          </p>
        </div>
      </main>
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "hero-image.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
