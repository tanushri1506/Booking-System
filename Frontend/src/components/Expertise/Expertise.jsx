import React from 'react'
import './Expertise.css'
import eicon_1 from '../../assets/eicon-1.png'
import eicon_2 from '../../assets/eicon-2.png'
import eicon_3 from '../../assets/eicon-3.png'
import eicon_4 from '../../assets/eicon-4.png'
import black_arrow from '../../assets/icons8-arrow-30.png'

const Expertise = () => {
  return (
    <div className='expertise container' id='expertise'>
      <div className="p-head">
                <h2 className='heading2'>More</h2>
                <h2 className='heading1'>Expertise</h2>
        </div>
        <div className="cards">
            <ul>
                <li>
                    <div className="eicon">
                        <img className='eicon-img' src={eicon_1} alt="" />
                    </div>
                    <div className="etext">
                        <h4>Labor and<br></br> Employment</h4>
                        <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                        <br></br>
                        <span>Learn More <img src={black_arrow} alt="" /></span>
                    </div>
                </li>
                <li>
                    <div className="eicon">
                        <img className='eicon-img' src={eicon_2} alt="" />
                    </div>
                    <div className="etext">
                        <h4>Corporate & Civil Litigation</h4>
                        <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                        <br></br>
                        <span>Learn More<img src={black_arrow} alt="" /></span>
                    </div>
                </li>
                <li>
                    <div className="eicon">
                        <img className='eicon-img' src={eicon_3} alt="" />
                    </div>
                    <div className="etext">
                        <h4>Intellectual <br></br>Property Law</h4>
                        <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                        <br></br>
                        <span>Learn More<img src={black_arrow} alt="" /></span>
                    </div>
                </li>
                <li>
                    <div className="eicon">
                        <img className='eicon-img' src={eicon_4} alt="" />
                    </div>
                    <div className="etext">
                        <h4>Criminal Prosecution and Defense</h4>
                        <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                        <br></br>
                        <span>Learn More<img src={black_arrow} alt="" /></span>
                    </div>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Expertise
