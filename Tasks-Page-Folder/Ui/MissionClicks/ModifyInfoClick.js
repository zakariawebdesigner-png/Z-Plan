

import { task_info,pop_up_sound,priority,task_name,overlay } from "../../Task-Elements.js";
function ModifyInfo(ClickedMission){
    
     overlay.classList.toggle("active");
                     task_info.classList.remove("hide");
                   task_info.classList.add("show");
        
                   task_info.style.pointerEvents = "auto";
                          pop_up_sound.play();

                  
                     priority.value=ClickedMission.dataset.priority;


                    task_name.value=ClickedMission.querySelector(".mission-name").textContent;
                  
               
            
}

export{ModifyInfo}