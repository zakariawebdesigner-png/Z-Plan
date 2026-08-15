import {
  RepeatContainer,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
  RoutineColumnMonday,
  RoutineColumnTuesday,
  RoutineColumnWednesday,
  RoutineColumnThursday,
  RoutineColumnFriday,
  RoutineColumnSaturday,
  RoutineColumnSunday
} from './RoutineElements.js';

//this file Selectes the days that  the routine must appear on and initialize them into one array and return it






let ClicksHandeler="false";




 export   let ThePlaceToAppend=[];
export let  DaysArray=[];


const DaysArray_To_reset_dataset = [Mon, Tue, Wed, Thu, Fri, Sat, Sun];

DaysArray_To_reset_dataset.forEach((day) => {
  day.dataset.clicks = "0";
});



         function DaysSelector(e){
                                

                  

             const ChoosedDay= e.target.closest("div");
                    if(ChoosedDay==RepeatContainer)return;
                    
            

              if(!ChoosedDay)return;

              if(ChoosedDay.classList.contains("Mon")){
                      
                    
                

                   
               ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                     ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnMonday);
                      
                      ChoosedDay.classList.remove("Checked");
                      DaysArray=DaysArray.filter(place=>place!==ChoosedDay);
                       
                      
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                          ThePlaceToAppend.push(RoutineColumnMonday);

                           DaysArray.push(ChoosedDay);
                  }
                  
              }

              if(ChoosedDay.classList.contains("Tue")){
                  ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                        ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnTuesday);

                        DaysArray=DaysArray.filter(place=>place!==ChoosedDay);

                      ChoosedDay.classList.remove("Checked");
                 
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                           ThePlaceToAppend.push(RoutineColumnTuesday);
                                   DaysArray.push(ChoosedDay);
                  }
                  
              }
                  

              if(ChoosedDay.classList.contains("Wed")){
                ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                       ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnWednesday);
                       DaysArray=DaysArray.filter(place=>place!==ChoosedDay);
                      ChoosedDay.classList.remove("Checked");
                      
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                       ThePlaceToAppend.push(RoutineColumnWednesday);
                        DaysArray.push(ChoosedDay);
                  }
                  
              }
                  

              if(ChoosedDay.classList.contains("Thu")){
                  ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                             ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnThursday);
                             DaysArray=DaysArray.filter(place=>place!==ChoosedDay);
                      ChoosedDay.classList.remove("Checked");
                      
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                         ThePlaceToAppend.push(RoutineColumnThursday);
                         DaysArray.push(ChoosedDay);
                  }
                  
              }
                  



              if(ChoosedDay.classList.contains("Fri")){
                           ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                  ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnFriday);
                    DaysArray=DaysArray.filter(place=>place!==ChoosedDay);
                      ChoosedDay.classList.remove("Checked");
                      
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                         ThePlaceToAppend.push(RoutineColumnFriday);
                         DaysArray.push(ChoosedDay);
                  }
                  

              }
                  


              if(ChoosedDay.classList.contains("Sat")){
                          ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                     ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnSaturday);
                     DaysArray=DaysArray.filter(place=>place!==ChoosedDay);
                      ChoosedDay.classList.remove("Checked");
                      
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                           ThePlaceToAppend.push(RoutineColumnSaturday);
                           DaysArray.push(ChoosedDay);
                  }
                  

              }
                  
              

              if(ChoosedDay.classList.contains("Sun")){
                     ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                    ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnSunday);
                    DaysArray=DaysArray.filter(place=>place!==ChoosedDay);
                    ChoosedDay.classList.remove("Checked");
                    
                  }

                  else{
                                ChoosedDay.classList.add("Checked");
                           ThePlaceToAppend.push(RoutineColumnSunday);
                           DaysArray.push(ChoosedDay);
                  }
                  

                            
              }

                        



                
            return ThePlaceToAppend;
    
            }


       function HowMuchType(Dataset){

          //this function counts how much times the user selects one single day to know when to add it and when to remove it 
      if(Number(Dataset.dataset.clicks)==1){
        Dataset.dataset.clicks="0";
             return "true";
      }
Dataset.dataset.clicks=String(Number(Dataset.dataset.clicks)+1);
return "false";

}

  
 
export {DaysSelector};