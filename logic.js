var APIkey = "166a433c57516f51dfab1f7edaed8413"

$("#search").click(function() {
    event.preventDefault();
    var location = $("#location").val();
    var queryURL = "http://api.openweathermap.org/data/2.5/weather" + "?q=" + location + "&units=imperial" + "&APPID=" + APIkey;
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
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + location + "&units=imperial" + "&APPID=" + APIkey;
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

        });
}); //button search click