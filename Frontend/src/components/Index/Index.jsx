import React from 'react'
import './Index.css'
import facebook from '../../assets/icons8-facebook-24.png'
import twitter from '../../assets/icons8-twitter-24.png'
import linkedin from '../../assets/icons8-linkedin-24.png'
import instagram from '../../assets/icons8-instagram-24.png'

const Index = () => {
  return (
    <div className='index container'>

        <div className="i1">
            <h4>Home</h4>
            <ul>
                <li>About Us</li>
                <li>Practice Area</li>
                <li>Services</li>
                <li>Attorneys</li>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
        </div>
            <div className="i2">
                <h4>Practice Area</h4>
                <ul>
                    <li>Banking Law</li>
                    <li>Commercial Law</li>
                    <li>Corporate Law</li>
                    <li>Family Law</li>
                    <li>Media Law</li>
                </ul>
        </div>
        <div className="i3">
            <h4>Services</h4>
            <ul>
                <li>Labor Law</li>
                <li>Employment</li>
                <li>Property Law</li>
                <li>Prosecution</li>
            </ul>
        </div>
        <div className="i4">
            <h4>Contact</h4>
            <h4>43 Raymouth Rd. Baltemoer,<br></br> London 3910 </h4>
            <ul>
                <li>+11 234567890</li>
                <li>+11 234567890</li>
                <li>info@mydomain.com</li>
            </ul>
            <h4>Connect</h4>
            <div className="social-icons">
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Index
