import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import insta from '../../assets/instagram_icon.png'
import twitter from '../../assets/twitter_icon.png'
import facebook from '../../assets/instagram_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube} alt="Youtube Icon" />
        <img src={insta} alt="Instagram Icon" />
        <img src={twitter} alt="Twitter Icon" />
        <img src={facebook} alt="Facebook Icon" />
      </div>
      <ul className='ul-list'>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investors</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>legal Notice</li>
        <li>Cockie Performance</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copy-rights'>©1997-2023 Netflix, Inc Clone</p>
    </div>
  )
}

export default Footer
