function eventGenerator() {
    const uniqueTimes = ["11am","12pm","1pm","2pm",
    "3pm","4pm","5pm","6pm","7pm"];

    const uniqueActivities = ["Elite Hoops Session",
    "Advanced Volleyball Drills","Extreme Core Workout",
    "Courageous HIIT", "Zen Yoga Sculpt",
    "Adventurous 30-Minute Challenge"];

    var time = uniqueTimes[Math.floor(Math.random() * (uniqueTimes.length))];
    var activity = uniqueActivities[Math.floor(Math.random() * (uniqueActivities.length))];

    return "<br>" + activity + "<br>" +time; 
}

var dayEvent = new Array();

function create_Calender () {
        
    for(var i = 1; i <= 31; i++){
        dayEvent[i] = eventGenerator();
    }

}   

create_Calender();
console.log(dayEvent[1]);
console.log(dayEvent[31]);
