import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const navigate = useNavigate();

  const registerUser = async (e) => {
    console.log('button clicked');
    e.preventDefault();
  };

  return (
    <>
      <div className="trello_logo flex justify-center">
        {/* <img className="w-48" src={TrelloLogo} alt="trello-logo" /> */}
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-full max-w-xs flex justify-center items-center">
          <div className="rounded-sm bg-white shadow-lg w-96 py-6 px-10">
            <form onSubmit={registerUser}>
              <div className="mb-4">
                <input
                  className="email_input border-2 w-full h-10 p-2 bg-gray-50 rounded-md text-sm mt-4"
                  id="Name"
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  className="email_input border-2 w-full h-10 p-2 bg-gray-50 rounded-md text-sm mt-4"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <input
                  className="email_input border-2 w-full h-10 p-2 bg-gray-50 rounded-md text-sm mt-4"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  className="bg-btn-green w-full text-center text-white mt-4 py-2 px-5 cursor-pointer font-bold rounded  focus:outline-none focus:shadow-outline disabled:cursor-not-allowed disabled:opacity-50 disabled:border "
                  type="submit"
                  value="Register"
                  disabled={!name || !email || !password}
                />
              </div>
            </form>
            {/* <div className="flex justify-center mt-9">
              <SocialLogin />
            </div> */}
            <div className="mt-3 text-center">
              <span className="font-semibold text-sm">
                Already have an account?
              </span>
              <Link to="/login">
                <span className="text-primary text-sm cursor-pointer underline ml-2">
                  Sign in
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
