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
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p1').append('windspeed: ' + windspeed + '</br> ');
        $('.p1').append('winddeg: ' + winddeg + '</br> ');
        $('.p1').append('temp: ' + temp + '</br> ');
        $('.p1').append('tempmin: ' + tempmin + '</br> ');
        $('.p1').append('tempmax: ' + tempmax + '</br> ');
        $('.p1').append('pressure: ' + pressure + '</br> ');
        $('.p1').append('humidity: ' + humidity + '</br> ');
        $('.p1').append('weathertext: ' + weathertext + '</br> ');
        $('.p1').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.p1').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }     
});

    //Los Angeles
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5368361&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
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

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p2').append('windspeed: ' + windspeed + '</br> ');
        $('.p2').append('winddeg: ' + winddeg + '</br> ');
        $('.p2').append('temp: ' + temp + '</br> ');
        $('.p2').append('tempmin: ' + tempmin + '</br> ');
        $('.p2').append('tempmax: ' + tempmax + '</br> ');
        $('.p2').append('pressure: ' + pressure + '</br> ');
        $('.p2').append('humidity: ' + humidity + '</br> ');
        $('.p2').append('weathertext: ' + weathertext + '</br> ');
        $('.p2').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.p2').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});

    //Guangzhou
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

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p3').append('windspeed: ' + windspeed + '</br> ');
        $('.p3').append('winddeg: ' + winddeg + '</br> ');
        $('.p3').append('temp: ' + temp + '</br> ');
        $('.p3').append('tempmin: ' + tempmin + '</br> ');
        $('.p3').append('tempmax: ' + tempmax + '</br> ');
        $('.p3').append('pressure: ' + pressure + '</br> ');
        $('.p3').append('humidity: ' + humidity + '</br> ');
        $('.p3').append('weathertext: ' + weathertext + '</br> ');
        $('.p3').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.p3').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});


    //Beijing
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1816670&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
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

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p4').append('windspeed: ' + windspeed + '</br> ');
        $('.p4').append('winddeg: ' + winddeg + '</br> ');
        $('.p4').append('temp: ' + temp + '</br> ');
        $('.p4').append('tempmin: ' + tempmin + '</br> ');
        $('.p4').append('tempmax: ' + tempmax + '</br> ');
        $('.p4').append('pressure: ' + pressure + '</br> ');
        $('.p4').append('humidity: ' + humidity + '</br> ');
        $('.p4').append('weathertext: ' + weathertext + '</br> ');
        $('.p4').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.p4').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});


    //Athens
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=264371&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
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

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p5').append('windspeed: ' + windspeed + '</br> ');
        $('.p5').append('winddeg: ' + winddeg + '</br> ');
        $('.p5').append('temp: ' + temp + '</br> ');
        $('.p5').append('tempmin: ' + tempmin + '</br> ');
        $('.p5').append('tempmax: ' + tempmax + '</br> ');
        $('.p5').append('pressure: ' + pressure + '</br> ');
        $('.p5').append('humidity: ' + humidity + '</br> ');
        $('.p5').append('weathertext: ' + weathertext + '</br> ');
        $('.p5').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.p5').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});

    //Tokyo
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
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

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p6').append('windspeed: ' + windspeed + '</br> ');
        $('.p6').append('winddeg: ' + winddeg + '</br> ');
        $('.p6').append('temp: ' + temp + '</br> ');
        $('.p6').append('tempmin: ' + tempmin + '</br> ');
        $('.p6').append('tempmax: ' + tempmax + '</br> ');
        $('.p6').append('pressure: ' + pressure + '</br> ');
        $('.p6').append('humidity: ' + humidity + '</br> ');
        $('.p6').append('weathertext: ' + weathertext + '</br> ');
        $('.p6').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.p6').append('cloudiness: ' + cloudiness + '</br> ');
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

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p7').append('windspeed: ' + windspeed + '</br> ');
        $('.p7').append('winddeg: ' + winddeg + '</br> ');
        $('.p7').append('temp: ' + temp + '</br> ');
        $('.p7').append('tempmin: ' + tempmin + '</br> ');
        $('.p7').append('tempmax: ' + tempmax + '</br> ');
        $('.p7').append('pressure: ' + pressure + '</br> ');
        $('.p7').append('humidity: ' + humidity + '</br> ');
        $('.p7').append('weathertext: ' + weathertext + '</br> ');
        $('.p7').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.p7').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});

    //Paris
    $(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2988507&units=metric&APPID=5b80cfe53a315fdfa9f5d600e141354e', //CHANGE THE URL TO YOUR API QUERY
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

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
          
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p8').append('windspeed: ' + windspeed + '</br> ');
        $('.p8').append('winddeg: ' + winddeg + '</br> ');
        $('.p8').append('temp: ' + temp + '</br> ');
        $('.p8').append('tempmin: ' + tempmin + '</br> ');
        $('.p8').append('tempmax: ' + tempmax + '</br> ');
        $('.p8').append('pressure: ' + pressure + '</br> ');
        $('.p8').append('humidity: ' + humidity + '</br> ');
        $('.p8').append('weathertext: ' + weathertext + '</br> ');
        $('.p8').append('weatherdescription: ' + weatherdescription + '</br> ');
        $('.p8').append('cloudiness: ' + cloudiness + '</br> ');
        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});