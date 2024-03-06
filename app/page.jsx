// Home.js
'use client';
import Image from 'next/image';
import Logo from './logo';
import CustomInput from './CustomInput';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (stateSetter, setError, e) => {
    const inputValue = e.target.value;
    stateSetter(inputValue);
    setError(inputValue.trim() === '');
  };

  const handleCreateAccount = () => {
    setNameError(name.trim() === '');
    setMailError(email.trim() === '');
    setMobileError(mobile.trim() === '');
    setShowError(message.trim() === '');

    if (!(nameError || mailError || mobileError || showError)) {
      console.log('Data: ', name, '\n', mobile, '\n', message, '\n', email);
      // Add additional logic for handling the form data
      let formData = new FormData();
      formData.append('Name', name);
      formData.append('Mobile', mobile);
      formData.append('Email', email);
      formData.append('Message', message);

      fetch('https://script.google.com/macros/s/AKfycbxqdiZuM181dezKSmD05jMSWK7l4hk6yGJZUfNg2M0f4ipa8RD-9DYlQ4Kwje0o2IkV/exec',{
        method:'POST',
        body: formData
      }).then((res)=>{
         window.alert('Data is Successfully send');
         window.location.reload()
         
      }).catch(err => console.log(err));
    }
  };

  return (
    <div className="sm:flex flex-row w-full justify-around items-center font-serif bg-slate-300">
      <section className="flex justify-center items-center sm:w-2/3 sm:h-1/2">
        <Logo />
      </section>
      <section className="justify-center items-center flex flex-col bg-violet-400 sm:w-1/3 h-full rounded-xl">
        <div className="justify-start font-serif text-2xl md:text-4xl mb-5">Create Account</div>

        <CustomInput
          label="Name"
          placeholder="Name"
          error="Please Enter Name"
          onChange={(e) => handleInputChange(setName, setNameError, e)}
          showError={nameError}
        />
        <CustomInput
          label="Mobile No."
          placeholder="Mobile No"
          error="Please Enter Mobile No."
          onChange={(e) => handleInputChange(setMobile, setMobileError, e)}
          showError={mobileError}
        />
        <CustomInput
          label="Email"
          placeholder="Email"
          error="Please Enter the E-mail"
          onChange={(e) => handleInputChange(setMail, setMailError, e)}
          showError={mailError}
        />

        <div className="justify-start w-4/5">
          <p className=" mt-2 ml-3 justify-start align-baseline items-start">Message</p>

          <textarea
            rows={5}
            className="w-full p-5 mt-0 h-15 border-b-slate-950 border-r-2 rounded-2xl"
            placeholder="Write a message"
            onChange={(e) => setMessage(e.target.value)}
          />
          {showError && <p className="my-0 text-red-600">Please Write a message</p>}
        </div>

        <button
          className="justify-center items-center h-20 w-3/5 mt-5 bg-green-700 border-b-4 rounded-xl text-white text-2xl"
          onClick={handleCreateAccount}
        >
          Create Account
        </button>
      </section>
    </div>
  );
}
