// const fs = require('fs');
// const path = require('path');

btnRead = document.getElementById('btnRead');

// let pathName = path.join(__dirname, 'Files');

btnRead.addEventListener('click', function (err, data) {
    if (err) {

        return console.log(err);
    }
    // let file = path.join(pathName, "abc.txt")
    var data = fs.readFileSync("./Files/abc.txt");

    console.log(data);
    console.log("file read");

});