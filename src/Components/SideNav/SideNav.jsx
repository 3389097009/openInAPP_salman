import React, { useEffect, useState } from 'react';
// import './SideNav.css';

// import { NavLink } from 'react-router-dom';
import BaseLogo from '../../assets/base-logo.svg';
import routes from '../Utils/SideRoutes';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div>
      <div className="h-screen flex fixed">
        <div className={`flex flex-col  shadow  w-64`}>
          <div className="mx-auto mt-10">
            <img src={BaseLogo} alt="logo" />
          </div>
          <ul className="pt-2 pb-4 space-y-1 text-sm mt-5 p-3">
            {routes &&
              routes.map((route, index) => {
                return (
                  <li key={index} className="rounded-sm pt-5">
                    {/* <Link to={route.path}> */}
                    <a
                      // href={route.path}
                      className={`flex items-center p-2 space-x-3 rounded-md  focus:text-white focus-within:bg-purple focus:bg-purple active:bg-purple active:text-white`}
                    >
                      <img
                        className="w-6 h-6"
                        src={route.icon}
                        alt={route.name}
                      />
                      <span
                        className="text-lightGrey"
                        style={{ marginLeft: '14px' }}
                      >
                        {route.name}
                      </span>
                    </a>
                    {/* </Link> */}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
