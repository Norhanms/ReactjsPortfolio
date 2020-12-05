import React from 'react'
import api from '../assets/icons/api.svg'
import website from '../assets/icons/website.svg'
import fullstack from '../assets/icons/fullstack.svg'
import Skillcard from './Skillcard'

const About = () => {
    const skills = [
        {
            id: 1,
            icon: website,
            title: 'Front-end development',
            about: 'I convert UI designs/mock-ups into a working web apps',
        },
        {
            id: 2,
            icon: api,
            title: 'Back-end development',
            about: 'I can build and maintain technology at the back end of a website (the server, database and application)',
        },
        {
            id: 3,
            icon: fullstack,
            title: 'Full-stack development',
            about: '',
        }
    ]
    return (
        <div className="about">
            <h6 className="about__intro"> <span>Hi</span>,
            I am a fullstack web developer.
             </h6>

            <div className="container about__container">

                <h6 className="about__heading">What I Do</h6>

                <div className="row mt-1">
                    {
                        skills.map(skill =>

                            <Skillcard skill={skill} key={skill.id} />


                        )
                    }
                </div>


            </div>


        </div>
    )
}

export default About
