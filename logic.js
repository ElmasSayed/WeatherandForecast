$( document ).ready(function() {

    var APIkey = "166a433c57516f51dfab1f7edaed8413"

    $("#search").click(function() {
    event.preventDefault();
    var location = $("#location").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather" + "?q=" + location + "&units=imperial" + "&APPID=" + APIkey;
    // console.log(queryURL);
    // console.log(response);
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            // console.log(queryURL);
            // console.log(response);
            console.log(JSON.stringify(response, null, 4));

            // Transfer content to html
            $("#cityName").html(response.name);
            $("#wind").html(response.wind.speed);
            $("#humidity").html(response.main.humidity);
            $("#temp").html(response.main.temp);
            $("#rain").html(response.weather[0].description);
        });

    // Forcast
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&units=imperial" + "&APPID=" + APIkey;
    // console.log(queryURL);

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            console.log(queryURL);
            // console.log(response);
            // console.log(JSON.stringify(response, null, 4));

            // Transfer content to html
            $("#temp_forcast1").html(response.list[0].main.temp);
            console.log(response.list[0].main.temp);
            $("#temp_forcast2").html(response.list[8].main.temp);
            $("#temp_forcast3").html(response.list[16].main.temp);
            $("#temp_forcast4").html(response.list[24].main.temp);
            $("#temp_forcast5").html(response.list[32].main.temp);

            var idx = 0;

            var todaysDate = new Date();
            var startDate = response.list[idx].dt_txt;
            console.log("todaysDate = " + moment(new Date(todaysDate)).format('MM/DD/YY'));
            console.log("startDate = " + moment(new Date(startDate)).format('MM/DD/YY'));
            if (todaysDate != startDate) {
                idx = idx + 6;
            }

            // date
            var day1 = (response.list[idx].dt_txt);
            var convertedDate = moment(new Date(day1));
            $("#day1").html(moment(convertedDate).format("MMM DD, YYYY"));

            idx = idx + 8;
            var day2 = (response.list[idx].dt_txt);
            var convertedDate = moment(new Date(day2));
            $("#day2").html(moment(convertedDate).format("MMM DD, YYYY"));

            idx = idx + 8;
            var day3 = (response.list[idx].dt_txt);
            var convertedDate = moment(new Date(day3));
            $("#day3").html(moment(convertedDate).format("MMM DD, YYYY"));

            idx = idx + 8;
            var day4 = (response.list[idx].dt_txt);
            var convertedDate = moment(new Date(day4));
            $("#day4").html(moment(convertedDate).format("MMM DD, YYYY"));

            idx = idx + 8;
            var day5 = (response.list[idx].dt_txt);
            var convertedDate = moment(new Date(day5));
            $("#day5").html(moment(convertedDate).format("MMM DD, YYYY"));

            // $("#day1").html(response.list[0].dt_txt);

            // 
            // $("#day3").html(response.list[16].dt_txt);
            // $("#day4").html(response.list[24].dt_txt);
            // $("#day5").html(response.list[32].dt_txt);
            // console.log(response.list[0].main.temp);

        });
    }); //button search click

// -------------------------------------------------------------------------------------------

}); // $ doc ready