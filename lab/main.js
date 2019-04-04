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
	var x = "It is "+"not"+" "+11+" "+"yet."
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



