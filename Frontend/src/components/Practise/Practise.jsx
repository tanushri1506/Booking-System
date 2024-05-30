import React from 'react'
import './Practise.css'
import icon_1 from '../../assets/icons8-suitcase-64 (3).png'
import icon_2 from '../../assets/icons8-public-48.png'
import icon_3 from '../../assets/icons8-people-working-together-64.png'
import icon_4 from '../../assets/icons8-target-50.png'
import arrow from '../../assets/icons8-right-arrow-30.png'

const Practise = () => {
  return (
    <div className='practise container'>
        <div className="col-1">
            <div className="p-head">
                <h2 className='heading2'>Our</h2>
                <h2 className='heading1'>Practice Areas</h2>
            </div>
            <br />
            <p>We offer comprehensive legal services across a variety of practice areas. Our experienced attorneys are dedicated to providing effective and personalized representation to meet the unique needs of our clients.</p>
            <br />
            <p>Separated from the ordinary, we navigate the intricate waters of law with expertise and precision.</p>
            <br /><br />
            <a href="/practise">
            <button className='btn learn'>LEARN MORE</button>
            </a>
        </div>
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
            <a href='/practise'>
            <div className='last-line'>
                
                <p>More Practice Areas</p>
                <img src={arrow} alt="" />
            </div>
            </a>
        </div>
    </div>
  )
}

export default Practise
