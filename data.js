const xlsx = require('xlsx');

const readExcelFile = (filePath) => {
    const workbook = xlsx.readFile(filePath);

    const firstSheetName = workbook.SheetNames[0];

    const worksheet = workbook.Sheets[firstSheetName];

    const data = xlsx.utils.sheet_to_json(worksheet);

    return data;
};


const readExclFile2 = (filePath) => {
    const workbook = xlsx.readFile(filePath);

    const firstSheetName = workbook.SheetNames[1];

    const worksheet = workbook.Sheets[firstSheetName];

    const data = xlsx.utils.sheet_to_json(worksheet);

    return data;
}


module.exports = { readExcelFile, readExclFile2 }



