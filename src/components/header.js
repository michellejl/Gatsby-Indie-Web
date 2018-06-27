import React from 'react'
import { Link } from 'gatsby'

import Nav from './nav'

const Header = ({ siteTitle, authorName, authorTitle }) => (
  <div>
    <div>
      <h1>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Nav />
  </div>
)

export default Header
