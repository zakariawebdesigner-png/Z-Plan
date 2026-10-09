   
     




   
import { EndHours, EndMinutes, Hours, Minutes } from './RoutineElements.js';
    function HoursSide2Function(event){
                  
              let ChoosedEndHour=null;

             ChoosedEndHour=event.target.closest(".EndingHourDiv");

           if(!ChoosedEndHour)return;

            
               EndHours.value=ChoosedEndHour.textContent;
   
    }
   






      function MinutesSide2Function(event){
                        let ChoosedEndingMinute=null;

               ChoosedEndingMinute=event.target.closest(".EndingMinuteDiv");

                if(!ChoosedEndingMinute)return;

            
               EndMinutes.value=ChoosedEndingMinute.textContent;
     
      }
  






     function HoursSideFunction(event){


             let ChoosedStartHour=null;

        ChoosedStartHour=event.target.closest(".StartingHourDiv");
   
         if(!ChoosedStartHour)return;

            
               Hours.value=ChoosedStartHour.textContent;


     }
   
   






   function MinutesSideFunction(event){
            let ChoosedStartMinute=null;

   ChoosedStartMinute=event.target.closest(".StartingMinuteDiv");

   if(!ChoosedStartMinute)return;

            
               Minutes.value=ChoosedStartMinute.textContent;
   

    }
   





export{HoursSide2Function,MinutesSideFunction,HoursSideFunction,MinutesSide2Function};