import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import icon_1 from '../../assets/icons8-suitcase-64 (3).png'
import icon_2 from '../../assets/icons8-public-48.png'
import icon_3 from '../../assets/icons8-people-working-together-64.png'
import icon_4 from '../../assets/icons8-target-50.png'
import './Practise2.css'
import Index from '../Index/Index'

const Practise2 = () => {
  return (
    <div>
      <div className="practise2 container">
      <div className="prachead">Practise Areas</div>
      <div className="columns">
      <div className="col-2">
            <ul>
            <li>
                    <div className="icon-col">
                        <img className='icon-img' src={icon_1} alt="" />
                    </div>
                    <div className="text-col">
                        <h4>Banking and Finance Law</h4>
                        <p>Expert legal support for financial transactions, regulatory compliance, and banking operations</p>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <img className='icon-img' src={icon_2} alt="" />
                    </div>
                    <div className="text-col">
                        <h4>Commercial Law</h4>
                        <p>Comprehensive legal services for contracts, disputes, and business operations</p>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <img className='icon-img' src={icon_3} alt="" />
                    </div>
                    <div className="text-col">
                        <h4>Corporate Law</h4>
                        <p>Strategic counsel for company formation, mergers, acquisitions, and corporate governance</p>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <img className='icon-img' src={icon_4} alt="" />
                    </div>
                    <div className="text-col">
                        <h4>Criminal Law</h4>
                        <p>Dedicated defense for all criminal charges, protecting your rights and ensuring fair trials</p>
                    </div>
                </li>
            </ul>
            </div>
            <div className="col-3">
            <ul>
                <li>
                    <div className="icon-col">
                        <img className='icon-img' src={icon_1} alt="" />
                    </div>
                    <div className="text-col">
                        <h4>Banking and Finance Law</h4>
                        <p>Far far away,behind the word maountains,far from the countries</p>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <img className='icon-img' src={icon_2} alt="" />
                    </div>
                    <div className="text-col">
                        <h4>Commercial Law</h4>
                        <p>Far far away,behind the word maountains,far from the countries</p>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <img className='icon-img' src={icon_3} alt="" />
                    </div>
                    <div className="text-col">
                        <h4>Corporate Law</h4>
                        <p>Far far away,behind the word maountains,far from the countries</p>
                    </div>
                </li>
                <li>
                    <div className="icon-col">
                        <img className='icon-img' src={icon_4} alt="" />
                    </div>
                    <div className="text-col">
                        <h4>Criminal Law</h4>
                        <p>Far far away,behind the word maountains,far from the countries</p>
                    </div>
                </li>
            </ul>
            </div>
            </div>
      </div>
      <Index/>
      <Footer/>
    </div>
  )
}

export default Practise2
