/**
 * File Manager performing CRUD operations using the built-in 'fs' module.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

console.log("Creating File...");

// 1. Create / Write File
fs.writeFile(filePath, 'Hello Node.js', (err) => {
    if (err) {
        return console.error("Error creating file:", err.message);
    }
    console.log("File Created");

    // 2. Read File
    console.log("Reading File");
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.error("Error reading file:", err.message);
        }
        console.log(data);

        // 3. Update / Append to File
        fs.appendFile(filePath, '\nLearning FS Module', (err) => {
            if (err) {
                return console.error("Error updating file:", err.message);
            }
            console.log("File Updated");

            // Read updated content
            fs.readFile(filePath, 'utf8', (err, updatedData) => {
                if (err) {
                    return console.error("Error reading updated file:", err.message);
                }
                console.log(updatedData);

                // 4. Delete File
                fs.unlink(filePath, (err) => {
                    if (err) {
                        return console.error("Error deleting file:", err.message);
                    }
                    console.log("File Deleted");
                });
            });
        });
    });
});