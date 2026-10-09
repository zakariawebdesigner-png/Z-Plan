

import { pop_up_sound,task_info,task_name,date_inpute,overlay } from "../Task-Elements.js";
function  AppearMission_Form(){

        overlay.classList.add("active");
        task_info.classList.remove("hide");
  
       task_info.classList.add("show");
      pop_up_sound.play();
      task_info.style.pointerEvents="auto";

      task_name.value="";
      date_inpute.value="";


    }

export{AppearMission_Form}


