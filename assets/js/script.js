

var week = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat'];
var splitDays = [];
var dataObj= "";
var weather =[]

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

    var splitDays = week.slice(tomorrow, week.length)
    var numOfElements = week.length - tomorrow

        week.splice(tomorrow, numOfElements)

            replaceIndex(splitDays)


            console.log("-------Sliced Arr--------",splitDays)
            console.log("-------New Week Arr--------",week)

}



function replaceIndex(splitDays){

    for (var i = splitDays.length - 1; i >= 0; i--) {
        console.log("replaceIndex()",splitDays[i]);
        week.splice(0,0, splitDays[i])
    }
    console.log("-------Sliced Arr--------",splitDays)
    console.log("-------New Week Arr--------",week)

    // printDay() 
    organizeData()
}


function organizeData(){

    for(var i = 0; i < week.length; i++){

    idNum = week.indexOf(week[i])

       var obj = {};
       obj["day"] = week[i];
       obj["temp"] = dataObj.daily[idNum+1].temp.max;
       obj["icon"] = dataObj.daily[idNum+1].weather[0].main

       weather.push(obj)
    }
       console.log(weather)
       printFirst();

    }




function printFirst(){

    console.log("printday()")
  
    
    for(var i = 0; i < week.length; i++){
    
        
        idNum = week.indexOf(week[i])
        console.log("day-",idNum)

        var dayTarget = document.getElementById("day-"+idNum);
        dayTarget.innerHTML =week[i];

        console.log("daily-temp: ",dataObj.daily[idNum+1].temp.max, "weather: ",dataObj.daily[idNum+1].weather[0].main)

    }
    
}


