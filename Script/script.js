var date = new Date();
var dayId = date.getDay();
var month = date.getMonth();
var day = date.getDate();

console.log(date);
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

function displayTimeBlock(){
    var businessHours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
    var hour = date.getHours();

    if (hour > 12 ){
        hour = hour - 12 ;
        time = "PM";
    }else if(hour == 12){
        time = "PM";
    } 
    else{
        time = 'AM';
    }

    var CurrentHour = hour + time;
    var x = businessHours.indexOf(CurrentHour);
    

    if (x == -1 && time == 'AM'){
        //all all future
        var isbefbus= -1
        generateTimeBlock(businessHours,isbefbus);
    }

    if (x == -1 && time == 'PM'){
        var isaftbus =  businessHours.length + 1;
        generateTimeBlock(businessHours, isaftbus);
    }
    
    if ( x != -1){
      generateTimeBlock(businessHours, x);
    }

}

function generateTimeBlock(businessHours, posBlock){

    for(i = 0; i < businessHours.length ;i++){
       //Handle the hours
       var lblHour = document.createElement('label');
       $(lblHour).addClass('hour');
       $(lblHour).html(businessHours[i]);


       //handle the text area
       var textArea = document.createElement('textarea');
       $(textArea).addClass('description');
       
       //compare with the index to determine if it's in the past present or future
       if ( i < posBlock) $(textArea).addClass('past');
       if ( i == posBlock) $(textArea).addClass("present");
       if ( i > posBlock) $(textArea).addClass("future");

       //handle the button 
       var button = document.createElement('input');
       $(button).attr("type", "submit");
       $(button).addClass("saveBtn");

       //handle the div inside that wrap the contents
       var divRow = document.createElement('div');
       $(divRow).addClass('row');
       $(divRow).append(lblHour, textArea, button);
       
       $('.container').append(divRow);
    }
}

$( document ).ready(function() {
    displayTimeBlock();
});




