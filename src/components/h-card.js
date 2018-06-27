import React from 'react'
import { StaticQuery, Link } from 'gatsby'
import styled from 'react-emotion'
import { withPrefix } from 'gatsby-link'

const UserImage = styled('img')`
  padding: 0;
  width: 100px;
`
      
// Base Social URLs
const twitterURL = 'https://twitter.com/'
const githubURL = 'https://github.com/'
const instagramURL = 'https://instagram.com/'
const linkedinURL = 'https://linkedin.com/in/'

const HCard = ({ data }) => (
    <StaticQuery
        query={graphql`
            query HCardQuery {
                site {
                    siteMetadata {
                        author {
                            name,
                            title,
                            siteURL,
                            image,
                            address {
                                city,
                                state
                            },
                            social {
                                twitter,
                                github,
                                instagram,
                                linkedin
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <div className='h-card'>
            <UserImage 
            src={withPrefix(data.site.siteMetadata.author.image)} 
            alt=''
            className='u-photo'
             />
                <p>
                    <Link 
                        className='u-url' 
                        rel='me'
                        to={data.site.siteMetadata.author.siteURL}
                    >
                        <span className='p-name'>
                            {data.site.siteMetadata.author.name}
                        </span>
                    </Link>
                </p>
                <p>
                    <span className='p-job-title'>
                        {data.site.siteMetadata.author.title}
                    </span>
                </p>
                <p className="p-adr h-adr">
                    <span className='p-locality'>
                        {data.site.siteMetadata.author.address.city}
                    </span>,&nbsp;
                    <span className='p-region'>
                        {data.site.siteMetadata.author.address.state}
                    </span>
                </p>
                <ul>
                    <li>
                        Twitter: 
                        <a
                            className='u-url'
                            rel='me'
                            href={twitterURL + data.site.siteMetadata.author.social.twitter}
                        >
                            @{data.site.siteMetadata.author.social.twitter}
                        </a>
                    </li>
                    <li>
                        GitHub: 
                        <a
                            className='u-url'
                            rel='me'
                            href={githubURL + data.site.siteMetadata.author.social.github}
                        >
                            @{data.site.siteMetadata.author.social.github}
                        </a>
                    </li>
                    <li>
                        Instagram: 
                        <a
                            className='u-url'
                            rel='me'
                            href={instagramURL + data.site.siteMetadata.author.social.instagram}
                        >
                            @{data.site.siteMetadata.author.social.instagram}
                        </a>
                    </li>
                    <li>
                        LinkedIn: 
                        <a
                            className='u-url'
                            rel='me'
                            href={linkedinURL + data.site.siteMetadata.author.social.linkedin}
                        >
                            @{data.site.siteMetadata.author.social.linkedin}
                        </a>
                    </li>
                </ul>
            </div>
        )}
    />
)
export default HCard