import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled from "styled-components"

const Logo = styled.img`
  max-height: 300px;
`

const Statement = styled.div`
  width: 80%;
  margin: 0 auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="College Counselors for Change" />
    <Link to="/">
      <Logo src="./potato.png" />
    </Link>
    <h1>Mission</h1>
    <Statement>
      <p style={{ "margin-bottom": "10px" }}>
        College Counselors for Change was created to drive donations to one of
        three vetted charities in exchange for a one-on-one college counseling
        session.
      </p>
    </Statement>
    <h1 style={{ "margin-top": "30px" }}>Bring Social Change</h1>
    <Statement>
      <p>
        We support <a href="http://www.nyan.cat/">Black Lives Matter</a>,{" "}
        <a href="http://www.nyan.cat/">Covid Relief Fund</a>, and{" "}
        <a href="http://www.nyan.cat/">Climate Change Initiative</a>.
      </p>
    </Statement>
    <h1 style={{ "margin-top": "30px" }}>Sign Up</h1>
    <Statement>
      <p>
        Please sign up below for your personal session with students from
        Universities like Harvard, UC Berkeley, Princeton, UMich and more.
      </p>
      <p>
        <a href="https://forms.gle/WDULR1ECBDVAyzMz6">Sign up here!</a>
      </p>
    </Statement>
  </Layout>
)

export default IndexPage
