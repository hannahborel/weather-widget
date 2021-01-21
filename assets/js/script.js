
// var degree= document.getElementById("feature-temp");
// var firstTemp = document.getElementById('temp-1')
// var secondTemp = document.getElementById('temp-2')
// var thirdTemp = document.getElementById('temp-3')
// var fourthTemp = document.getElementById('tem-4')
// var fifthTemp= document.getElementById('temp-5')
// var sixthTemp = document.getElementById('temp-6')
// var seventhTemp= document.getElementById('temp-7')

var week = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat'];
var newArr = [];
dayOfWeek = 0;



fetch('https://api.openweathermap.org/data/2.5/onecall?lat=29.760427&lon=-95.369804&units=imperial&appid=b016badd656d2ede8e0dbb4858e1a133')
.then(response => response.json())
.then(data=>{

console.log(data)
console.log(data.current.temp)
var temp = data.current.temp

var featureTemp= document.getElementById("feature-temp")

featureTemp.innerHTML = Math.ceil(temp) + '&#8457;';

getToday();

})
.catch(err => console.log("error"))




function getToday(){
    var fullDate= new Date()
    var dayOfWeek = fullDate.getDay()
    console.log("Today's Date:",fullDate)
    console.log("Day of the Week: ", dayOfWeek)
    
    removeIndex(dayOfWeek)
}

function removeIndex(dayOfWeek){

var newArr = week.slice(dayOfWeek, week.length)

var numOfElements = week.length - dayOfWeek
week.splice(dayOfWeek, numOfElements)

console.log("-------Sliced Arr--------",newArr)
console.log("-------New Week Arr--------",week)

replaceIndex(newArr)

}

function replaceIndex(newArr){

    for (var i = newArr.length - 1; i >= 0; i--) {
        console.log(newArr[i]);
        week.splice(0,0, newArr[i])

        console.log("-------Sliced Arr--------",newArr)
        console.log("-------New Week Arr--------",week)

        printDay()

    }

 
}

function printDay(){

    console.log("printday()")
    var day = document.querySelector(".day");

    day.innerHTML =week[0];

}



