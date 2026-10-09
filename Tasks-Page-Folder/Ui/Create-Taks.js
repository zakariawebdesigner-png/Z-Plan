 


import {  missions_container_2 } from "../Task-Elements.js";
import { CreateMissionObject } from "../Data/TaskObject.js";
import { IncrementTodayActivity } from "../../Shared/Data/User-Statistics-file.js";
function Createmission(savedMissions){

     let MissionObject;
     if(savedMissions){
          MissionObject = savedMissions;
     }

     else {
    MissionObject = CreateMissionObject();
  }

       if(!MissionObject)return;

    

    const mission= document.createElement("div");
    
   const Type_div=document.createElement("div");
    
    Type_div.className="Type-div";
   

    

  const mission_components_holder1= document.createElement("div");

 
    const Type_Name_date_holder= document.createElement("div");
    
        mission_components_holder1.appendChild(Type_Name_date_holder);


    Type_Name_date_holder.className="Type-Name-date-holder";
   Type_Name_date_holder.classList.add("Type-Name-date-holder");

   mission_components_holder1.classList.add("mission-components-holder1");



       Type_Name_date_holder.appendChild(Type_div);
       
   mission.appendChild(mission_components_holder1);

  mission.className="mission";
   mission.classList.add("mission");
   
   

const mission_name= document.createElement("p");
   mission_name.classList.add("mission-name");
   mission_name.className="mission-name";
   Type_Name_date_holder.appendChild(mission_name);



 const mission_components_holder2= document.createElement("div");
  mission_components_holder2.className="mission-components-holder2";
   mission.appendChild(mission_components_holder2);

    const modifyDiv= document.createElement("div");

    modifyDiv.className="modifyTask"; 

    const modify_i=document.createElement("i");

     modify_i.classList.add("fa-solid", "fa-pen");

      modifyDiv.appendChild(modify_i);

      const modifyDiv_text= document.createElement("p");
 
modifyDiv_text.textContent="Modify";
     modifyDiv.appendChild(modifyDiv_text);



  mission_components_holder2.appendChild(modifyDiv);

       
const delete_button= document.createElement("div");

           const delete_button_i= document.createElement("i");

      delete_button_i.classList.add("fa-solid" ,"fa-trash-can");
      delete_button_i.id="DeleteMissioniTag";
      delete_button.classList.add("delete-button");
      delete_button.appendChild(delete_button_i);

      const dleteTaskText= document.createElement("p");
 
dleteTaskText.textContent="Delete";
     delete_button.appendChild(dleteTaskText);
       mission_components_holder2.appendChild(delete_button);

    const PausedTask= document.createElement("div");

       PausedTask.className="PausedTask"; 

     mission_components_holder2.appendChild(PausedTask);

     
     const PausedTask_i = document.createElement("i");
    
     PausedTask_i.classList.add("fa-solid" , "fa-pause");
            PausedTask.appendChild(PausedTask_i);

        const PausedTaskText= document.createElement("p");
 
          PausedTaskText.textContent="Pause";
          PausedTask.appendChild(PausedTaskText);
    
       missions_container_2.appendChild(mission);


    const mission_date= document.createElement("mission-date");
const dateTime = MissionObject.date || "";

const [date="", time=""] = dateTime.split("T");

         if(MissionObject.priority == "High"){
          
    mission_name.style.color='white';
        mission_date.style.color='white';
           Type_div.textContent="High";
     Type_div.classList.add("hightstyle");
      
} 



       else if(MissionObject.priority=="Medium"){

           
                 mission_name.style.color='white';
        mission_date.style.color='white';
        Type_div.textContent="Medium";
        Type_div.classList.add("mediumstyle");
        
        }

else if(MissionObject.priority=="Low"){

           
            mission_name.style.color='white';
        mission_date.style.color='white';
         Type_div.textContent="Low";
         Type_div.classList.add("lowstyle");
        }



       

mission.dataset.priority =MissionObject.priority;


  mission_name.textContent=MissionObject.name;

  mission_date.textContent=MissionObject.date;
mission_date.classList.add("mission-date");
      const dateP_time_div= document.createElement("div");
    dateP_time_div.className="dateP-time-div";
       

      const dateP= document.createElement("p");
        const timeP= document.createElement("p");

  dateP.textContent = "📅"+" "+date;
    timeP.textContent = "🕒"+" "+time;

dateP.className="dateP"; 
timeP.className="timeP"; 

    dateP_time_div.appendChild(dateP);
      dateP_time_div.appendChild(timeP);


      mission_components_holder1.appendChild(dateP_time_div);
dateP_time_div.className="dateP-time-div";

     
        const threeDotsOf_mission= document.createElement("i");
   threeDotsOf_mission.classList.add("fa-solid", "fa-ellipsis-vertical");
  
   threeDotsOf_mission.classList.add("threeDotsOf-mission");
   threeDotsOf_mission.id="threeDotsOf_mission";
     mission_components_holder1.appendChild(threeDotsOf_mission);

mission.dataset.id = MissionObject.id;

threeDotsOf_mission.addEventListener("click",(e)=>{
e.stopPropagation();
});




return {mission,MissionObject};

  }

export{Createmission}



 