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

        JSON.parse(localStorage.setItem("9AM", JSON.stringify(textNine.val())));
        JSON.parse(localStorage.setItem("10AM", JSON.stringify(textTen.val())));
        JSON.parse(localStorage.setItem("11AM", JSON.stringify(textEleven.val())));
        JSON.parse(localStorage.setItem("12AM", JSON.stringify(textTwelve.val())));
        JSON.parse(localStorage.setItem("13PM", JSON.stringify(textOne.val())));
        JSON.parse(localStorage.setItem("14PM", JSON.stringify(textTwo.val())));
        JSON.parse(localStorage.setItem("15PM", JSON.stringify(textThree.val())));
        JSON.parse(localStorage.setItem("16PM", JSON.stringify(textFour.val())));
        JSON.parse(localStorage.setItem("17PM", JSON.stringify(textFive.val())));
        JSON.parse(localStorage.setItem("18PM"), JSON.stringify(textSix.val()));

    })

    //Stored content will display on screen and when the browser page is refreshed, the content will stay
    $("#nine-text").append(localStorage.getItem("9AM"));
    $("#ten-text").append(localStorage.getItem("10AM"));
    $("#eleven-text").append(localStorage.getItem("11AM"));
    $("#twelve-text").append(localStorage.getItem("12AM"));
    $("#one-text").append(localStorage.getItem("13PM"));
    $("#two-text").append(localStorage.getItem("14PM"));
    $("#three-text").append(localStorage.getItem("15PM"));
    $("#four-text").append(localStorage.getItem("16PM"));
    $("#five-text").append(localStorage.getItem("17PM"));
    $("#six-text").append(localStorage.getItem("18PM"));

})
// When Clear button is clicked, all locally stored items will clear from page and local storage.
// Will display hours that have not been yet to be green, past hours will be pale blue, and current hour will be red

