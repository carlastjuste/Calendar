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

function displayTimeBlock(){
    var businessHours = ["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];

    for(i = 0; i < businessHours.length ; i++){
       
       //Handle the hours
        var lblHour = document.createElement('label');
       $(lblHour).addClass('hour');
       $(lblHour).html(businessHours[i]);

       //handle the text area
       var textArea = document.createElement('textarea');
       $(textArea).addClass('description');


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

// $('.container').html('<label class="time-block">9:00</label>\
//                 <textarea class="description"> Hellllllllllllllllo</textarea>\
//                 <button type="button" class="saveBtn"></button>');

                // $('.container').html('\
                //                             <div class="row">\
                //                                 <label class="hour">9:00</label>\
                //                                 <textarea class="description"> Hellllllllllllllllo</textarea>\
                //                                 <input type="submit" class="saveBtn"></input>\
                //                             </div>\
                //                     ');




