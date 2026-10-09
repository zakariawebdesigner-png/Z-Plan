import { HighCalculator } from "../Calculations/High-Tasks-Num.js";

import { MissionCheckedStyle } from "./Mission-Checked-Style.js";

import { PendingCalc } from "../Calculations/Pending-Calc.js";
import { IncrementTodayActivity } from "../../Shared/Data/User-Statistics-file.js";
import { completedMissionsVisibleState } from "./Visisbility-State.js";
import { ActivitiesArray } from "../../Shared/Data/Register-User-Activities.js"; 
import { AiVoice } from "./Ai-Voice.js";
import { CreateActivityObject } from "../../Shared/Data/Register-User-Activities.js";
import {DoneTaskNum,done_task,completed_missions_list, missions_container_2} from "../Task-Elements.js";

import { ModifyInfo } from "./MissionClicks/ModifyInfoClick.js";
import { Actual_MissionsArray } from "../Data/Task-Manipulation.js";
import { DeleteClick } from "./MissionClicks/DeleteClick.js";
import { TemplateStatistics } from "../../Shared/Data/UsersData-Manipulation.js"; 
import { DataRegister } from "../Data/Task-Manipulation.js";
import { Return_UserData,Register_UserData } from "../../Shared/Data/UsersData-Manipulation.js";
   function HundelTheClick(event){
    let voice=null;

     const clickedMission = event.target.closest(".mission");

     if(!clickedMission)return;

      let clickedMissionObject=Actual_MissionsArray.find(obj=>obj.id==Number(clickedMission.dataset.id));
         
         
               if(!event.target.closest(".mission")) return;
                 
                                        
                         
                             
                        
                      
                  if(event.target.closest(".delete-button")){
                                if(clickedMissionObject.completed==true){
                              
                                      
                                 let theAction="Delete a completed task";

                                let obj=CreateActivityObject(theAction,clickedMissionObject);

                                          ActivitiesArray.push(obj);
                                           console.log(ActivitiesArray);
                                   localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));  
                                }
                                else{
                              

                                 let theAction="Delete a task";

                                 let obj= CreateActivityObject(theAction,clickedMissionObject);

                                         ActivitiesArray.push(obj);
  
                      localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));  
                                
                                }
                         
                 DeleteClick(clickedMission);

                    TemplateStatistics.TottalTasks-=1;
                    
                     Return_UserData();
                        Register_UserData();
            
                 completedMissionsVisibleState();
               
                            
                                            HighCalculator();

                                          

                                      return;
                                      }

                               
                          
                               
                        
                 
               
                
              

              else if(event.target.closest(".modifyTask")){
               
                           ModifyInfo(clickedMission);

                 
  
                      
                                               
                           return clickedMission;
                           

              }



            let obj=  CreateActivityObject("Complete a task",clickedMissionObject);
                                   
                   ActivitiesArray.push(obj);
  
                      localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));  
                      MissionCheckedStyle(clickedMission);
console.log(ActivitiesArray); 
                      Actual_MissionsArray.forEach(mission=>{

                        if(clickedMission.querySelector(".mission-name").textContent==mission.name){
                           
                                mission.completed=true;
                                
                        }

                      });

             

               done_task.currentTime="0";
               
                  done_task.play();
                   
   
                     clickedMission.classList.remove("high-priority-color");
                        clickedMission.classList.remove("medium-priority-color");
                            clickedMission.classList.remove("low-priority-color");
          
        clickedMission.classList.add("change-background");
           




         completed_missions_list.appendChild(clickedMission);
                   TemplateStatistics.DoneTasks+=1;
           Return_UserData();
           Register_UserData();

                      
                  PendingCalc();

     let DoneCount=completed_missions_list.children.length;
     
     
     DoneTaskNum.textContent=DoneCount;
       
           
   
    completedMissionsVisibleState();
    IncrementTodayActivity("tasks");
    if(missions_container_2.children.length==0){
    AiVoice(voice);
 

}

HighCalculator();

           DataRegister();

   }

   export{HundelTheClick}