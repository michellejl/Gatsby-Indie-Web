import React from 'react'
import { Link } from 'gatsby'

import Nav from './nav'
import HCard from './h-card'

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
    <HCard authorName={authorName} authorTitle={authorTitle}/>
  </div>
)

export default Header
