
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
var dataObj= "";




fetch('https://api.openweathermap.org/data/2.5/onecall?lat=29.760427&lon=-95.369804&exclude=minutely,hourly,alerts&units=imperial&appid=b016badd656d2ede8e0dbb4858e1a133')
.then(response => response.json())
.then(data=>{

    dataObj = data;
    console.log(dataObj)

// -------------Open weather Object Target--------------------------------
    var temp = data.current.temp

    var featureTemp= document.getElementById("feature-temp")

    featureTemp.innerHTML = Math.ceil(temp) + '&#8457;';

    getToday();

})
// .catch(err => console.log("error"))




function getToday(){

    var fullDate= new Date()
    var dayOfWeek = fullDate.getDay()
    var tomorrow = dayOfWeek + 1 

    removeIndex(tomorrow)

    console.log("Today's Date:",fullDate)
    console.log("Day of the Week: ", dayOfWeek)
    console.log("tomorrow: ", tomorrow)
}



function removeIndex(tomorrow){

    var newArr = week.slice(tomorrow, week.length)
    var numOfElements = week.length - tomorrow

        week.splice(tomorrow, numOfElements)

            replaceIndex(newArr)


            console.log("-------Sliced Arr--------",newArr)
            console.log("-------New Week Arr--------",week)

}



function replaceIndex(newArr){

    for (var i = newArr.length - 1; i >= 0; i--) {
        console.log(newArr[i]);
        week.splice(0,0, newArr[i])

        console.log("-------Sliced Arr--------",newArr)
        console.log("-------New Week Arr--------",week)
    }

    printData()
}



function printData(){

    console.log("printdata()")
  
    for(var i = 0; i < week.length; i++){

        idNum = week.indexOf(week[i])
        console.log(idNum)

        var day = document.getElementById("day-"+idNum);
        day.innerHTML =week[i];

        console.log("daily-temp",dataObj.daily[idNum+1].temp.max)
    }
    
}

