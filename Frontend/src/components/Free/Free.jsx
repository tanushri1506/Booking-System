import React from "react";
import "./Free.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Modal from "../Modal/Modal";

const Free = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const navigate = useNavigate();
  const [showModal,setShowModal]=useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/appointment ", { name, email, number })
      .then((result) => {
        console.log(result);
        setShowModal(true);
        setModalMessage('Free Consultation Booked');
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          setModalMessage(err.response.data.error);
        } else {
          setModalMessage('An error occurred. Please try again.');
        }
        setShowModal(true);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalMessage === 'Free Consultation Booked') {
      navigate("/booked"); // Navigate only if booking was successful
    }
  };

  return (
    <div className="free container">
      <div className="formheading">Free Consultation Form</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="labels">
            <label>Enter Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
          </div>
          <div className="labels">
            <label>Enter Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </div>
          <div className="labels">
            <label>Enter Your Number</label>
            <input
              type="tel"
              name="number"
              placeholder="Enter Number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <br />
          </div>
          <button className="btn labels">Book Free Consultation
          </button>
        </form>
      </div>
      {showModal && <Modal message={modalMessage} onClose={handleCloseModal} />}

    </div>
  );
};

export default Free;
