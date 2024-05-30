import React, { useRef } from 'react'
import './Clients.css'
import uncle_2 from '../../assets/uncle-2.jpg'
import uncle_3 from '../../assets/uncle-3.jpg'
import uncle_4 from '../../assets/uncle-4.jpg'
import uncle_5 from '../../assets/uncle-5.jpg'
import next_arr from '../../assets/icons8-arrow-50 (1).png'
import back_arr from '../../assets/icons8-arrow-50.png'

const Clients = () => {

    const slider=useRef();
    let tx=0;

    const slideForward = ()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='clients container'id='clients'>
      <div className="happy">
        <h2 className="heading1">Happy</h2>
        <h2 className='heading2'>Clients</h2>
      </div>
      <div className="slides">
        <ul ref={slider}>
            <li>
                <div className="matter">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                </div>
                <div className="profile">
                    <img src={uncle_2} alt="" />
                    <div className="name">
                        <h4>Carl Anderson</h4>
                        <span>CEO, Co-Founder</span>
                    </div>
                </div>
            </li>
            <li>
                <div className="matter">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                </div>
                <div className="profile">
                    <img src={uncle_3} alt="" />
                    <div className="name">
                        <h4>Darl Anderson</h4>
                        <span>CEO, Co-Founder</span>
                    </div>
                </div>
            </li>
            <li>
                <div className="matter">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                </div>
                <div className="profile">
                    <img src={uncle_4} alt="" />
                    <div className="name">
                        <h4>Earl Anderson</h4>
                        <span>CEO, Co-Founder</span>
                    </div>
                </div>
            </li>
            <li>
                <div className="matter">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                </div>
                <div className="profile">
                    <img src={uncle_5} alt="" />
                    <div className="name">
                        <h4>Farl Anderson</h4>
                        <span>CEO, Co-Founder</span>
                    </div>
                </div>
            </li>
        </ul>
        <div className="btns">
            <img  className='btn1' src={back_arr} alt="" onClick={slideBackward} />
            <img src={next_arr} className='btn2' alt="" onClick={slideForward}/>
        </div>
      </div>
    </div>
  )
}

export default Clients
