import React from 'react';
import './LoginPage.css';
import LoginInput from './LoginInput';
import { Link } from 'react-router-dom';
import Ellipse from '../../assets/Ellipse.svg';
import Vector from '../../assets/Vector.svg';
import Left_triangle from '../../assets/Left-side-blue-triangle.svg';
import Github from '../../assets/Github.svg';
import Twitter from '../../assets/Twitter.svg';
import Linkedin from '../../assets/Linkedin.svg';
import Discord from '../../assets/Discord.svg';

const LoginPage = () => {
  return (
    <>
      <div className='login_ui w-full flex flex-col lg:flex-row items-center relative'>
        {/* Blue strip at the top for mobile */}
        <div className='bg-blue h-16 w-full lg:w-0 lg:hidden'></div>

        {/* Logo and BASE text */}
        <div className='flex items-center mt-1 ml-1 absolute lg:static top-5 left-5 lg:left-0'>
          <div className='relative'>
            <img className='w-6 h-6' src={Ellipse} alt='base-logo' />
            <img
              className='w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              src={Vector}
              alt='vector-logo'
            />
          </div>
          <p
            className='ml-2 text-white font-nunito text-xl font-semibold lg:text-2xl'
            style={{
              color: '#FAFAFB',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: 'normal',
            }}
          >
            BASE
          </p>
        </div>

        {/* Original content for larger screens */}
        <div className='hidden lg:flex lg:w-2/4'>
          {/* Your existing code for larger screens */}
          <img
            style={{ position: 'absolute', top: '0', left: '0' }}
            src={Left_triangle}
            alt='left-side-blue-triangle'
          />
        </div>

        {/* Login fields */}
        <div className='login_fields mt-3 lg:mt-44 flex flex-col items-center rounded-sm bg-white shadow-lg w-96 py-6 px-10'>
          <LoginInput />
          <h5 className='text-xs font-light mt-4'>OR</h5>

          {/* Additional content */}
          <hr className='border mt-6' />
          <div className='signup_text mt-4 flex justify-between'>
            <span className='text-sm text-primary cursor-pointer'>
              Forgot Password?
            </span>
            <Link to='/signup'>
              <span className='text-sm text-primary cursor-pointer'>
                Sign up for an account
              </span>
            </Link>
          </div>

          {/* Social media icons below links */}
          <div className='social_accounts_login mt-5 flex justify-around w-2/3'>
            <img
              className='w-6 h-6 lg:hover:filter-none filter brightness-75 lg:w-auto lg:h-auto'
              src={Github}
              alt='github-img'
            />
            <img
              className='w-6 h-6 lg:hover:filter-none filter brightness-75 lg:w-auto lg:h-auto'
              src={Twitter}
              alt='twitter-img'
            />
            <img
              className='w-6 h-6 lg:hover:filter-none filter brightness-75 lg:w-auto lg:h-auto'
              src={Linkedin}
              alt='linkedin-img'
            />
            <img
              className='w-6 h-6 lg:hover:filter-none filter brightness-75 lg:w-auto lg:h-auto'
              src={Discord}
              alt='discord-img'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
