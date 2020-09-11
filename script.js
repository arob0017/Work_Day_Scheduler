$(document).ready(function () {
    // Shows current date, time and day in header
    var todayDate = moment().format("MMM Do YY, h:mm a")
    $("#todays-date").append(todayDate);


    var textNine = $("#nine-text");
    var textTen = $("#ten-text");
    var textEleven = $("#eleven-text");
    var textTwelve = $("#twelve-text");
    var textOne = $("#one-text");
    var textTwo = $("#two-text");
    var textThree = $("#three-text");
    var textFour = $("#four-text");
    var textFive = $("#five-text");
    var textSix = $("#six-text");

    //store items to browser local storage on click of the save button
    $(".saveBtn").on("click", function () {

        (localStorage.setItem("9AM", JSON.stringify(textNine.val())));
        (localStorage.setItem("10AM", JSON.stringify(textTen.val())));
        (localStorage.setItem("11AM", JSON.stringify(textEleven.val())));
        (localStorage.setItem("12AM", JSON.stringify(textTwelve.val())));
        (localStorage.setItem("13PM", JSON.stringify(textOne.val())));
        (localStorage.setItem("14PM", JSON.stringify(textTwo.val())));
        (localStorage.setItem("15PM", JSON.stringify(textThree.val())));
        (localStorage.setItem("16PM", JSON.stringify(textFour.val())));
        (localStorage.setItem("17PM", JSON.stringify(textFive.val())));
        (localStorage.setItem("18PM"), JSON.stringify(textSix.val()));

    })

    //Stored content will display on screen and when the browser page is refreshed, the content will stay
    $("#nine-text").append(JSON.parse(localStorage.getItem("9AM")));
    $("#ten-text").append(JSON.parse(localStorage.getItem("10AM")));
    $("#eleven-text").append(JSON.parse(localStorage.getItem("11AM")));
    $("#twelve-text").append(JSON.parse(localStorage.getItem("12AM")));
    $("#one-text").append(JSON.parse(localStorage.getItem("13PM")));
    $("#two-text").append(JSON.parse(localStorage.getItem("14PM")));
    $("#three-text").append(JSON.parse(localStorage.getItem("15PM")));
    $("#four-text").append(JSON.parse(localStorage.getItem("16PM")));
    $("#five-text").append(JSON.parse(localStorage.getItem("17PM")));
    $("#six-text").append(JSON.parse(localStorage.getItem("18PM")));


    // When Clear button is clicked, all locally stored items will clear from page and local storage.
    $("#clearBtn").on('click', function () {

        event.preventDefault();
        window.localStorage.clear();
    });


    // Will display hours that have not been yet to be pale red, past hours will be pale blue, and current hour will be pale green
    var currentColorEl = $(".current-color");
    var currentHour = (moment().format('H'));

    for (var i = 0; i < currentColorEl.length; i++) {

        var timeColor = $(currentColorEl[i]);
        var timeColorId = timeColor.attr("id");
        var timeColorTextarea = timeColor.children(".row").children("textarea");

        if (timeColorId === currentHour) {
            timeColorTextarea.addClass("present");
        } else if (moment(timeColorId, "H").isBefore()) {
            timeColorTextarea.addClass("past");
        } else if (moment(timeColorId, "H").isAfter()) {
            timeColorTextarea.addClass("future");
        }
    }

});
