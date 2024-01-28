import React from 'react';
import Navbar from '../Navbar/Navbar';
import UploadCsv from '../UploadCsv/UploadCsv';

const RightPanel = () => {
  return (
    <div>
      <div className="navbar_main">
        <Navbar />
      </div>
      <div className="upload_csv_button flex justify-center">
        <UploadCsv />
      </div>
    </div>
  );
};

export default RightPanel;
