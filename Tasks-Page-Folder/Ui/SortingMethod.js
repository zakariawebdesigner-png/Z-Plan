



import { Actual_MissionsArray } from "../Data/Task-Manipulation.js";
import { missions_container_2 } from "../Task-Elements.js";
import { Createmission } from "./Create-Taks.js";

function SortAs(SortMethode){
       
const Alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","s","y","z"];

if(!SortMethode)return;

  
 if(SortMethode=="First-letter"){

    missions_container_2.innerHTML="";

      Alphabet.forEach(Letter=>{
                
                  Actual_MissionsArray.forEach(mission=>{

                      let missionName=mission.title;
                                                 

                 if(missionName.toLowerCase().startsWith(Letter)){

                        let ReturnedFromFunc=Createmission(mission);
                             console.log(ReturnedFromFunc);
                            let MissionReturned=ReturnedFromFunc.mission;

                            missions_container_2.appendChild(MissionReturned);
                 }


    });



      });
   

 }


/*
else if(SortMethode=="By-Priority"){
    




 }




else if(SortMethode=="Default"){
    




 }

else if(SortMethode=="Dead-Line"){
    




 }


*/



}


export{SortAs}