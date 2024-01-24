"use strict";

const baseURL = 'https://digimon-api.vercel.app/api/digimon/';
fetch(baseURL)
.then(result => result.json())
.then(function(data){
    data.forEach((digimon) => {
      document.getElementById('Digimons')
        .insertAdjacentHTML('beforeend', `<li class = "ListItem" onclick='detail(${JSON.stringify(digimon)})'>${digimon.name}</li>`)
    })
})

function detail(data) {
    document.getElementById('Detail').innerHTML = ''
    document.getElementById('Detail').insertAdjacentHTML('beforeend', 
                ` <h1>${data.name}</h1><img src="${data.img}" onload = " window.location = '#End' "/>`)
    
 }