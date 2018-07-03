import React from 'react'

import Layout from '../components/layout'
import NotesList from '../components/note-list'
import ArticlesList from '../components/article-list'

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Home</h1>
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
