import React from "react"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
      <div className="note-post h-entry">
        <h2>
          <time className="dt-published">{frontmatter.date}</time>
           &nbsp;|&nbsp;<a href={frontmatter.authorHome} className="u-author">{frontmatter.author}</a>
        </h2>
        <div
          className="note-post-content p-name p-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        
      </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        author
        authorHome
      }
    }
  }
`

