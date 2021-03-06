import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SocialLinks from "../components/socialLinks"
import Header from "./header"
import "../styles/global.css"

import { rhythm } from "../utils/typography"

import bgSvg from "../images/bg2.svg"




const listItems = [
  { link: "#Problems", name: "About" },
  { link: "#about", name: "Blog" },
  { link: "#events", name: "Events" },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
    
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: 740,
          // marginTop: "72px",
          padding: `${rhythm(1.56)} ${rhythm(3 / 4)}`,
        }}
    >
        <main>{children}</main>
      </div>
    </>
  
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
