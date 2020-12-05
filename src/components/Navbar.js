import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState('')
    useEffect(() => {
        let currentUrl = window.location.href;
        console.log(currentUrl);
        if (currentUrl.endsWith('/')) {
            setActive('about')
        } else if (currentUrl.endsWith('/projects')) {
            setActive('projects')
        } else if (currentUrl.endsWith('/resume')) {
            setActive('resume')
        }
    }, [active])
    return (
        <nav className="navbar">
            <div className="active">
                {active}
            </div>
            <div className="navbar__items">
                {active !== 'about' &&
                    <Link to='/'>
                        <div className="navbar__item" onClick={() => setActive('about')}>about</div>
                    </Link>
                }
                {active !== 'resume' ?
                    <Link to='/resume'>
                        <div className="navbar__item" onClick={() => setActive('resume')} >resume</div>
                    </Link>
                    : null
                }
                {active !== 'projects' &&
                    <Link to='/projects'>
                        <div className="navbar__item" onClick={() => setActive('projects')}>projects</div>
                    </Link>
                }
            </div>

        </nav>
    )
}

export default Navbar
