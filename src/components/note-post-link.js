import React from "react"
import Link from "gatsby-link"

const NotePostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      ({post.frontmatter.date})
    </Link>
  </div>
)

export default NotePostLink

