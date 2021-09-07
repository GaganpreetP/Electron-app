const fs = require('fs');

btnOpen = document.getElementById('liOfFiles');

btnOpen.addEventListener('click', function () {

    var liOfFiles = fs.readdirSync('./Files');

    var szHTML = '';

    for (let files in liOfFiles) {

        szHTML += `<br><li id = "list">${liOfFiles[files]}
         <button onclick = "openFile('${liOfFiles[files]}')">Open</button>
        <button onclick = "delFile('${liOfFiles[files]}')">Delete</button>
        </li>`;
    }

    document.getElementById('fileList').innerHTML = szHTML;
})


function openFile(fileName) {
    
    // var x = fs.readFileSync(`./Files/${fileName}`, 'utf-8');
    // console.log("file read");
    // console.log(x);

    var url_string = `D:/Gaganpreet/my-electron-app/view.html?a = ${fileName}`;
    window.location = url_string;

}

function delFile(fileName) {

    fs.unlinkSync(`./Files/${fileName}`);
    fileName = document.getElementById("list");
    fileName.remove();

}

btnCreate = document.getElementById("create");

btnCreate.addEventListener("click", function(){

    var nHTML = '';
    
    nHTML += `<br><label>Enter File Name</label><br>
    <textarea name="File" id = "enterName" cols = "5" rows = "1"></textarea>`
    document.getElementById('fileList').innerHTML = nHTML;
    
    
    nHTML += `<button onclick = "createFile()">Save</button>`
    document.getElementById('fileList').innerHTML = nHTML;
    
})

function createFile(){
    
    let fileName = document.getElementById("enterName").value;
    fs.writeFileSync(`./Files/${fileName}` , '');

}



