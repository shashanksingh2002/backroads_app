import React from 'react'
import { NavBarLinks, SocialPageLinks } from './Header'

export const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-child">
            <NavBarLinks />
            <SocialPageLinks />
            <p>Copyright © Backroads Travel Tours Company2023. All Rights Reserved</p>
        </div>
    </div>
  )
}

