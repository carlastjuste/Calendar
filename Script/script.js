var date = new Date();
var dayId = date.getDay();
var month = date.getMonth();
var day = date.getDate();

var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

$("#currentDay").html(dayName[dayId] + ", " + monthName[month] + " " + getDayWithSuffix());


//function to add suffix for days
function getDayWithSuffix (Day) {
    switch (day) {
        case 1:
        case 21:
        case 31:
            return "" + day + "st";

        case 2:
        case 22:
            return "" + day + "nd";

        case 3:
        case 23:
            return "" + day + "rd";

        default:
            return "" + day + "th";
}
}

// var dp = new DayPilot.Calendar("dp");
// //dp.viewType = "Day";
// //dp.init();


