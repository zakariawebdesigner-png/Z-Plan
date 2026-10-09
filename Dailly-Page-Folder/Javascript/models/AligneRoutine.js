import { RoutineObdjectArray } from "../Main.js";

    






export let ArrayOfModifiedClones=[];
    
function AlignRoutine(RoutineDiv,RoutineObdject,DurationHours,DurationMinutes,Hours,Minutes,Boolean){
  let RoutineHourTop = 0;
let RoutineMinuteTop = 0;

let  RoutineTop=0;
 let RoutineHeight= 0;
let CloneOfClone=null;
/** @type {HTMLDivElement} */
let RoutineClone=null;



     let TotalMinutes=DurationHours*60+DurationMinutes;
        
      RoutineHeight= TotalMinutes*((64/60));
     
     if(Hours!=1){
       
              RoutineHourTop=(Hours-1)*64;


     }

    if(Minutes!=1){
             
            RoutineMinuteTop=(64/60)*Minutes;
    }


    RoutineTop=RoutineMinuteTop+RoutineHourTop;
        

    RoutineDiv.style.top = `${RoutineTop}px`;
    RoutineDiv.style.height = `${RoutineHeight}px`;

    RoutineDiv.style.background= RoutineObdject.RbackgroundColor;


     if(Boolean==true){
           
      RoutineObdject.RRepeatedDays.forEach(id=>{
        
                   const idDay=document.getElementById(id);
                       ArrayOfModifiedClones.push(RoutineClone);
                      idDay.appendChild(RoutineDiv);
                  

        });
             ArrayOfModifiedClones.forEach(clone=>{
                  clone.remove();
           });
          
     }
     
    RoutineClone=RoutineDiv.cloneNode(true);
   



  RoutineObdject.RRepeatedDays.forEach(id=>{
        
                   const idDay=document.getElementById(id);
                       RoutineClone= RoutineDiv.cloneNode(true);
                       
                            
                        
                       
                        RoutineClone.style.background= RoutineObdject.RbackgroundColor;
                   idDay.appendChild(RoutineClone);

                  

        });

      



}


export{AlignRoutine};

