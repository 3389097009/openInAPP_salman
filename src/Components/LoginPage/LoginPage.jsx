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
import BaseLogo from '../../assets/base-logo.svg';
import routes from '../Utils/SideRoutes';

const LoginPage = () => {
  return (
    <>
      <div className='login_ui flex justify-evenly flex-row items-center'>
        <div className="w-full sm:w-2/4 lg:w-2/4">
          <img style={{ position: 'absolute', top: '0', left: '0' }} src={Left_triangle} alt="left-side-blue-triangle" />
          <p className='font-figtree' style={{
            color: 'white',
            fontSize: '72px',
            position: 'absolute',
            left: '15%',
            top: '50%',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
          }}>BASE</p>
          <div style={{ position: 'absolute', top: '50px', left: '50px' }} className='absolute flex items-center justify-center'>
            <img className='relative' src={Ellipse} alt="base-logo" />
            <div className="absolute">
              <img src={Vector} alt="vector_logo" />
            </div>
          </div>
          <div className='w-full lg:w-96 mt-96 absolute flex flex-row justify-evenly'>
            <img src={Github} alt="github-img" />
            <img src={Twitter} alt="twitter-img" />
            <img src={Linkedin} alt="linkedin-img" />
            <img src={Discord} alt="discord-img" />
          </div>
        </div>

        <div className='trello_logo'>
          {/* <img className='w-48' src={TrelloLogo} alt='trello-logo' /> */}
        </div>
        <div className='login_fields relative mt-44 flex justify-center items-center flex-col rounded-sm bg-white shadow-lg w-full sm:w-96 py-6 px-10'>
          <LoginInput />
          <h5 className='text-xs font-light mt-4'>OR</h5>
          <div className='social_accounts_login mt-5'>
            <hr className='border relative mt-6' />
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
