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
        // console.log(hourContainer);
        // loop through hour elements
        // local storage get data corresponding to key that
        //   matches data-hour attribute
        var storedValuesObj = localStorage;
        // loop through hour
        for (var i = 9; i <= 16; i++){
            var thisHour = $(hourContainer[i-9]);
            var thisHourIndex = parseInt($(hourContainer[i-9]).attr("data-hour"));
            console.log(thisHour);
            console.log(thisHourIndex);
            $(thisHour)
            // console.log(typeof(thisHourIndex));
        }
    }

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
     *    Save input data to local storage
     *        get value of input box
     *        get value of hour-index
     *        local storage set (hourIndex, inputVal) 
     *    Render box values
     *        do this any time the page is loaded
     *        or any time a save button is clicked
     *        loop through local storage
     *        set hour input values to corresponding saved data 
     */
});