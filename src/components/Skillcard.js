import React from 'react'

const Skillcard = ({ skill }) => {
    //const { skill } = props

    return (

        <div className="col-md-6 mt-4">
            <div className="skill-card">
                <div className="skill-card__icon_container">
                    <img src={skill.icon} alt="icon" className="skill-card__icon" />
                </div>

                <div className="skill-card__body">
                    <h6 className="skill-card__title">{skill.title}</h6>
                    <p className="skill-card__content">{skill.about}</p>

                </div>
            </div>
        </div>


    )
}

export default Skillcard
