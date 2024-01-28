import React from 'react';
import SideNav from '../../Components/SideNav/SideNav';
import RightPanel from '../../Components/RightPanel/RightPanel';

const Home = () => {
  return (
    <>
      <div className="w-100 flex">
        <div className="left_pane">
          <SideNav />
        </div>
        <div className="right_pane">
          <RightPanel />
        </div>
      </div>
    </>
  );
};

export default Home;
