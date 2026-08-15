import {
  colorBorder,
  AddRoutine_Voice,
  RoutineForm,
  RoutinesCategory_input,
  RoutinesName_input,
  EndMinutes,
  EndHours,
  Hours,
  Minutes,
  Duration_hours,
  Duration_minutes
} from './RoutineElements.js';

let ThePlaceToAppend=[];

import { DaysArray } from './Days-of-routine.js';
import { default as OverlayToggle } from './Overlay.js';

let CheckingString=null;

function PopUpApper(){
  OverlayToggle();
  AddRoutine_Voice.play();
  RoutineForm.classList.add("showRoutineForm");
}

function PopUpDelete(){
  OverlayToggle();
  RoutineForm.classList.remove("showRoutineForm");

  CheckingString="false";
  RoutinesCategory_input.value="";
  RoutinesName_input.value="";

  EndMinutes.value="";
  EndHours.value="";
  Hours.value="";
  Minutes.value="";

  Duration_hours.textContent="";
  Duration_minutes.textContent="";

  colorBorder.forEach(border=>{
    border.style.border="2px solid transparent";
  });

  DaysArray.forEach(day=>{
    day.classList.remove("Checked");
  });

  ThePlaceToAppend.length=0;
}

export { PopUpDelete };
export { PopUpApper };
