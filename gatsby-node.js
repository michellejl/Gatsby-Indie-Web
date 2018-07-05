/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const _ = require('lodash')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const notePostTemplate = path.resolve(`src/templates/note.js`)
  const articlePostTemplate = path.resolve(`src/templates/article.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const articlePost = _.filter(
      result.data.allMarkdownRemark.edges,
      edge => {
        const fileAbsolutePath = _.get(edge, 'node.fileAbsolutePath')
        if (_.includes(fileAbsolutePath, '/articles/')) {
          return edge
        }
      }
    )

    // Create Article Page
    articlePost.forEach((edge) => {
      createPage({
        path: `${edge.node.frontmatter.path}`,
        component: articlePostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}

