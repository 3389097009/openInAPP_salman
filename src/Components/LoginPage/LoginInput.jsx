import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginInput = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleSubmitClick = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (input.email.length > 0 && input.password.length > 0) {
      navigate('/home');
    } else {
      alert('Email and password are required');
    }
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="">
        <div className="login_text flex justify-center">
          <h2 className="text-2xl font-semibold"><b>Sign In </b></h2>

        </div>
        <div className="w-full mt-5">
          <form>
            <input
              type="text"
              name="email"
              className="email_input border-2 w-full h-10 p-2 bg-gray-50 rounded-md text-sm"
              placeholder="Email"
              autoComplete="off"
              required
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              className="email_input border-2 w-full h-10 p-2 bg-gray-50 rounded-md text-sm mt-4"
              placeholder="Password"
              autoComplete="off"
              required
              onChange={handleInputChange}
            />
            <input
              type="submit"
              className="bg-btn-green w-full text-center text-white mt-4 py-2 px-5 cursor-pointer font-bold rounded"
              value="Continue"
              onClick={handleSubmitClick}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginInput;
