function getDate(){
	var today = new Date();
	var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
	var weekday = new Array(7);
	weekday[0] =  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var day = today.getDay();

	document.getElementById('date').innerHTML = 
	weekday[day] + "\n" + date;
}