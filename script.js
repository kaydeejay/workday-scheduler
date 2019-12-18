/* idea.
    make an object for the schedule, like the following:

    var today = {
        9am: "",
        10am: "",
        etc...
    }

    and then saving the inputs of the "hour" cells changes the strings in the object.
*/

$(document).ready(function(){
    // set colors once per minute
    var colorTimer;

    $("#currentDay").text(moment());

    function setColors(){
        var actualTime = moment().hour();
        var inputHours = $(".time-block");
        
        //loop through the textfield elements
        for (var i = 0; i < inputHours.length; i++){
            //give each element attribute "data-hour"
            var thisHour = $(inputHours[i])
            //index by respective number on 24-hour clock
            var hourIndex = i+9;
            $(thisHour).attr("data-hour", hourIndex);
            //apply the past/present/future classes
            if (hourIndex > actualTime) {
                $(thisHour).addClass("past");
            }
            else if (hourIndex === actualTime) {
                $(thisHour).addClass("present");
            }
            else {
                $(thisHour).addClass("future");
            }
        }
    }

    setColors();
    colorTimer = setTimeout(setColors, 60000);

    $(".saveBtn").on("click", function(){
        var hour = $(this).parent().attr("data-hour");    
        var hourElChildren = $(this).parent().children();
        var hourText = $(hourElChildren[1]).val();
        localStorage.setItem(hour, hourText);
        renderHourValues();
    });

    function renderHourValues(){
        var hourContainer = $(".container").children();
        var storedValuesObj = localStorage;
        // loop through hour elements
        for (var i = 0; i < hourContainer.length; i++){
            var thisHourInput = $(hourContainer[i]).children()[1];
            var thisHourlyIndex = parseInt($(hourContainer[i]).attr("data-hour"));
            $(thisHourInput).val(localStorage.getItem(thisHourlyIndex));
        }
    }
});