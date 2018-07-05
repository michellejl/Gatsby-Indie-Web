import React from "react"
import { StaticQuery, Link } from 'gatsby'

const NotesList = ({ data }) => (
  <StaticQuery
    query={graphql`
      query NoteListQuery {
        allMarkdownRemark(
          # This allows us to just search for documents in the notes folder under posts
          filter: { fileAbsolutePath: { regex: "/notes/" } } 
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

export default NotesList
