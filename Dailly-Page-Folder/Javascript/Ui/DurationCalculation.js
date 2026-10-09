 


import{Hours,Minutes,EndHours,EndMinutes} from './RoutineElements.js';



  export let DurationHours=0;

       export let DurationMinutes=0;

    function Duration(StartingHours,StartingMinutes,EndingHours,EndingMinutes){
        let CalculatedStartMinutes=(StartingHours*60)+StartingMinutes;

       let CalculatedEndMinutes=(EndingHours*60)+EndingMinutes;

         let remainingTime=CalculatedEndMinutes-CalculatedStartMinutes;
                
            


            DurationHours=Math.trunc(remainingTime/60);

            DurationMinutes= remainingTime % 60;

             
}


export{Duration};