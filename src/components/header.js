import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import twitter from "../images/twitter.svg"

const HeaderLink = styled(Link)`
  color: #000000;
  font-size: 15px;
  margin-right: 16px;
  font-family: "IBM Plex Mono", monospace;
  text-transform: uppercase;
  font-weight: 400;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      position: `fixed`,
      width: "100vw",
      borderTop: `solid 3px ##C7D0FF`,
      zIndex: "9999",
      backgroundColor: "#ffffff",
      top: 0,
      boxShadow: `var(--navShadow)`,
    }}
  >
    <div
      style={{
        padding: `0.7rem 20px`,
        paddingTop: `0.4rem`,
        maxWidth: "37em",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <h2 style={{ margin: 0 }}>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/">About</HeaderLink>
        <HeaderLink to="/">Blog</HeaderLink>
        <div
          style={{
            float: `right`,
            paddingTop: `6.8px`,
          }}
        >
          <img
            src="https://image.flaticon.com/icons/svg/1415/1415431.svg"
            alt=""
            width="18"
            style={{
              float: `right`,
              marginLeft: `24px`,

              marginBottom: `0`,
            }}
          />
          <img
            src="https://image.flaticon.com/icons/svg/733/733635.svg"
            alt=""
            width="18"
            style={{
              float: `right`,
              marginBottom: `0`,
            }}
          />
        </div>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
