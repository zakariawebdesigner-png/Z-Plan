
import { num4,num3,num2,CurrentStreekNum,numTasksDone_InChart,numNotesAdded_InChart } from "./Profile-Elements.js";
import { CompletionRate } from "./CompletionRate-Calculation.js";
import { CreateActivity } from "../Shared/Ui/CreateThe-Activity.js";
import { TemplateStatistics } from "../Shared/Data/UsersData-Manipulation.js";
import { Get_UserData } from "../Shared/Data/UsersData-Manipulation.js";
     window.addEventListener("load",()=>{
             Get_UserData();
            
                num4.textContent=TemplateStatistics.DoneTasks;

                  num3.textContent=TemplateStatistics.NotesCreated;

                  CurrentStreekNum.textContent=TemplateStatistics.CurrentStreek;

                  console.log(TemplateStatistics);

numTasksDone_InChart.textContent=TemplateStatistics.DoneTasks;

numNotesAdded_InChart.textContent=TemplateStatistics.NotesCreated;

                 num2.textContent= CompletionRate()+"%";

            let ActivitiesArray_FromStorage=JSON.parse(localStorage.getItem("ActivitiesArray"));
            if(ActivitiesArray_FromStorage==undefined)return;
                    let NumOfObjects= ActivitiesArray_FromStorage.length;

                  ActivitiesArray_FromStorage.forEach(Activity=>{

                                 CreateActivity(Activity,NumOfObjects);



                  });


     });




   


