import React from 'react'
import { Link } from 'gatsby'

const contactBar = () => {
    return (
        <div className="contact-bar">
            <div className="container">
                <h2>Let's work together. Don't hesitate to <Link to="/contact">contact me</Link></h2>
            </div>
        </div>
    )
}

export default contactBar
