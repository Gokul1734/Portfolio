import React, { useState } from "react";
// import Api from "./API";
// import { Link } from "react-router-dom";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

import { initializeApp } from "@firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsMSejcVXWugZaeZJT_kgmvQvcs-PXOBg",
  authDomain: "core-falcon-416215.firebaseapp.com",
  projectId: "core-falcon-416215",
  storageBucket: "core-falcon-416215.appspot.com",
  messagingSenderId: "267589982903",
  appId: "1:267589982903:web:b6669ef9ae77080db08b32",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Contacts() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // Event handler to update form data when input fields change
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Event handler to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., submit data to server
    console.log("Query:", query);
    console.log("Email:", email);
    console.log("Name:", name);
    if (name && query && email) {
      try {
        set(ref(db, `/messages/${name}`), {
          email: email,
          query: query,
        });
        alert(`Added ${name}'s message to database!`);
      } catch (error) {
        console.log(error);
      }

      // Reset form fields after submission
      setQuery("");
      setEmail("");
      setName("");
    } else {
      alert("Data not Given !!");
    }
  };

  return (
    <div className="bg-black h-screen">
      <div id="col-2" className="flex items-center ">
        <h1 className="flex justify-start m-20 text-Primary">CONTACT</h1>
        <Button
          style={{
            backgroundColor: "#B79061",
            border: "none",
            color: "white",
          }}
          className="top-10 hover:scale-110 transition-transform duration-300"
          onClick={toggle}
        >
          Post Messages
        </Button>
        <Modal
          isOpen={modal}
          toggle={toggle}
          centered={true}
          className="text-Secondary"
        >
          <ModalHeader toggle={toggle}>Post a Message</ModalHeader>
          <ModalBody>
            <form>
              <div>
                <input
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 "
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div>
                <input
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 "
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address..."
                  required
                />
              </div>
              <div>
                <FormGroup>
                  <input
                    className="mt-1 px-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="Enter your query here..."
                    rows={8}
                    cols={20}
                    required
                    type="text"
                  />
                </FormGroup>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <button
              color=""
              className=" bg-Primary rounded-xs  text-white px-4 py-2 rounded-md hover:bg-green-600 focus:bg-green-600"
              type="submit"
              onClick={handleSubmit}
            >
              Post
            </button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div id='col' className="flex h-full bg-black -mt-24">
        <div className="w-3/5  flex justify-end items-center">
          <iframe 
            id="iframe"
            pointer-events="none"
            title="Maps"
            className="w-3/5 h-3/5 border-2 border-Primary box-border rounded-sm shadow-l invert-90 grayscale-0 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.886345706865!2d80.23909837482063!3d13.042905713311436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267addd1b6291%3A0x82d85a9d4b8d65ba!2sGyan%20Apartments!5e0!3m2!1sen!2sin!4v1709742512489!5m2!1sen!2sin"
            allowfullscreen="true"
            // loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div id="det" className="w-2/5 flex-row items-center justify-center mt-48 mx-24">
          <div className="border-3 h-32 pt-2 w-3/4  mb-5 p-2 px-5 flex justify-start items-center text-nowrap rounded-sm border-Primary shadow-md ">
            <LocationMarkerIcon className="size-12 text-Secondary p-0 m-0" />
            <p className="text-Secondary text-left w-full imprima-regular text-2xl align-middle m-0 pl-3 ">
              No.38, Gyan Apartments
              <br />
              Venkatraman St, T Nagar
              <br />
              Chennai - 600017
            </p>
          </div>
          <div className="border-3 h-20 pt-2 w-3/4  mb-5 p-2 px-5    flex justify-start items-center text-nowrap rounded-sm border-Primary shadow-md ">
            <PhoneIcon className="size-8 text-Secondary p-0 m-0" />
            <p className="text-Secondary text-left w-3/5 imprima-regular text-2xl align-middle m-0 pl-3 ">
              +91 7010871355
            </p>
          </div>
          <div className="border-3 h-20 pt-2 w-3/4  mb-5 p-2 px-5    flex justify-start items-center text-nowrap rounded-sm border-Primary shadow-md ">
            <MailIcon className="size-8 text-Secondary p-0 m-0" />
            <p className="text-Secondary text-left w-3/5 imprima-regular text-2xl align-middle m-0 pl-3 ">
              <a
                href="mailto: kgokulpriyan@gmail.com"
                className="text-Secondary no-underline"
              >
                kgokulpriyan@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
