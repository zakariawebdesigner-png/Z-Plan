    
import { task_name,date_inpute,priority } from "../Task-Elements.js";

import { getName } from "../Ui/Get-Name.js";


function CreateMissionObject(){

const Name=getName(task_name.value);

if(!Name)return null;


  return{
      id: Date.now(),
      DateOfCreate:new Date(),
      name: getName(task_name.value),
      date: date_inpute.value,
      priority:priority.value,
      completed:false,
      paused:false
    };



}
   


    export{CreateMissionObject}
