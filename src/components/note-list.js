import React from "react"
import NotePostLink from "./note-post-link"
import { StaticQuery } from 'gatsby'

const NotesList = ({ data }) => (
  <StaticQuery
    query={graphql`
      query NoteListQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
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
      Posts: {data.allMarkdownRemark.totalCount}

      </div>
    )}
  />
)






// {
//   console.log('data: ');
//   console.log(data);
//   return (
//     <div>
//       Note List
//     </div>
//   )
// }

export default NotesList

// export const pageQuery = graphql`
//   query NoteListQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             date
//             path
//           }
//         }
//       }
//     }
//   }
// `

