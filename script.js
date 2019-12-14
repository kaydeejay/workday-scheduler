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
    $("#currentDay").text(moment());
});