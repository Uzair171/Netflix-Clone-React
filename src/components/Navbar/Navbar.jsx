import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import caretIcon from '../../assets/caret_icon.svg'
import profileImg from '../../assets/profile_img.png'
 
const Navbar = () => {

  const darkRef = useRef();
  useEffect(()=>{
   window.addEventListener('scroll',()=>{
    if(window.scrollY >100){
      darkRef.current.classList.add('nav-dark')
    }else{
      darkRef.current.classList.remove('nav-dark')
    }
   }) 
  },[])

  return (
    <div className='navbar' ref={darkRef}>
      <div className='left-navbar'>
        <img src={logo} alt="Netflix-Logo" className='main-logo'/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className='right-navbar'>
        <img src={search} alt="Search Icon" className='search-icon' />
        <p>Children</p>
        <img src={bellIcon} alt="Bell Icon" />
        <div className='navbar-profile'>
          <img src={profileImg} alt="profile Image" className='profile' />
          <img src={caretIcon} alt="Caret Image" />
        </div>
        <div className='dropdown'>
          <p>SignOut of Netflix</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
