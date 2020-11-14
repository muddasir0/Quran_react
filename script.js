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
import { useState } from 'react'

function SimpleToggle() {
  const [isOn, setIsOn] = useState(false)
  return (
    <span
      role="checkbox"
      aria-checked={isOn}
      tabIndex="0"
      onClick={() => setIsOn(!isOn)}
      class={`${isOn ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
    >
      <span
        aria-hidden="true"
        className={`${isOn ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
      ></span>
    </span>
  )
}
//initial call
countdown();
setInterval(countdown,1000);