




function PriorityColor(MissionObject,Type_div,mission_name,mission_date){

    if(MissionObject.priority == "High"){

         Type_div.classList.remove(
    "mediumstyle",
    "lowstyle"
);


          
    mission_name.style.color='white';
        mission_date.style.color='white';
           Type_div.textContent="High";
     Type_div.classList.add("hightstyle");
      
} 



       else if(MissionObject.priority=="Medium"){

        Type_div.classList.remove(
    "hightstyle",
    "lowstyle"
);

           
                 mission_name.style.color='white';
        mission_date.style.color='white';
        Type_div.textContent="Medium";
        Type_div.classList.add("mediumstyle");
        
        }

else if(MissionObject.priority=="Low"){

    Type_div.classList.remove(
    "hightstyle",
    "mediumstyle",
);

           
            mission_name.style.color='white';
        mission_date.style.color='white';
         Type_div.textContent="Low";
         Type_div.classList.add("lowstyle");
        }


}

export{PriorityColor}