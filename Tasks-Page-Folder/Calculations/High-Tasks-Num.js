    
import { missions_container_2 } from "../Task-Elements.js";

      function HighCalculator(){


 const High=document.getElementById("High");
     
    let Missions=missions_container_2.querySelectorAll(".mission");
       let HighCount=0;
          Missions.forEach(Mission=>{
               if(Mission.dataset.priority=="High"){
                  HighCount++;
               }
          });
          

   High.textContent= HighCount;
      }



      export{HighCalculator}