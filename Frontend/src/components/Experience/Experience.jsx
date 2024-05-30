import React, { useEffect, useState } from 'react'
import './Experience.css'

const Experience = () => {

    const [count1,setCount1]=useState(0);

    useEffect(()=>{
        const interval =setInterval(()=>{
            setCount1(prevCount => {
                if(prevCount <90){
                    return prevCount +1;
                }else{
                    clearInterval(interval);
                    return prevCount;
                }
            });
    },100);

    return ()=> clearInterval(interval);
    },[]);

const [count2,setCount2]=useState(0);

    useEffect(()=>{
        const interval =setInterval(()=>{
            setCount2(prevCount => {
                if(prevCount <2){
                    return prevCount +1;
                }else{
                    clearInterval(interval);
                    return prevCount;
                }
            });
    },3000);

    return ()=> clearInterval(interval);
},[]);

const [count3,setCount3]=useState(0);

    useEffect(()=>{
        const interval =setInterval(()=>{
            setCount3(prevCount => {
                if(prevCount <3){
                    return prevCount +1;
                }else{
                    clearInterval(interval);
                    return prevCount;
                }
            });
    },3000);

    return ()=> clearInterval(interval);
},[]);

const [count4,setCount4]=useState(0);

    useEffect(()=>{
        const interval =setInterval(()=>{
            setCount4(prevCount => {
                if(prevCount <200){
                    return prevCount +1;
                }else{
                    clearInterval(interval);
                    return prevCount;
                }
            });
    },40);

    return ()=> clearInterval(interval);
},[]);


// const Counter = ({ initialValue, maxValue }) => {
//     const [count, setCount] = useState(initialValue);
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCount(prevCount => {
//           if (prevCount < maxValue) {
//             return prevCount + 1;
//           } else {
//             clearInterval(interval);
//             return prevCount;
//           }
//         });
//       }, 1000); // Change the interval time as needed
  
//       return () => clearInterval(interval);
//     }, []);}

  return (
    <div className='experience container'>
      <div className="ecol-1">
        <h2 className='heading1'>50 Years </h2> 
        <h2 className='heading2'>of Experience in Various Cases</h2>  
      </div>
      <div className="ecol-2">
        <ul>
            <li>
                <div className="counter">
                <p className='number'>{count1}</p><span className='plus'>+</span>
                </div>
                <div className="text-part">
                    <h4>Awards</h4>
                    <p>Recognized for excellence with numerous prestigious awards in the legal field</p>
                </div>
            </li>
            <li>
                <div className="counter">
                <p className='number'>{count2}K</p><span className='plus'>+</span>
                </div>
                <div className="text-part">
                    <h4>Clients</h4>
                    <p>Successfully represented over two thousand clients with dedicated legal services</p>
                </div>
            </li>
        </ul>
      </div>
      <div className="ecol-3">
      <ul>
            <li>
                <div className="counter">
                    <p className='number'>{count3}K</p><span className='plus'>+</span>
                </div>
                <div className="text-part">
                    <h4>Cases Wins</h4>
                    <p>Achieved victory in more than three thousand cases across various practice areas</p>
                </div>
            </li>
            <li>
                <div className="counter">
                <p className='number'>{count4}</p><span className='plus'>+</span>
                </div>
                <div className="text-part">
                    <h4>Attorneys</h4>
                    <p>A robust team of over two hundred skilled and experienced attorneys ready to assis</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}
import './Experience.css'

export default Experience
