import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header style={{ height: "40px", marginBottom: "28px" }}>
    <nav>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          alignContent: "center",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        {/* <li
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginRight: "16px",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            home
          </Link>
        </li> */}
        {/* <li
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginRight: "16px",
          }}
        >
          <Link
            to="/about"
            style={{
              textDecoration: "none",
            }}
          >
            about
          </Link>
        </li> */}
        <li
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginRight: "16px",
          }}
        >
          <Link
            to="/writing"
            style={{
              textDecoration: "none",
            }}
          >
            writing
          </Link>
        </li>
        <li
          style={{ fontSize: "20px", fontWeight: "bold", marginRight: "32px" }}
        >
          {/* <Link
            to="/notes"
            style={{
              textDecoration: "none",
            }}
          >
            notes
          </Link> */}
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
