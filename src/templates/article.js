import React from "react"

export default function Template({ data }) {
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
  return (
    <article className='h-entry'>
      <h1 className='p-name'>{frontmatter.title}</h1>
      <p>
        Published by 
        <a class='p-author h-card' href={frontmatter.authorHome}>
          {frontmatter.author}
        </a>
        on 
        <time class='dt-published' datetime={frontmatter.date}>
          {frontmatter.date}
        </time>
      </p>
      <hr />
      <div
          className="e-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </article>
  )
}

export const articleQuery = graphql`
query ArticlePostByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM Do, YYYY")
      title
      path
      author
      authorHome
    }
  }
}
`
