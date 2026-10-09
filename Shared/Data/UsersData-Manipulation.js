

import { DefaultStatistics } from "./User-Statistics-file.js";
 export const TemplateStatistics={...DefaultStatistics};
 
function Register_UserData(){

   localStorage.setItem("TemplateStatistics",JSON.stringify(TemplateStatistics));
     
}

function Return_UserData(){
  
     for(const parameter  in DefaultStatistics){

                 if(DefaultStatistics[parameter]!==0 && parameter.toString()!=="lastVisit" && parameter!=="CurrentStreek"){

                    TemplateStatistics[parameter]+=DefaultStatistics[parameter];
                   
                    for(const para in DefaultStatistics){

                     if(para==parameter){
                                DefaultStatistics[para]=0;
                     }
                             
                    }
                 
                       }
                  

     }

}


function Get_UserData(){



            let Temp_DefaultStatistics= JSON.parse(localStorage.getItem("TemplateStatistics"))??{...DefaultStatistics};;
            
            if(Temp_DefaultStatistics==null)return;
            
            TemplateStatistics.TaskesCreated=Temp_DefaultStatistics.TaskesCreated;
         
               TemplateStatistics.NotesCreated=Temp_DefaultStatistics.NotesCreated;
                     TemplateStatistics.CurrentStreek=Temp_DefaultStatistics.CurrentStreek;
                 TemplateStatistics.CompletionRate=Temp_DefaultStatistics.CompletionRate;
                    TemplateStatistics.lastVisit =Temp_DefaultStatistics.lastVisit;
                    TemplateStatistics.DoneTasks =Temp_DefaultStatistics.DoneTasks;
                        TemplateStatistics.TottalTasks = Temp_DefaultStatistics.TottalTasks;
}




export{Register_UserData,Get_UserData,Return_UserData}