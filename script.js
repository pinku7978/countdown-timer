
// here i put the date
const newYears = '1 jan 2030';
// here i selected the four p tags 
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

// here i make the count down project 
function countdown(){
    // here  i converted the input date to a compareble date
    const newYearsDate = new Date(newYears);
    // here i created the current date 
    const currentDate = new Date();

    // here i calculated the seconds 
    const seconds = (newYearsDate - currentDate) / 1000;
    // here i calculated the days 
    const days = Math.floor(seconds / 3600 / 24);

    // here the hours 
    const hours = Math.floor(seconds / 3600) % 24;
    // here the minutes 
    const minutes = Math.floor(seconds / 60) % 60;
    // here the seconds 
    const second = Math.floor(seconds) % 60;

    // here i set those values to the html 
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(minutes);
    minutesEl.innerHTML = formatTime(minutes);
    secondEl.innerHTML = formatTime(second);
}
// what this function does is that when the time is less than 10 it's not going to show 9 it shows 09 08 so on
function formatTime(time){
    return time<10?`0${time}`:time;
}

setInterval(countdown, 1000);
