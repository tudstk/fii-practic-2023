import React from "react"
import styled from "styled-components"

import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouseUser,
  faRightToBracket,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons"

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
`
const Navigation = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;

  li {
    list-style-type: none;
    margin: 0px 25px;
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
    :hover {
      color: #ffffffc4;
    }
  }
  svg {
    margin-right: 5px;
  }
`

export default function NavBar() {
  return (
    <Layout>
      <Navigation>
        <li>
          <FontAwesomeIcon icon={faHouseUser} />
          <Link to="/">Home</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faRightToBracket} />
          <Link to="/auth/login">Login</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserPen} />
          <Link to="/auth/register">Register</Link>
        </li>
      </Navigation>
    </Layout>
  )
}
