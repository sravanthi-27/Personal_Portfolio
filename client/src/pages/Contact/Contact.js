import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Contact.css';
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import contactImg from './Contact_img.jpeg';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }

      const res = await axios.post('/api/v1/portfolio/sendEmail', {
        name,
        email,
        msg,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <LightSpeed>
                  <img src={contactImg} alt="Contact" className="image" />
                </LightSpeed>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <Rotate>
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <h6>
                    Contact With
                    <a href="https://www.linkedin.com/in/bindu-sravanthi-miriyala-5132b6293/" target="_blank" rel="noopener noreferrer" className="ms-2">
                      <BsLinkedin color="blue" size={30} />
                    </a>
                    <a href="https://github.com/sravanthi-27" target="_blank" rel="noopener noreferrer" className="ms-2">
                      <BsGithub color="black" size={30} />
                    </a>
                    <a href="https://www.instagram.com/m.bsravanthi/" target="_blank" rel="noopener noreferrer" className="ms-2">
                      <BsInstagram color="blue" size={30} />
                    </a>
                  </h6>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <button className="button" type="submit" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
