import React from 'react';
import SideNav from '../../Components/SideNav/SideNav';
import RightPanel from '../../Components/RightPanel/RightPanel';

const Home = () => {
  return (
    <>
      <div className="sm:w-100 sm:flex">
        <div className="left_pane hidden md:flex">
          <SideNav />
        </div>
        <div className="right_pane h-screen">
          <RightPanel />
        </div>
      </div>
    </>
  );
};

export default Home;
