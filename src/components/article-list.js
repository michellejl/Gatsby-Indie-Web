import React from "react"
import { StaticQuery, Link } from 'gatsby'

const ArticlesList = ({ data }) => (
  <StaticQuery
    query={graphql`
      query ArticleListQuery {
        allMarkdownRemark {
          edges {
            node {
              id
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
            <div className="NotePost">
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