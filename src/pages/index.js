import React from 'react'

import Layout from '../components/layout'
import NotesList from '../components/note-list'

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Home</h1>
      <div>
        <h2>Notes:</h2>
        <NotesList />
      </div>
    </div>
  </Layout>
)

export default IndexPage
