import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const UsesPage = () => (
  <Layout>
    <h1>Uses</h1>
    <h2>Pages</h2>
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
  </Layout>
)

export default UsesPage
