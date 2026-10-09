


import { completed_missions_list } from "../Task-Elements.js"; 
import { no_completed_text,x_sign, } from "../Task-Elements.js";

 
function completedMissionsVisibleState(){

if(completed_missions_list.children.length==0){

                no_completed_text.style.display="block";
              x_sign.style.display="block";

     }

else if(completed_missions_list.children.length>0){

                no_completed_text.style.display="none";
              x_sign.style.display="none";

     }

}


export{completedMissionsVisibleState}