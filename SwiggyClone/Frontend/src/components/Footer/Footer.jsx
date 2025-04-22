import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <>    
    <div className="qr-banner">
            <img src={assets.banner} alt="" />
        </div>
    <div className='footer' id='footer'>    
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} className='logo' />
                <p>© 2025 Swiggy Limited </p>
               
            </div>
            <div className="footer-content-center">
            <h2>Company</h2>
                <ul>
                        <li>About us</li>
                        <li>Swiggy Corporate</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Instamart</li>
                        <li>Swiggy Dineout</li>
                        <li>Swiggy Genie</li>
                        <li>Minis</li>
                        <li>Pyng</li>    
                </ul>
                
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 99999 00000</li>
                        <li>support@swiggy.com</li>
                    </ul>
                    <h2>Contact Us</h2>
                <ul>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                </ul>
                   
                    
            </div>
            <div className="footer-content-extreme-right">
            <div className='legal'>
                <h2>Legal</h2>
                <br />
                    <ul>
                        <li>Terms & Conditons</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-social-icons">
                        <h2>
                            Social Links
                        </h2> <br />
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
        </div>
        <hr />
        <div className='below-footer'>
            <p>
            For better experience, download the Swiggy app now
            </p>
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        
            
        </div>
    </div>
    </>
  )
}

export default Footer