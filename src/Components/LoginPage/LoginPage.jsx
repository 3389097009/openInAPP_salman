import React from 'react';
import './LoginPage.css';
import LoginInput from './LoginInput';
// import SocialLogin from './SocialLogin';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <div className='login_ui flex justify-center flex-col items-center'>
        <div className='trello_logo'>
          {/* <img className='w-48' src={TrelloLogo} alt='trello-logo' /> */}
        </div>
        <div className='login_fields input_layouts flex justify-center items-center flex-col rounded-sm bg-white shadow-lg w-96 py-6 px-10'>
          <LoginInput />
          <h5 className='text-xs font-light mt-4'>OR</h5>
          <div className='social_accounts_login mt-5 '>
            {/* <SocialLogin /> */}
            <hr className='border  relative mt-6' />
            <div className='signup_text mt-4 flex justify-between'>
              <span className='text-sm text-primary cursor-pointer'>
                Forgot Password ?
              </span>
              <Link to='/signup'>
                <span className='text-sm text-primary cursor-pointer'>
                  Sign up for an account
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
