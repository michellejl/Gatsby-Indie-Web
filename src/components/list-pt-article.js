import React from "react"
import { StaticQuery, Link } from 'gatsby'

const ArticlesList = ({ data }) => (
  <StaticQuery
    query={graphql`
      query ArticleListQuery {
        allMarkdownRemark(
          # This allows us to just search for documents in the articles folder under posts
          filter: { fileAbsolutePath: { regex: "/articles/" } } 
        ) {
          edges {
            node {
              wordCount {
                words
              }
              fileAbsolutePath
              excerpt(pruneLength: 50)
              frontmatter {
                date(formatString: "MMMM Do, YYYY")
                path
              }
            }
          }
        }
      }
    `}

    render = { data => (
      <div>
        {data.allMarkdownRemark.edges.map(
          post => (
            <div className="ArticlePost">
              {post.node.frontmatter.date}:&nbsp;
              <Link to={post.node.frontmatter.path}>
                {post.node.excerpt}
              </Link>
            </div>
          )
        )}

      </div>
    )}
  />
)

export default ArticlesList
