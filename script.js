$(document).ready(function () {

    var todayDate = moment().format("MMM Do YY, h:mm a")
    $("#todays-date").append(todayDate);



    $.each(timeInputArr, function (i, val) {


    });
    $("button").on('click', function () {
        var hourId = $(this).attr("id");
        var timeInputEntered = $(this).siblings("input").val();
        for (var i = 0; i < timeInputArr.length; i++) {
            if (timeInputArr[i].hour === hourId) {
                timeInputArr[i].input = timeInputEntered
            }
        }
        localStorage.setItem("timeInputArr", JSON.stringify(timeInputArr))
    })
});