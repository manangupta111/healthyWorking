
// python3 -m http.server

// Check how to process time input from html file
// Check how to start and end timer for settings update

// Add exercise data
// Implement pop up
// Add styling


// Version 2 -> Implement next day work ending thingy
// Version 3 -> Implement custom time input for reminders

const exerciseMap = { "1" : {"name" : "ABC", "gif": "URL1"}, "2" : {"name" : "DEF", "gif": "URL2"}, "3" : {"name" : "GHI", "gif": "URL3"}}

var timeBetweenWaterNotification = 1000;
var timeBetweenPostureNotification = 1000;
var timeBetweenEyesNotification = 1000;
var timeBetweenStretchNotification = 1000;

var waterIntervalFlag = true;
var postureIntervalFlag = true;
var eyesIntervalFlag = true;
var stretchIntervalFlag = true;

document.getElementById("startTime").defaultValue = "11:00";
document.getElementById("endTime").defaultValue = "19:00";
var now = new Date();

do {
    initialise();
    readData();
    break;
} while (true)

function updateSettings(form){

    // TODO: implement timer thingy for time update
    // if condition -> endTimer(), initialise()
    startTimeInput = form.startTime.value;
    endTimeInput = form.endTime.value;

    if(waterIntervalFlag != form.waterReminder.checked){
        waterIntervalFlag = form.waterReminder.checked;
        updateWaterNotification(waterIntervalFlag);
    }

    if(postureIntervalFlag != form.postureReminder.checked){
        postureIntervalFlag = form.postureReminder.checked;
        updateWaterNotification(postureIntervalFlag);
    }

    if(eyesIntervalFlag != form.eyeReminder.checked){
        eyesIntervalFlag = form.eyeReminder.checked;
        updateWaterNotification(eyesIntervalFlag);
    }

    if(stretchIntervalFlag != form.stretchReminder.checked){
        stretchIntervalFlag = form.stretchReminder.checked;
        updateWaterNotification(stretchIntervalFlag);
    }

    console.log(startTimeInput);
}

var startTimeInput;
var endTimeInput;

var waterInterval;
var postureInterval;
var eyesInterval;
var stretchInterval;

function initialise(){

    console.log("Initialised");

    var startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 50, 0, 0);
    var millisTillStart = startTime - now;
    console.log(millisTillStart);
    if(millisTillStart > 0){
        setTimeout(function(){startTimer()}, millisTillStart);
    }

    var endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 10, 0, 0);
    var millisTillEnd = endTime - now;
    console.log(millisTillEnd);
    if(millisTillEnd > 0){
        setTimeout(function(){endTimer()}, millisTillEnd);
    }
}



function startTimer(){
    console.log("Starting timer");
    if(waterIntervalFlag){
        waterInterval = setInterval(function(){showWaterNotification()},timeBetweenWaterNotification);
    }

    if(eyesIntervalFlag){
        eyesInterval = setInterval(function(){showEyeNotification()},timeBetweenEyesNotification);
    }

    if(postureIntervalFlag){
        postureInterval = setInterval(function(){showPostureNotification()},timeBetweenPostureNotification);
    }

    if(stretchIntervalFlag){
        stretchInterval = setInterval(function(){showStretchNotification()},timeBetweenStretchNotification);
    }
}


function endTimer(){
    console.log("Ending timer");
    if(waterIntervalFlag){
        clearInterval(waterInterval);
    }

    if(eyesIntervalFlag){
        clearInterval(eyesInterval);
    }

    if(postureIntervalFlag){
        clearInterval(postureInterval);
    }

    if(stretchIntervalFlag){
        clearInterval(stretchInterval);
    }
}

function updateWaterNotification(flag){
    if(flag){
        waterInterval = setInterval(function(){showWaterNotification()},timeBetweenWaterNotification);
    } else{
        clearInterval(waterInterval);
    }
}

function updatePostureNotification(flag){
    if(flag){
        postureInterval = setInterval(function(){showPostureNotification()},timeBetweenPostureNotification);
    } else{
        clearInterval(postureInterval);
    }
}

function updateEyeNotification(flag){
    if(flag){
        eyesInterval = setInterval(function(){showEyeNotification()},timeBetweenEyesNotification);
    } else{
        clearInterval(eyesInterval);
    }
}

function updateStretchNotification(flag){
    if(flag){
        stretchInterval = setInterval(function(){showStretchNotification()},timeBetweenStretchNotification);
    } else{
        clearInterval(stretchInterval);
    }
}


function showWaterNotification(){
    console.log("Notification for water.");
}

function showPostureNotification(){
    console.log("Notification for posture.");
}

function showEyeNotification(){
    console.log("Notification for eyes.");
}

function showStretchNotification(){
    readData();
    console.log("Notification to stretch.");
}

function readData(){
    const val = get_random();
    const exercise = exerciseMap[val];
    console.log(exercise['name']);
}

function get_random () {
    const list = ["1", "2", "3"];
    return list[Math.floor((Math.random()*list.length))];
}