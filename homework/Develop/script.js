// moment. format to display the current day text at the header

var currentDayText = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDayText);
