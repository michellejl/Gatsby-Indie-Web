import React from 'react'
import { StaticQuery, Link } from 'gatsby'
import styled from 'react-emotion'

// TODO: Move image URL to gatsby-config so all information is coming from there.
import michelleImg from '../../static/img/michelle.png'

const UserImage = styled('img')`
  padding: 0;
  width: 100px;
`

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
                            address {
                                city,
                                state
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <div className='h-card'>
            <UserImage src={michelleImg} alt='Illustration of Michelle' />
                <p>
                    <Link 
                        className='u-url' 
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
            </div>
        )}
    />
)
export default HCard