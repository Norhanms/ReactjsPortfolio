import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import avataaars from '../assets/avataaars.svg';


const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:norhanmsk@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={avataaars} className="img-fluid sidebar__avatar" alt="" />
            <div className="sidebar__name">Norhan  Khafaga</div>
            <div className="sidebar__item sidebar__title">Fullstack Engineer</div>

            <div className="sidebar__item sidebar__resume">
                <a href="#">

                    Download Resume
                </a>
            </div>

            <div className="sidebar__social-icons my-2">
                <a href=""><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href=""><img src={instagram} alt="twitter" className="sidebar__icon" /></a>


            </div>
            <div className="sidebar__contact">
                <div className="sidebar__item">
                    <a href="https://github.com/Norhanms" target="_blank">
                        <img src={github} className="sidebar__icon" alt="github" />
                         github
                    </a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} className="sidebar__icon" alt="pin location" />
                    Ismailia, Egypt
                </div>


            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
                <a href="mailto:norhanmsk@gmail.com">Email me</a>
            </div>
        </div >
    )
}

export default Sidebar