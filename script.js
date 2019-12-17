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

    var colorTimer;

    $("#currentDay").text(moment());

    function setColors(){
        var actualTime = moment().hour();
        var inputHours = $(".time-block");
        
        for (var i = 0; i < inputHours.length; i++){
            var thisHour = $(inputHours[i])
            var hourIndex = i+9;
            $(thisHour).attr("data-hour", hourIndex);
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

    

    /**
     * To Dos:
     *    Get hour
     *    Determine which colors display based on hour
     *        Loop through the time/input divs
     *        assign attribute data-hour equal to hour in 24-hr time format
     *        compare each data-hour to current hour
     *        < = past // === = present // > = future 
     *    Display the colors:
     *        set attribute "class" to .past/.present/.future
     *         
     *         
     */
});