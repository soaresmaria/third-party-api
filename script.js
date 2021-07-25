$(document).ready(function () {// essentially tells engine to load 1)html & 2)css first.
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    
    


    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

    }
})

