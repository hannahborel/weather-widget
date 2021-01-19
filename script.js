
// var degree= document.getElementById("feature-temp");
// var firstTemp = document.getElementById('temp-1')
// var secondTemp = document.getElementById('temp-2')
// var thirdTemp = document.getElementById('temp-3')
// var fourthTemp = document.getElementById('tem-4')
// var fifthTemp= document.getElementById('temp-5')
// var sixthTemp = document.getElementById('temp-6')
// var seventhTemp= document.getElementById('temp-7')

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=29.760427&lon=-95.369804&units=imperial&appid=b016badd656d2ede8e0dbb4858e1a133')
.then(response => response.json())
.then(data=>{

console.log(data.current.temp)
var temp = data.current.temp

var featureTemp= document.getElementById("feature-temp")

featureTemp.innerHTML = Math.ceil(temp) + '&#8457;';


})



.catch(err => console.log("error"))

// fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={b016badd656d2ede8e0dbb4858e1a133}')

