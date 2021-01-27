

var week = ['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT'];
var splitDays = [];
var dataObj= "";
var weatherArr =[]

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=29.760427&lon=-95.369804&exclude=minutely,alerts&units=imperial&appid=b016badd656d2ede8e0dbb4858e1a133')
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
       obj["temp"] = Math.ceil(dataObj.daily[idNum+1].temp.max);
       obj["icon"] = dataObj.daily[idNum+1].weather[0].main

       weatherArr.push(obj)
    }
       console.log(weatherArr)
       printFirst();
    //    printImage()

    }

function printFirst(){

   for(var i = 0; i < week.length; i++){
    
        
        idNum = week.indexOf(week[i])

        $("#day-"+idNum).html(week[i])
        $("#day-"+idNum).after("<h3>"+ weatherArr[i].temp + "&#8457"+"</h3>")
        // $("#day-"+idNum).after("<h3 id= 'deg-"+ idNum +"'>"+ weatherArr[i].temp + "</h3>")
        $("h3").hide();
    
            if(weatherArr[i].icon === 'Clouds'){
                 $("#temp-"+idNum).append("<img src='assets/img/Cloud.png'/>")
            }else if (weatherArr[i].icon === 'Rain' | weatherArr[i].icon === 'Drizzle' | weatherArr[i].icon === 'Thunderstorm'){
                $("#temp-"+idNum).append("<img src='assets/img/rainy.png'/>")
            }else if(weatherArr[i].icon === 'Clear'){
            $("#temp-"+idNum).append("<img src='assets/img/Sun.png'/>")
            } else{$("#temp-"+idNum).append("<img src='assets/img/all.png'/>")
              }
    }
}

$(".temp-element").hover(
    function(){
        $(this).css(
            {"background-color": "rgba(252,249,255,0.72)"})

        $(this).find("h3").show()
        $(this).find("h2").css(
            {"color": "#2E2940"})
    }, function(){
        var styles = {
            background: '#2E2940'
        };
        $(this).css(styles)
        $(this).find("h3").hide()
        $(this).find("h2").css(
            {"color": "#FFFCF9"})
    })

