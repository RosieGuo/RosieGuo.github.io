alert ("Welcome! Please view console on your browser.")

var a = "Peiru Guo";
console.log(a);

var b = 10;
console.log(b);

var c = "2";
console.log(c);

var d = 18;
console.log(b<d); 

console.log(a+" "+"is"+" "+c);

console.log(9+1); 
console.log(8+2); 
console.log(11-1); 
console.log(12-2); 
console.log(5+5); 

var countries = ["England", "Japan", "Greece"];
console.log(countries[0]);
console.log(countries.length);

var time = new Date();
console.log("The current time is"+" "+time);

var currentHour = new Date().getHours();
if(currentHour==11){
	var x = "It is"+" "+11+" "+"now."
} else{
	var x = "It is"+"not"+" "+11+" "+"yet."
}
console.log(x);


var n = a.length-1;
console.log(n);
if(n<=9){
	var g = "My name is relatively short."
} else if(n>14){
	var g = "My name is relatively long."
} else{
	var g ="My name is neither short nor long."
}
console.log(g);


var b = "43°F";
console.log(b);


var b = "55°F";
console.log(b);

var c = new toCelsius();
console.log("The temperature in New York is " + toCelsius(43) + " Celsius"+ " "+"at"+ " "+time);
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 

var d = new toCelsius();
console.log("The temperature in China is " + toCelsius(55) + " Celsius"+ " "+"at"+ " "+time);
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 


for (var i=30;i>-1;i--) {
	var word = document.write('<div id="text">'+'Countdown ' +i+ ' days to holiday<br>')
}
	{
}

$('.mybox').append('<p class="newstyle">Hello!</p>');


function bgChange(){
  var c1 = Math.floor(Math.random() * 256);
  var c2 = Math.floor(Math.random() * 256);
  var c3 = Math.floor(Math.random() * 256);
  var color = "rgb(" + c1 + "," + c2 + "," + c3 + ")"
  document.body.style.color = color;
}
  console.log(bgChange);
  bgChange()

