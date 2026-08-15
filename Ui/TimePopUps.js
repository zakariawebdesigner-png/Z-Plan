import {
  RoutineTime,
  RoutineTime2,
  StartLineSelectDiv,
  DeadLineSelectDiv
} from './RoutineElements.js';

function ToggleStart_End_TimePop(){
  RoutineTime.addEventListener("click",(event)=>{
    StartLineSelectDiv.classList.toggle("ToggleStartLineSelect");
  });

  RoutineTime2.addEventListener("click",(event)=>{
    DeadLineSelectDiv.classList.toggle("ToggleDeadLineSelect");
  });
}

export{ToggleStart_End_TimePop};