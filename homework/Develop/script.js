// moment. format to display the current day text at the header
var currentDayText = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDayText);

// moment. format to display current time
var currentTimeText = function (){
    let currentTimeText = moment().format('h:mm:ss')
    $("#currentTime").text(currentTimeText)
}
// call upon the current time and set interval to make it dynamic
currentTimeText();
setInterval(currentTimeText,1000);


// calling upon elements
var saveBtn = $(".saveBtn");

// function to present, past and future color coded 
function colorcode() {
    // need to call upon current time to compare
    var currHour = moment().hour(); 

    // loop for time blocks
    $(".timeblocks").each(function() {
        var currTimeBlock = parseInt($(".timeblocks").attr("id"));

        if (currTimeBlock > currHour) {
            $(this).css({"color" :"red"}).addClass("future");
        } else if (currTimeBlock === currHour) {
            $(this).css({"color" :"green"}).addClass("present");
        } else {
            $(this).css({"color" :"grey"}).addClass("past");
        }
})
}

// when clicked on the save btn 
saveBtn.on("click", function() {
    // console.log(this); works
    var hour = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    // the text in the text area is saved in the storage
    localStorage.setItem(hour, description);
    // console.log(hour);
    // console.log("description");
})

// need to get item and stay after refreshing 
function userSaved () {
   
    $(".hour").each(function() {

        var currHour = $(this).text();
        var currDescription = localStorage.getItem(currHour);
    
        console.log(this);
        console.log(currHour);   

        if(currDescription !== null) {
            $(this).siblings(".description").val(currDescription);
        }
    })
}

// lets call the functions 
colorcode();
userSaved();




// INSTRUCTIONS
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
