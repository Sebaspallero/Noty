import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky, faUser,faGear, faCircleInfo,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import './SideBar.css'


const SideBar = () => {
  return (
    <div className='gridTwo'>
        <div className='sideBarBox'>
            <h1 className='logo'>Noty</h1>
            <ul className='menuCategoryBox'>
                <Link to={'/'} className='menuCategory'><FontAwesomeIcon className='navIcon' icon={faNoteSticky}/> Dashboard</Link>
                <Link to={'/profile'} className='menuCategory'><FontAwesomeIcon className='navIcon' icon={faUser}/> Profile</Link>
                <Link to={'/support'} className='menuCategory'><FontAwesomeIcon className='navIcon' icon={faCircleInfo}/> Support</Link>
                <Link to={'/settings'} className='menuCategory'><FontAwesomeIcon className='navIcon' icon={faGear}/> settings</Link>
            </ul>
            <span className='sideBarDivider'></span>
            <ul className='noteCategoryBox'>
                <li className='noteCategory'><span className='categoryColor'></span>Todas</li>
                <li className='noteCategory'><span className='categoryColor2'></span>Projectos</li>
                <li className='noteCategory'><span className='categoryColor3'></span>Personal</li>
                <li className='noteCategory'><FontAwesomeIcon className='navIcon' icon={faArrowRight}/> Agregar</li>
            </ul>
            <div className='footer'>
                <div className='socialMediaBox'>
                    <a href='https://twitter.com/' target="_blank"><FontAwesomeIcon className='navIcon' icon={faTwitter}/></a>
                    <a href='https://www.linkedin.com/in/sebastian-pallero-or%C3%ADa-a911591a1/' target="_blank"><FontAwesomeIcon className='navIcon' icon={faLinkedin}/></a>
                    <a href='https://github.com/Sebaspallero' target="_blank"><FontAwesomeIcon className='navIcon' icon={faGithub}/></a>
                </div> 
                <p style={{color:'white'}}>Sebastián Pallero | 2022</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar