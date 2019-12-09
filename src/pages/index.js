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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: "26px",
          }}
        >
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt={"Illustration of a person walking toward a browser of code"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          <h1
            style={{
              maxWidth: "400px",
              marginBottom: "16px",
            }}
          >
            Hi I’m Marcus.
            <br /> A Developer focused on React, a11y, and testing.
          </h1>
          <p
            style={{
              maxWidth: "400px",
              margin: "0",
            }}
          >
            I love web development, design, devops, and reducing manual
            workflows through automation; basically all the things!
          </p>
          <p
            style={{
              maxWidth: "400px",
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
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
