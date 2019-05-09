//New York
$(function() {

var url = 'https://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e'

  $.get(url, function(data) {

var windspeed = data.wind.speed;
    console.log(windspeed);
        if (windspeed <= 1.9){
            $(".nyy h1").css("animation-duration", "1s");
        } else if (windspeed <= 2.9){
            $(".nyy h1").css("animation-duration", "5s");
        } else if (windspeed <= 3.9){
            $(".nyy h1").css("animation-duration", "10s");
        }else if (windspeed <= 4.9){
            $(".nyy h1").css("animation-duration", "20s");
        }else if (windspeed <= 5.9){
            $(".nyy h1").css("animation-duration", "30s");
        }
    });
});

//Antananarivo
$(function() {

var url = 'https://api.openweathermap.org/data/2.5/weather?id=1070940&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e'

  $.get(url, function(data) {

var windspeed = data.wind.speed;
    console.log(windspeed);
        if (windspeed <= 1.9){
            $(".Antananarivo h1").css("animation-duration", "1s");
        } else if (windspeed <= 2.9){
            $(".Antananarivo h1").css("animation-duration", "5s");
        } else if (windspeed <= 3.9){
            $(".Antananarivo h1").css("animation-duration", "10s");
        }else if (windspeed <= 4.9){
            $(".Antananarivo h1").css("animation-duration", "20s");
        }else if (windspeed <= 5.9){
            $(".Antananarivo h1").css("animation-duration", "30s");
        }
    });
});