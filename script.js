const newYear='1 jan 2021';
function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate= new Date();
    const totalSeconds= (newYearDate-currentDate)/1000;

    const days= Math.floor(totalSeconds/3600/24);
    const hours= Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60) %60;
    const seconds= Math.floor(totalSeconds)%60;

    daysEI.innerHTML=days;
    hoursEI.innerHTML=formatTime(hours);
    minsEI.innerHTML=formatTime(mins);
    secondsEI.innerHTML=formatTime(seconds);
    
}

function formatTime(time){
    return time<10?('0${time}'):time;
}

//initial call
countdown();
setInterval(countdown,1000);