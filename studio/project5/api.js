//THESE ARE THE VARIABLES WE WILL USE
//THESE ARE THE VARIABLES WE WILL USE
var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
var winddeg; //Wind direction, degrees (meteorological)
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var tempmin;
var tempmax;
var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)
var weatherdescription; //Weather condition within the group
var cloudiness; //Cloudiness, %


$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;
            visibility = results.visibility;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p1').append('windspeed: ' + windspeed + '</br> ');
        $('.p1').append('humidity: ' + humidity + '</br> ');
        $('.p1').append('cloudiness: ' + cloudiness + '</br> ');
        $('.p1').append('visibility: ' + visibility + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }     
});

    //Antananarivo
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1070940&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;
            visibility = results.visibility;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p2').append('windspeed: ' + windspeed + '</br> ');
        $('.p2').append('humidity: ' + humidity + '</br> ');
        $('.p2').append('cloudiness: ' + cloudiness + '</br> ');
        $('.p2').append('visibility: ' + visibility + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});

    //Delhi
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1273294&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;
            visibility = results.visibility;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p4').append('windspeed: ' + windspeed + '</br> ');
        $('.p4').append('humidity: ' + humidity + '</br> ');
        $('.p4').append('cloudiness: ' + cloudiness + '</br> ');
        $('.p4').append('visibility: ' + visibility + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});


    //Athens
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1174872&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;
            visibility = results.visibility;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p5').append('windspeed: ' + windspeed + '</br> ');
        $('.p5').append('humidity: ' + humidity + '</br> ');
        $('.p5').append('cloudiness: ' + cloudiness + '</br> ');
        $('.p5').append('visibility: ' + visibility + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});

    //Tokyo
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1809858&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;
            visibility = results.visibility;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p6').append('windspeed: ' + windspeed + '</br> ');
        $('.p6').append('humidity: ' + humidity + '</br> ');
        $('.p6').append('cloudiness: ' + cloudiness + '</br> ');
        $('.p6').append('visibility: ' + visibility + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});

    //London
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;
            visibility = results.visibility;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p7').append('windspeed: ' + windspeed + '</br> ');
        $('.p7').append('humidity: ' + humidity + '</br> ');
        $('.p7').append('cloudiness: ' + cloudiness + '</br> ');
        $('.p7').append('visibility: ' + visibility + '</br> ');  
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});