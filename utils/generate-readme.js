const fs = require('fs');

//function to write README file
const writeFile = readmePage => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readmePage, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                return;
            }

            //returns a good message if it worked!
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile
