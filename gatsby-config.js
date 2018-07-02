module.exports = {
  siteMetadata: {
    title: 'Michelle JL',
    author: {
      name: 'Michelle J Levine',
      title: 'Front End Web Developer & Prototyper',
      siteURL: 'http://michellejl.com',
      image: 'img/michelle.png',
      address: {
        city: 'Portland',
        state: 'Oregon'
      },
      social: {
        twitter: 'michellejlevine',
        github: 'michellejl',
        instagram: 'spacecadetmj',
        linkedin: 'michellejl',
      },
      community: {
        group1: {
          name: 'Women Who Code Portland',
          title: 'Open Source Study Night Co-Lead',
          role: 'Work with Co-Lead to organize speakers, content, location, sponsorship, and anything else needed for monthly Open Source Study Nights. Volunteer at various Networking Nights.',
          url: 'https://www.womenwhocode.com/portland'
        },
        group2: {
          name: 'PDXNode',
          title: 'Organizer',
          role: 'Organize monthly presentation nights and monthly hack nights. Act as point on finding sponsorship for presentation night raffle prizes, food, swag, and anything else the group needs. Organizing quarterly workshops or special event days such as International Nodebots Day.',
          url: 'http://pdxnode.org/'
        }
      }
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
