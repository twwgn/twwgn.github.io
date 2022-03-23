//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory
const directoryPath = path.join(__dirname, 'public', 'media');
let data = [];
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files
    files.forEach(function (file) {
        console.log(file);
        data.push({fileName: file, ext: file.split('.').pop()});
    });
    fs.writeFile('./src/data.json', JSON.stringify(data, null, 4), 'utf8', (err) => {
        console.log(err);
    });
});