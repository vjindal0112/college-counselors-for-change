/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const BodyDiv = styled.div`
  border: 5px solid #9932CC;
  max-width: 800px;
  display: flex;
  flex-flow: column;
  text-align: center;
  margin: 20px auto;
  box-shadow: 2px 3px 5px;
  padding: 10px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <BodyDiv>
        <main>{children}</main>
      </BodyDiv>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
