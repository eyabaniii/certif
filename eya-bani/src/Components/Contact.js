import React, { useState } from "react";
import contactphoto from "../Assets/contatctphoto.jpg";
import "../Components/Contact.css";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [data, setdata] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    object: "",
    message: "",
  });

  const changedata = (e) => {
    setdata({ ...data, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const emailParams = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      object: data.object,
      message: data.message,
    };

    emailjs
      .send(
        "service_tnsa2vt",
        "template_8qngoes",
        emailParams,
        "XaZy3QR4bwArk9QPk"
      )
      .then(
        (result) => {
          toast.success("your message is succesully sent");
        },
        (error) => {
          toast.error("Sorry! there's something wrong");
        }
      );
  };
  return (
    <div className="contactt">
      <div className="contactt1">
        <div className="contactdes">
          <h1>CONTACT THE WORKSHOP</h1>
          <p>
            Welcome to our contact page. We're here to help with any questions
            or feedback. Your satisfaction is our priority, and we're eager to
            connect with you.
          </p>
        </div>
        <form className="formec" onSubmit={submit}>
          <input
            placeholder="FirstName*"
            onChange={changedata}
            required={true}
            id="firstname"
            type="text"
          />
          <input
            placeholder="LastName*"
            onChange={changedata}
            required={true}
            id="lastname"
            type="text"
          />
          <input
            placeholder="Email*"
            onChange={changedata}
            required={true}
            id="email"
            type="email"
          />
          <input
            placeholder="Object*"
            onChange={changedata}
            required={true}
            id="object"
            type="text"
          />

          <textarea
            placeholder="Hello,"
            onChange={changedata}
            required={true}
            id="message"
            type="text"
          ></textarea>

          <div className="check">
            <input className="cb" type="checkbox" />
            <label>I accept the privacy policy</label>
          </div>
          <button type="submit" className="dbt">
            {" "}
            SUBMIT
          </button>
        </form>
        <Toaster />
      </div>
      <div className="contactt2">
        <div>
          <img src={contactphoto}></img>
        </div>
        <div className="ctdes">
          <h1>Ayouta Jewerly Store</h1>
          <p>
            Discover the magic of our jewelry and let it become a signature of
            your personal elegance.
          </p>
          <div className="ssvg">
            <a href="https://www.facebook.com/eya.bn.9">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/eya.bani/">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/eya-bani-897b10219/">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
