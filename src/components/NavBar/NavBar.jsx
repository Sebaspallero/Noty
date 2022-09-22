import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

const NavBar = () => {
  return (
    <header className='gridOne'>
      <nav>
        <form className='searchForm'>
          <FontAwesomeIcon className='navIcon' icon={faMagnifyingGlass}/>
          <input className='searchInput' type="text" placeholder='Buscar'/>
        </form>
        <div className='navInfo'>
          <img className='userProfilePic' src='/assets/profilePictureNoty.jpg' alt='Imagen  Perfil Usuario'></img>
          <p>Hola, <span className='userName'>Timo</span>!</p>
          <span className='navIcon'><FontAwesomeIcon icon={faBell}/></span>
        </div>
      </nav>
    </header>
  )
}

export default NavBar