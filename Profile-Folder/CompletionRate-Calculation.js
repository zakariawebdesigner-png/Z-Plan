 
import { TemplateStatistics } from "../Shared/Data/UsersData-Manipulation.js";

function CompletionRate(){

let DonetasksNumber=Number(TemplateStatistics.DoneTasks);

let TottalTasks=Number(TemplateStatistics.TottalTasks);

let TottalNotes=Number(TemplateStatistics.NotesCreated);

   console.log("Done:", DonetasksNumber);
    console.log("Tasks:", TottalTasks);
    console.log("Notes:", TottalNotes);

  

   

let denominator = DonetasksNumber+TottalTasks;
 if(denominator === 0){
        return 0;
    }
let TasksScore=DonetasksNumber/TottalTasks;

let NotesScore=Math.min(TottalNotes/7, 1);



let CompletionRate_Calculated=(((3*TasksScore)+NotesScore)/4)*100;

console.log(CompletionRate_Calculated);


return CompletionRate_Calculated.toFixed(2);

}

export{CompletionRate}