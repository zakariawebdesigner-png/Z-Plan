
import {
  Cancel,
  Hours,
  Minutes,
  EndHours,
  EndMinutes,
  RoutinesName_input,
  RoutinesCategory_input,
  Duration_hours,
  Duration_minutes,
  colorBorder
} from "./RoutineElements.js";

import { DeleteCheckingString } from "./Category.js";
import { DaysArray, ThePlaceToAppend } from "./Days-of-routine.js";



   
 
function DeleteInputs(){

DeleteCheckingString();
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


export{DeleteInputs};


