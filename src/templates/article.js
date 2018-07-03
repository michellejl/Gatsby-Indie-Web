import React from "react"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      
    </div>
  )
}

export const articleQuery = graphql`
query ArticlePostByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM Do, YYYY")
      path
    }
  }
}
`