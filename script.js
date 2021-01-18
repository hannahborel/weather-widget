


fetch('https://api.openweathermap.org/data/2.5/onecall?lat=29.760427&lon=-95.369804&units=imperial&appid=b016badd656d2ede8e0dbb4858e1a133')
.then(response => response.json())
.then(data=>{
    
console.log(data.daily[0].temp.day)
var temp = data.daily[0].temp.day
document.getElementById("first-temp").innerHTML = temp;
// var num = (data.daily[0].temp.day)
// today = num.toString()
// console.log(today)
// firstTemp.innerHTML = today;

})



.catch(err => console.log("error"))

// fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={b016badd656d2ede8e0dbb4858e1a133}')

