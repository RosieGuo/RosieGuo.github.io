setInterval(displayclock, 500);

		function displayclock () {
			var time = new Date();
			var hrs = time.getHours();
			var min = time.getMinutes();
			var sec = time.getSeconds();
			var en = 'AM';
			
			if (hrs > 12) {
				en = 'PM'
			}

			if (hrs > 12) {
				hrs = hrs - 12;
			}
			if (hrs == 0) {
				hrs = 12;
			}
			if (hrs < 10){
				hrs = '0' + hrs;
			}

			if (min < 10) {
				min = '0' + min;
			}
			if (sec < 10) {
				sec ='0' + sec;
			}
			
			

			
			document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec + ' ' + en;
			}

var word = document.write("Have a good day!")

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
