console.log("connected");

// to console log today's date
var today = new Date()
console.log(today)


// this will return the current hour in military time (0-23)
var today = new Date()
console.log(today.getHours())


// this will return the current hour in non-military time (am/pm)
// var today = new Date()
// console.log(today.getHours())
	// --> figure this out for this weeks project

// this will returns the current minute (0-59)
var today = new Date()
console.log(today.getHours())

// timeout function used so a function happens/is used at a specified time
// the 3000 is in millisecons so that equals 3 seconds
setTimeout(function() {alert("hello"); }, 3000);