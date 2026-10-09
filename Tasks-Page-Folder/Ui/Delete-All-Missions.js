
import { alert_sound,missions_container_2,completed_missions_list,overlay,alert_message } from "../Task-Elements.js";



function DeleteAllTasks(){
    
     delete_all_isPressed=!delete_all_isPressed;
                 if(missions_container_2.children.length>0 || completed_missions_list.children.length>0  ){
                            overlay.classList.toggle("active");
    
                     alert_message.style.display="block";
                     alert_message.style.pointerEvents="auto";
                     alert_sound.currentTime=0;
                      alert_sound.play();
                       
                   }
    
                   else{
                    alert_message.style.display="none";
                      alert_message.style.pointerEvents="none";
                   
                          alert_sound.pause();
    
                   }
                  
                    
                       
    
}

export{DeleteAllTasks}