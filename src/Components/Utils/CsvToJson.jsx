import papa from 'papaparse';
// import { TOAST } from "../../retro";

function CsvToJson(
  file,
  map,
  validator = (row) => {
    return true;
  }
) {
  if (!file) {
    alert('Please select a valid CSV file');
    return;
  }
  papa.parse(file, {
    download: true,
    delimiter: ',', // auto-detect
    newline: '',
    header: true,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: '',
    worker: false,
    comments: false,
    complete: (result, file) => {
      let rows = [];
      result.data.forEach((row) => {
        if (validator(row)) {
          rows.push(row);
        }
      });
      map(rows);
    },
    delimitersToGuess: [',', '\t', '|'],
  });
}

export default CsvToJson;
