import React from 'react'
import {Link} from 'gatsby'

function Navbar() {
    return (
        <nav>
            <h1>Jakub Liska</h1>
            <div className="links">
                <Link to='/__graphql'>GraphQL</Link>
                <Link to='/'>Home</Link>
                <Link to='/about'>About me</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar
