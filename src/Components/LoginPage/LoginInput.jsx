import React from 'react';

const LoginInput = () => {
  return (
    <>
      <div className="">
        <div className="login_text flex justify-center">
          <h2 className="text-base font-semibold">Log in to Trello</h2>
        </div>
        <div className="w-full mt-5">
          <form>
            <input
              type="text"
              name="email"
              className="email_input border-2 w-full h-10 p-2 bg-gray-50 rounded-md text-sm"
              placeholder="Email"
              autoCorrect="off"
              required
            />
            <input
              type="password"
              name="password"
              className="email_input border-2 w-full h-10 p-2 bg-gray-50 rounded-md text-sm mt-4"
              placeholder="Password"
              autoCorrect="off"
            />
            <input
              type="sumbit"
              className="bg-btn-green w-full text-center text-white mt-4 py-2 px-5 cursor-pointer font-bold rounded"
              value="Continue"
              onMouseDown={(e) => e.preventDefault()}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginInput;
