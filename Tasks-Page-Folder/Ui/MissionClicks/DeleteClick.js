   
import { completed_missions_list } from "../../Task-Elements.js";
import { RemoveMission } from "../../Data/Task-Manipulation.js";
import { DoneTaskNum } from "../../Task-Elements.js";

   function DeleteClick(clickedMission){

                     let DoneCount=completed_missions_list.children.length;
     
     
                      DoneTaskNum.textContent=DoneCount;
                                              
                   const Mission_Id=Number(clickedMission.dataset.id);


                         RemoveMission(Mission_Id);   

                                  
                      clickedMission.remove();


            }




   export{DeleteClick}