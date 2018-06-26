import React from 'react'
import { Link } from 'gatsby'

const Nav = ({ siteTitle }) => (
    <div>
        <Link to="/">home</Link>
        <br />
        <Link to="/about/">about</Link>
        <br />
        <Link to="/code/">coding</Link>
        <br />
        <Link to="/blog/">blog</Link>
        <br />
        <Link to="/photo/">photography</Link>
        <br />
        <Link to="/resources/">resources</Link>
        <br />
        <Link to="/uses/">uses</Link>
        <br />
        <Link to="/now/">now</Link>
        <br />
        <Link to="/community/">community</Link>
        <br />
        <Link to="/resume/">resume</Link>
        <br />
    </div>
)

export default Nav
