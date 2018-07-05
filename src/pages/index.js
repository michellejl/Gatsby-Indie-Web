import React from 'react'

import Layout from '../components/layout'
import NotesList from '../components/list-pt-note'
import ArticlesList from '../components/list-pt-article'

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Home</h1>
      <p>
        This page is currently showing examples of the different components.
      </p>
      <div>
        <h2>Notes:</h2>
        <NotesList />
      </div>
      <div>
        <h2>Articles:</h2>
        <ArticlesList />
      </div>
    </div>
  </Layout>
)

export default IndexPage
