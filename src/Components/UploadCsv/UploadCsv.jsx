import React, { useRef, useState } from 'react';
import ExcelIcon from '../../assets/excel-icon.svg';
import CsvToJson from '../Utils/CsvToJson';

const UploadCsv = () => {
  const fileInputRef = useRef(null);
  const [csvData, setCsvData] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current.click();
    setUploading(true);
  };

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    CsvToJson(file, (row) => {
      setCsvData(row);
      setUploading(false);
    });
  };

  const handleTagSelection = (index, selectedTag) => {
    setCsvData((prevData) => {
      const updatedData = [...prevData];
      const selectedTags = updatedData[index]['selected tags'];

      // Check if the selected tag is not already present
      if (!selectedTags.includes(selectedTag)) {
        updatedData[index]['selected tags'] = selectedTags
          ? `${selectedTags}, ${selectedTag}`
          : selectedTag;
      }

      // Add a background color to the added tag
      updatedData[index]['selected tags background'] = selectedTag;

      return updatedData;
    });
  };

  const handleTagRemoval = (index, tagToRemove) => {
    setCsvData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index]['selected tags'] = updatedData[index]['selected tags']
        .split(',')
        .filter((tag) => tag.trim() !== tagToRemove)
        .join(', ');
      return updatedData;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg flex justify-center items-center upload_container flex-col">
        <div className="browse_button flex justify-center items-center flex-col">
          <img src={ExcelIcon} alt="excel_icon" />
          <h4 className="font-figtree text-lightTrunks text-base ">
            Drop your excel sheet here or
            <span
              className="text-primary cursor-pointer"
              onClick={handleButtonClick}
            >
              browse
            </span>
          </h4>
        </div>

        <div className="upload_button_container mt-5 relative">
          <input
            type="file"
            accept=".csv"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button
            className="bg-primary rounded-lg upload_but flex justify-center items-center"
            onClick={handleButtonClick}
          >
            {!uploading && <i className="fa fa-upload mr-2" />}
            {!uploading ? 'Upload' : <div className="loader"></div>}
          </button>
        </div>
      </div>

      {csvData.length > 0 && (
        <div className="font-Figtree text-24 mt-8">
          <table className="w-full border-collapse rounded-lg bg-bulmaLight">
            <thead>
              <tr className="bg-bulmaLight">
                <th colSpan="6" className="p-4 text-left">
                  <span
                    className="font-Figtree text-24 "
                    style={{
                      fontFamily: 'Figtree',
                      fontSize: '24px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '32px',
                    }}
                  >
                    Uploads
                  </span>
                </th>
              </tr>
              <tr className="bg-bulmaLight">
                <th className="p-4 text-left">Sr No</th>
                <th className="p-4 text-left">Links</th>
                <th className="p-4 text-left">Prefix</th>
                <th className="p-4 text-left">Add Tags</th>
                <th className="p-4 text-left">Selected Tags</th>
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-white">
                    <td className="p-4 text-14 font-semibold">{row.id}</td>
                    <td className="p-4 text-14 font-semibold">
                      <a
                        href={`http://${row.links}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue underline "
                      >
                        {row.links}
                      </a>
                    </td>
                    <td className="p-4 text-14 font-semibold">{row.prefix}</td>
                    <td className="p-4">
                      <select
                        className="border p-1 rounded"
                        value=""
                        onChange={(e) => handleTagSelection(index, e.target.value)}
                      >
                        <option value="" disabled>Select Tag</option>
                        {row['select tags'].split(',').map((tag, tagIndex) => (
                          <option key={tagIndex} value={tag.trim()}>
                            {tag.trim()}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-4 text-14 font-semibold">
                      {row['selected tags'].split(',').map((selectedTag, selectedTagIndex) => (
                        selectedTag.trim() && (
                          <span
                            key={selectedTagIndex}
                            className="mr-2 bg-blue text-white px-2 py-1 rounded"
                          >
                            {selectedTag.trim()}{' '}
                            <span
                              className="cursor-pointer text-red-500"
                              onClick={() => handleTagRemoval(index, selectedTag.trim())}
                            >
                              X
                            </span>
                          </span>
                        )
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="6">
                      <div
                        className="bg-bulmaLight h-2.5"
                        style={{ width: '100%', marginBottom: '5px' }}
                      ></div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UploadCsv;
