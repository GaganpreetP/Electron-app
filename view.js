"use strict"

const fs = require('fs');

const init = function(){
    let fileName = document.location.search.replace(/^.*?\=%20/ , '');
    var read = fs.readFileSync(`./Files/${fileName}`, 'utf-8');
    document.getElementById('contentsOfFile').value += read;

    var aHTML = `<button onclick = "fileAppend('${fileName}')">Save</button>`;
    document.getElementById('contents').innerHTML = aHTML;
    
}

document.addEventListener('DOMContentLoaded' , function(){
    init();
})

function fileAppend(fileName) {

    let info = document.getElementById("contentsOfFile").value;
    fs.appendFileSync(`./Files/${fileName}` , info);
}