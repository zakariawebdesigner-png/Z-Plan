  

import {
    Hours,
    Minutes,
    EndHours,
    EndMinutes,
    RoutinesName_input,
    RoutinesCategory_input,
      Duration_hours,
    Duration_minutes,
    RoutineColumnMonday,
    RoutineOptions,
    studySticker
 
} from "../Ui/RoutineElements.js";


import{RoutineObdjectArray} from '../Main.js';

import { ThePlaceToAppend } from "../Ui/Days-of-routine.js";
import{ChoosingColor} from '../Ui/RoutineColor.js'
import { CategorySticker,CheckingString,Categorychoosed} from "../Ui/Category.js";

import { AlignRoutine } from "./AligneRoutine.js";

import{Duration,DurationHours,DurationMinutes}from '../Ui/DurationCalculation.js';

import { BooleanModify } from "../Main.js";
export let RoutineObdject=null;
 

     function CreateRoutineFunc(RoutineObdject,RoutineBackgroundColor){

            RoutineObdject={
                    
                 RCategory:RoutinesCategory_input.value,
                 Rname: RoutinesName_input.value,
                 RstartingTimeHours:Hours.value,
                 RstartingTimeMin:Minutes.value,
                 REndingTimeHours:EndHours.value,
                 REndingTimeMin:EndMinutes.value,
                 RRepeatedDays:ThePlaceToAppend.map(arr=>arr.id),
                 RbackgroundColor:RoutineBackgroundColor,
                 RStycker:CategorySticker,
                 Rid:Date.now().toString(),
                   choosed: Categorychoosed(CheckingString)                                                    
            
          };

  if(RoutineObdject.Rname=="" || RoutineObdject.choosed=="false"){
    
      
    window.alert("Enter the  rest of the informations to create the routine");
return;
  }
  

             
 const  RoutineDiv=document.createElement("div");

   RoutineDiv.className="RoutineDiv";
      RoutineDiv.id=RoutineObdject.Rid;
    
       const  RName_and_CategoryDiv=document.createElement("div");

      RName_and_CategoryDiv.className="RName-and-CategoryDiv";

          const  RName_and_CategoryDiv_and_Dots=document.createElement("div");

                RName_and_CategoryDiv_and_Dots.className="RNam-and-CategoryDiv-and-Dots";

            const  RCategoryEmogy=document.createElement("div");

                 RCategoryEmogy.className="RCategoryEmogy";
                                 
                            const Stickerid=RoutineObdject.RStycker;
                            const Sticker=document.getElementById(Stickerid);
                            RCategoryEmogy.appendChild(Sticker.cloneNode(true));
            RName_and_CategoryDiv.appendChild(RCategoryEmogy);

 
             
       

                               
              

 const  RoutineName=document.createElement("p");
        
   RoutineName.className="RoutineName";
   RoutineName.textContent=RoutineObdject.Rname;
RName_and_CategoryDiv.appendChild(RoutineName);

      const ThreeDotsOfRoutine=document.createElement("i");
               ThreeDotsOfRoutine.className="ThreeDotsOfRoutine";
               ThreeDotsOfRoutine.classList.add("fa-solid", "fa-ellipsis-vertical");

             
                        
                    RName_and_CategoryDiv_and_Dots.appendChild(RName_and_CategoryDiv);
                      RName_and_CategoryDiv_and_Dots.appendChild(ThreeDotsOfRoutine);

                 RoutineDiv.appendChild(RName_and_CategoryDiv_and_Dots );

       const  StartingDiv=document.createElement("div");

       StartingDiv.className="StartingDiv";

    const StartingTimeHourDiv=document.createElement("div");

       StartingTimeHourDiv.className="StartingTimeHourDiv";
      

   


         const StartingTimeHourP=document.createElement("p");
           
         StartingTimeHourP.className="StartingTimeHourP";
         

       StartingTimeHourP.textContent =RoutineObdject.RstartingTimeHours;
      

           StartingTimeHourDiv.appendChild(StartingTimeHourP);

       const StartingTimeMinDiv=document.createElement("div");

          StartingTimeMinDiv.className="StartingTimeMinDiv";

          const StartingTimeMinP=document.createElement("p");
          
            StartingTimeMinP.className="StartingTimeMinP";
           

       StartingTimeMinP.textContent =RoutineObdject.RstartingTimeMin;

            StartingTimeMinDiv.appendChild(StartingTimeMinP);

             StartingDiv.appendChild(StartingTimeHourDiv);

               const   SeparationTimeDots1= document.createElement("span");
             SeparationTimeDots1.textContent=":";
              SeparationTimeDots1.className="SeparationTimeDots1";
               
              

            StartingDiv.appendChild(SeparationTimeDots1);

            StartingDiv.appendChild(StartingTimeMinDiv);

            

           

            
            


         const  EndingDiv=document.createElement("div");
              EndingDiv.className="EndingDiv";
     

      
         const EndingTimeHourP=document.createElement("p");
         
         EndingTimeHourP.className="EndingTimeHourP";

         const EndingTimeMinP=document.createElement("p");

         EndingTimeMinP.className="EndingTimeMinP";
         
       EndingTimeHourP.textContent =RoutineObdject.REndingTimeHours;
      

           EndingDiv.appendChild(EndingTimeHourP);

             const   SeparationTimeDots2= document.createElement("span");
             SeparationTimeDots2.textContent=":";
              SeparationTimeDots2.className="SeparationTimeDots2";
               
              

            EndingDiv.appendChild(SeparationTimeDots2);

            
         
             

       EndingTimeMinP.textContent =RoutineObdject.REndingTimeMin;

            EndingDiv.appendChild(EndingTimeMinP);
        

            
        

            const TimeDiv=document.createElement("div");

             TimeDiv.appendChild(StartingDiv);




               const TimeLine= document.createElement("div");
               TimeLine.className="TimeLine";

                  TimeDiv.appendChild(TimeLine);


            

                  TimeDiv.appendChild(EndingDiv);

                 


                  
                 TimeDiv.className="TimeDiv";
            RoutineDiv.appendChild(TimeDiv);






          Duration(Number(RoutineObdject.RstartingTimeHours),Number(RoutineObdject.RstartingTimeMin),Number(RoutineObdject.REndingTimeHours),Number(RoutineObdject.REndingTimeMin));

      Duration_hours.textContent=DurationHours+"h";
 Duration_minutes.textContent=DurationMinutes+"min";


       RoutineObdjectArray.push(RoutineObdject);

    AlignRoutine(RoutineDiv,RoutineObdject,DurationHours,DurationMinutes,Number(RoutineObdject.RstartingTimeHours),Number(RoutineObdject.RstartingTimeMin),BooleanModify);


           

     if(RoutineObdject.RRepeatedDays.length===0)return null;
     
      
   
    
              
     return RoutineDiv;

  

     }



     export{CreateRoutineFunc};











