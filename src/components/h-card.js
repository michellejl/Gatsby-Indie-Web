import React from 'react'
import { Link } from 'gatsby'

const HCard = ({ authorName, authorTitle }) => (
    <div className="h-card">
        <p>
            <Link className="u-url" to="http://michellejl.com/">
                <span className="p-name">
                    { authorName }
                </span>
            </Link>
        </p>
        <p>
            <span className="p-job-title">
                { authorTitle }
            </span>
        </p>
        <p className="p-adr h-adr">
            <span className="p-locality">Portland</span>,&nbsp;
            <span className="p-region">Oregon</span>
        </p>
    </div>
)
export default HCard
