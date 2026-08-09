 
 const AddRoutine_Voice= new Audio("sound/Add-Routine.mp3"); 
 const Hover_Routine_Add= new Audio("sound/Hover-Routine-Add.mp3"); 
      

const AddRoutine_btn=document.getElementById("AddRoutine-btn");
const RoutineForm=document.getElementById("RoutineForm");
const RoutineDeleteButton=document.getElementById("RoutineDeleteButton");
const RoutinesCategory_input=document.getElementById("RoutinesCategory-input");
const Categories=document.getElementById("Categories");
const  arrowCategory=document.getElementById("arrowCategory");
const  Hours=document.getElementById("Hours");
const  Minutes=document.getElementById("Minutes");
const  EndHours=document.getElementById("EndHours");
const  EndMinutes=document.getElementById("EndMinutes");
const  CreateRoutine=document.getElementById("CreateRoutine");
const  RoutinesName_input=document.getElementById("RoutinesName-input");

const RoutineColumnMonday = document.getElementById("RoutineColumn-Monday");
const RoutineColumnTuesday = document.getElementById("RoutineColumn-Tuesday");
const RoutineColumnWednesday = document.getElementById("RoutineColumn-Wednesday");
const RoutineColumnThursday = document.getElementById("RoutineColumn-Thursday");
const RoutineColumnFriday = document.getElementById("RoutineColumn-Friday");
const RoutineColumnSaturday = document.getElementById("RoutineColumn-Saturday");
const RoutineColumnSunday = document.getElementById("RoutineColumn-Sunday");



const Pray = document.getElementById("Pray");
const Study = document.getElementById("Study");
const WorkCategory = document.getElementById("Work-Category");
const Health = document.getElementById("Health");
const Sport = document.getElementById("Sport");
const Others = document.getElementById("Others");
const PersonalCategory = document.getElementById("Personal-Category");



const Duration_hours= document.getElementById("Duration-hours");
const Duration_minutes= document.getElementById("Duration-minutes");
const RoutineTime= document.getElementById("RoutineTime");
const RoutineTime2= document.getElementById("RoutineTime2");

const DeadLineSelectDiv= document.getElementById("DeadLineSelectDiv");
const StartLineSelectDiv= document.getElementById("StartLineSelectDiv");


const HoursSide= document.getElementById("HoursSide");
const MinutesSide= document.getElementById("MinutesSide");

const HoursSide2= document.getElementById("HoursSide2");
const MinutesSide2= document.getElementById("MinutesSide2");
const ColorsContainer= document.querySelector(".ColorsContainer");

   let DurationHours=0;

           let DurationMinutes=0;


/** @type {HTMLDivElement} */
let RoutineDiv=null;



let RoutineObject=null;
let ThePlaceToAppend=[];
let ClicksHandeler="false";
const  RepeatContainer=document.querySelector(".RepeatDaysDiv");


 const Mon = document.querySelector(".Mon");
                const Tue = document.querySelector(".Tue");
              const Wed = document.querySelector(".Wed");
                      const Thu = document.querySelector(".Thu");
               const Fri = document.querySelector(".Fri");
             const Sat = document.querySelector(".Sat");
             const Sun = document.querySelector(".Sun");

             const DaysArray=[Tue,Wed,Thu,Mon,Fri,Sat,Sun];

             DaysArray.forEach((day)=>{

              day.dataset.clicks="0";

             });




let RoutineObdjectArray=[];
  window.addEventListener("load",()=>{
                      
                   RoutineObdjectArray = JSON.parse(localStorage.getItem("RoutineObdjectArray")) || [];

                     RoutineObdjectArray.forEach(arr=>{

                 RoutineDiv=CreateRoutineFunc(arr);

const prayCount = RoutineObdjectArray.filter(ob => ob.RStycker === "Mosk").length;
const studyCount = RoutineObdjectArray.filter(ob => ob.RStycker === "studySticker").length;
const workCount = RoutineObdjectArray.filter(ob => ob.RStycker === "worksticker").length;
const healthCount = RoutineObdjectArray.filter(ob => ob.RStycker === "healthsticker").length;
const sportCount = RoutineObdjectArray.filter(ob => ob.RStycker === "sportsticker").length;
const personalCount = RoutineObdjectArray.filter(ob => ob.RStycker === "personalsticker").length;
const othersCount = RoutineObdjectArray.filter(ob => ob.RStycker === "othersticker").length;
                  
          

         });


                   

       });
   




    
RoutineTime.addEventListener("click",(event)=>{

         
StartLineSelectDiv.classList.toggle("ToggleStartLineSelect");
   

});


RoutineTime2.addEventListener("click",(event)=>{

         
DeadLineSelectDiv.classList.toggle("ToggleDeadLineSelect");
   

});





HoursSide2.addEventListener("click",(event)=>{
   let ChoosedEndHour=null;

   ChoosedEndHour=event.target.closest(".EndingHourDiv");

   if(!ChoosedEndHour)return;

            
               EndHours.value=ChoosedEndHour.textContent;
   

});




MinutesSide2.addEventListener("click",(event)=>{
   let ChoosedEndingMinute=null;

   ChoosedEndingMinute=event.target.closest(".EndingMinuteDiv");

   if(!ChoosedEndingMinute)return;

            
               EndMinutes.value=ChoosedEndingMinute.textContent;
     
});





HoursSide.addEventListener("click",(event)=>{

   let ChoosedStartHour=null;

   ChoosedStartHour=event.target.closest(".StartingHourDiv");

   if(!ChoosedStartHour)return;

            
               Hours.value=ChoosedStartHour.textContent;
   

});




MinutesSide.addEventListener("click",(event)=>{
   let ChoosedStartMinute=null;

   ChoosedStartMinute=event.target.closest(".StartingMinuteDiv");

   if(!ChoosedStartMinute)return;

            
               Minutes.value=ChoosedStartMinute.textContent;
   

});





document.body.classList.add("lightMode");

      const profile= document.getElementById("profile");
      






AddRoutine_btn.addEventListener("click",()=>{
  overlay.classList.toggle("active");
AddRoutine_Voice.play();
RoutineForm.classList.add("showRoutineForm");
         
});

AddRoutine_btn.addEventListener("mouseenter",()=>{
 
Hover_Routine_Add.play();
Hover_Routine_Add.currentTime=0;
         
});





RoutineDeleteButton.addEventListener("click",()=>{
 overlay.classList.toggle("active");

RoutineForm.classList.remove("showRoutineForm");

 CheckingString="false";
      RoutinesCategory_input.value="";
       RoutinesName_input.value="";


         EndMinutes.value="";
          EndHours.value="";
          Hours.value="";
          Minutes.value="";

  Duration_hours.textContent="";
 Duration_minutes.textContent="";
       
    
});


arrowCategory.addEventListener("click",()=>{

RoutinesCategory_input.click();

    
});


RoutinesCategory_input.addEventListener("click",()=>{

arrowCategory.classList.toggle("RotateArrow");
Categories.classList.toggle("moveCategory");

    
});





 let  RoutineTop=0;
 let RoutineHeight= 0;
let CloneOfClone=null;
let RoutineClone=null;
let RoutinebackgroundColor="";


                const Mosk = document.getElementById("Mosk");
const studySticker = document.getElementById("studySticker");
const worksticker = document.getElementById("worksticker");
const healthsticker = document.getElementById("healthsticker");
const sportsticker = document.getElementById("sportsticker");
const personalsticker = document.getElementById("personalsticker");
const othersticker = document.getElementById("othersticker");

let CategorySticker=null;


          
       RepeatContainer.addEventListener("click",(e)=>{

                  

             const ChoosedDay= e.target.closest("div");
                    if(ChoosedDay==RepeatContainer)return;
                    
            

              if(!ChoosedDay)return;

              if(ChoosedDay.classList.contains("Mon")){
         

                  
               ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                       ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnMonday);
                      ChoosedDay.classList.remove("Checked");
                      
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                  ThePlaceToAppend.push(RoutineColumnMonday);
                  }
                  
              }

              if(ChoosedDay.classList.contains("Tue")){
                  ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                       ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnTuesday);
                      ChoosedDay.classList.remove("Checked");
                 
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                  ThePlaceToAppend.push(RoutineColumnTuesday);
                  }
                  
              }
                  

              if(ChoosedDay.classList.contains("Wed")){
                ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                       ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnWednesday);
                      ChoosedDay.classList.remove("Checked");
                      
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                  ThePlaceToAppend.push(RoutineColumnWednesday);
                  }
                  
              }
                  

              if(ChoosedDay.classList.contains("Thu")){
                  ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                       ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnThursday);
                      ChoosedDay.classList.remove("Checked");
                      
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                  ThePlaceToAppend.push(RoutineColumnThursday);
                  }
                  
              }
                  



              if(ChoosedDay.classList.contains("Fri")){
                           ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                    ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnFriday);
                    
                      ChoosedDay.classList.remove("Checked");
                      
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                  ThePlaceToAppend.push(RoutineColumnFriday);
                  }
                  

              }
                  


              if(ChoosedDay.classList.contains("Sat")){
                          ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                      ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnSaturday);
                      ChoosedDay.classList.remove("Checked");
                      
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                  ThePlaceToAppend.push(RoutineColumnSaturday);
                  }
                  

              }
                  
              

              if(ChoosedDay.classList.contains("Sun")){
                     ClicksHandeler=HowMuchType(ChoosedDay);
                  if(ClicksHandeler=="true"){
                       ThePlaceToAppend=ThePlaceToAppend.filter(place=>place!==RoutineColumnSunday);
                      ChoosedDay.classList.remove("Checked");
                    
                  }

                  else{
                           ChoosedDay.classList.add("Checked");
                  ThePlaceToAppend.push(RoutineColumnSunday);
                  }
                  

              }
                  
                    
              

       });
     
let RoutineId=null;
CreateRoutine.addEventListener("click",()=>{


                if(RoutineObject){

      
                                 
                 RoutineObject.Rname=RoutinesName_input.value;
                 
                RoutineObject.RstartingTimeHours=Hours.value;
                     RoutineObject.RstartingTimeMin=Minutes.value;
                      RoutineObject.REndingTimeHours=EndHours.value;
                    RoutineObject.REndingTimeMin=EndMinutes.value; 
                  RoutineObject.RRepeatedDays=ThePlaceToAppend.map(arr=>arr.id);
                   RoutineObject.RbackgroundColor=RoutinebackgroundColor;
                     RoutineObject.RStycker=CategorySticker.id;

                                document.querySelectorAll(".RoutineDiv").forEach(m=>{
                                         if(m.id==RoutineId){
                                              m.remove();
                                         }
                                  
                                });
                                
                                   CreateRoutineFunc(RoutineObject);

localStorage.setItem("RoutineObdjectArray",JSON.stringify(RoutineObdjectArray));

   
                             RoutineObject=null;
                              return;
                           }



                                       



     /*
              RRepeatedDays:ThePlaceToAppend.map(arr=>arr.id),
                 RbackgroundColor:RoutinebackgroundColor,
               RStycker:CategorySticker.id,*/








let  RoutineObdject={
          
       RCategory:RoutinesCategory_input.value,
       Rname: RoutinesName_input.value,
       RstartingTimeHours:Hours.value,
       RstartingTimeMin:Minutes.value,
       REndingTimeHours:EndHours.value,
       REndingTimeMin:EndMinutes.value,
       RRepeatedDays:ThePlaceToAppend.map(arr=>arr.id),
       RbackgroundColor:RoutinebackgroundColor,
       RStycker:CategorySticker.id,
       Rid:Date.now().toString(),
         choosed: Categorychoosed()                                                    
  
};




  if(RoutineObdject.Rname=="" || RoutineObdject.choosed=="false"){
    
    window.alert("Enter the  rest of the informations to create the routine");
return;
  }


         RoutineObdjectArray.push(RoutineObdject);
       localStorage.setItem("RoutineObdjectArray",JSON.stringify(RoutineObdjectArray));



        CreateRoutineFunc(RoutineObdject);



 

       
      
 

    
});


 const colorBorder=document.querySelectorAll(".ColorHolder");
ColorsContainer.addEventListener("click",(e)=>{


const Green = document.querySelector(".Green");
const Blue = document.querySelector(".Blue");
const Yellow = document.querySelector(".Yellow");
const Orange = document.querySelector(".Orange");
const Pink = document.querySelector(".Pink");
const DarkBlue = document.querySelector(".DarkBlue");

const ColorsArray=[Green,Blue,Yellow,Orange,Pink,DarkBlue];



        
             let ChoosenColor=null;
                     if(ColorsArray.includes(e.target.closest("div"))){
                           ChoosenColor=e.target.closest("div");
                     }
                     else{
                      return;
                     }
        
           
                    if (!ChoosenColor || !ColorsArray.includes(ChoosenColor)) return;


           colorBorder.forEach((color)=>{
                    color.style.border="2px solid transparent";
           });
                    
           ChoosenColor.parentElement.style.border="2px solid rgb(0, 221, 255)";
if (ChoosenColor.classList.contains("Green")) {
    RoutinebackgroundColor = "linear-gradient(180deg, #66CFA2 0%, #78D8AE 50%, #8CE1BB 100%)";
}

if (ChoosenColor.classList.contains("Blue")) {
    RoutinebackgroundColor = "linear-gradient(180deg, #6BAEEB 0%, #7DBAF0 50%, #92C7F4 100%)";
}

if (ChoosenColor.classList.contains("Yellow")) {
    RoutinebackgroundColor = "linear-gradient(180deg, #E8C86A 0%, #EDD37F 50%, #F2DE97 100%)";
}

if (ChoosenColor.classList.contains("Orange")) {
    RoutinebackgroundColor = "linear-gradient(180deg, #E5A66E 0%, #EBB27F 50%, #F0BE94 100%)";
}

if (ChoosenColor.classList.contains("Pink")) {
    RoutinebackgroundColor = "linear-gradient(180deg, #D88DB0 0%, #E19BBC 50%, #E8A9C8 100%)";
}

if (ChoosenColor.classList.contains("DarkBlue")) {
    RoutinebackgroundColor = "linear-gradient(180deg, #6E7FC7 0%, #7E8ED0 50%, #90A0D9 100%)";
}


});





 

const   CategoriesSoundClick=  new Audio("sound/Category-Click.mp3");

const   Prayer_Motivation=  new Audio("sound/Prayer-Motivation.mp3");

   const CategoriesArray=[Pray,WorkCategory,Sport,Study,Health,Others,PersonalCategory];
let CheckingString="";

       CategoriesArray.forEach(Category=>{
             Category.dataset.clicked="false";
        Category.addEventListener("click",()=>{
                     CategoriesSoundClick.currentTime=0;
                   CategoriesSoundClick.play();
                           CheckingString=Category.dataset.clicked="true";
                       
                  
            
                        });

                 });

        
            function Categorychoosed(){
              let CategorychoosedTemp="";

              if(CheckingString=="true"){
                       CategorychoosedTemp="true";
                               
              }

              else{
              CategorychoosedTemp="false";
              }

              return CategorychoosedTemp;
                           
                         
                }




      Pray.addEventListener("click",()=>{
      
           RoutinesCategory_input.value="Prayer Category";
               
                          Prayer_Motivation.currentTime=0;
                          
                        Prayer_Motivation.play();
                        
                   CategorySticker=Mosk;
                        
                         
                           
          
      });

             
      
      Study.addEventListener("click",()=>{

                  RoutinesCategory_input.value="Study Category";
               CategorySticker=studySticker;

      });



      
      WorkCategory.addEventListener("click",()=>{


           RoutinesCategory_input.value="Work Category";

         CategorySticker=worksticker;
      });





      
      Health.addEventListener("click",()=>{

               RoutinesCategory_input.value="Health Category";

 CategorySticker=healthsticker;

        
      });





      
      Sport.addEventListener("click",()=>{

            RoutinesCategory_input.value="Sport Category";


 CategorySticker=sportsticker;
        
      });






      
      Others.addEventListener("click",()=>{


            RoutinesCategory_input.value="Others Category";


 CategorySticker=othersticker;
        
      });



       
      PersonalCategory.addEventListener("click",()=>{


            RoutinesCategory_input.value="Personal Category";

 CategorySticker=personalsticker;

        
      });
let SelectedRoutine=null;
let threeDotesClicked=false;
 let countDots=0;

const RoutineOptions=document.getElementById("RoutineOptions");

 const RoutineColumn=document.querySelectorAll(".RoutineColumn-Monday");

    RoutineColumn.forEach(Column=>{
                      Column.addEventListener("click",(e)=>{
                   
           if(e.target.closest(".ThreeDotsOfRoutine")){

               const dots=e.target.closest(".ThreeDotsOfRoutine");
                 SelectedRoutine=dots.closest(".RoutineDiv");
                   
                   SelectedRoutine.appendChild(RoutineOptions);
                       const rect = SelectedRoutine.getBoundingClientRect();
                               RoutineOptions.style.left=`${rect.width+10}px`;

     
                    RoutineOptions.classList.remove("hideOption");
                      RoutineOptions.classList.add("AppearOptions");
                    
                   
                      
           }


                    

                 });



    });


    const DeleteOption=document.getElementById("DeleteOption");
        const ModifyOption=document.getElementById("ModifyRoutine");

    DeleteOption.addEventListener("click",()=>{
                   
       RoutineOptions.classList.remove("AppearOptions");
      RoutineOptions.classList.add("hideOption");
    });

let RoutineModify=null;

 RoutineOptions.addEventListener("click",(e)=>{
  let RoutinesToDelete=[];
                                  if(e.target.closest(".DeleteRoutine")){
                                        
                       const Routine=e.target.closest(".RoutineDiv");
                             
                        const RoutineId=Routine.id;
                         RoutinesToDelete=[...document.querySelectorAll(".RoutineDiv")].filter(Routine=>Routine.id==RoutineId);
                      RoutineObdjectArray=RoutineObdjectArray.filter(Routine=>Routine.Rid!==RoutineId);
                                 
                         RoutinesToDelete.forEach(Routine=>{
                               Routine.remove();
                        });

                      

           }


                        else  if(e.target.closest(".ModifyRoutine")){
                           
                             RoutineModify= e.target.closest(".RoutineDiv");

                                RoutineId=RoutineModify.id;
                                    
                                RoutineObject=RoutineObdjectArray.find(Routine=>Routine.Rid===RoutineId);
                                                overlay.classList.toggle("active");
                                   AddRoutine_Voice.play();
                                      RoutineForm.classList.add("showRoutineForm");
                                   
                          

                                      }
          

                          localStorage.setItem("RoutineObdjectArray",JSON.stringify(RoutineObdjectArray));

                     });





function CreateRoutineFunc(RoutineObdject){


 

             
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

    AlignRoutine(RoutineDiv,RoutineObdject,DurationHours,DurationMinutes,Number(RoutineObdject.RstartingTimeHours),Number(RoutineObdject.RstartingTimeMin));


           

     if(RoutineObdject.RRepeatedDays.length===0)return null;
     
      

     
              
     return RoutineDiv; 
                 

     
}






const Cancel=document.getElementById("CancelRoutine");

   Cancel.addEventListener("click",()=>{

        colorBorder.forEach((color)=>{
                    color.style.border="2px solid transparent";
           });
            RoutinesCategory_input.value="";
       RoutinesName_input.value="";


         EndMinutes.value="";
          EndHours.value="";
          Hours.value="";
          Minutes.value="";

  Duration_hours.textContent="";
 Duration_minutes.textContent="";
               
       ThePlaceToAppend=[];
    DaysArray.forEach((day)=>{
                    day.classList.remove("Checked");
                    day.dataset.clicks="0";
           });
   
        
   });


const NumCategoryPray = document.querySelector(".NumCategoryPray");
const NumCategoryHealth = document.querySelector(".NumCategoryHealth");
const NumCategorySports = document.querySelector(".NumCategorySports");
const NumCategoryStudy = document.querySelector(".NumCategoryStudy");
const NumCategoryPersonal = document.querySelector(".NumCategoryPersonal");
const NumCategoryWork = document.querySelector(".NumCategoryWork");
const NumCategoryOthers = document.querySelector(".NumCategoryOthers");

       
                
                              
                             
                          


        
                 
                 
                  
                 




  

function Duration(StartingHours,StartingMinutes,EndingHours,EndingMinutes){
        let CalculatedStartMinutes=(StartingHours*60)+StartingMinutes;

       let CalculatedEndMinutes=(EndingHours*60)+EndingMinutes;

         let remainingTime=CalculatedEndMinutes-CalculatedStartMinutes;
                
            



            DurationHours=Math.trunc(remainingTime/60);

            DurationMinutes= remainingTime % 60;

             
}






function AlignRoutine(RoutineDiv,RoutineObdject,DurationHours,DurationMinutes,Hours,Minutes){
  let RoutineHourTop = 0;
let RoutineMinuteTop = 0;

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
     RoutineClone=RoutineDiv.cloneNode(true);
   

console.log(RoutineDiv);


  RoutineObdject.RRepeatedDays.forEach(id=>{
        
                   const idDay=document.getElementById(id);
                       RoutineClone= RoutineDiv.cloneNode(true);
                       RoutineClone.style.background= RoutineObdject.RbackgroundColor;
                   idDay.appendChild(RoutineClone);
                  

        });


}






function HowMuchType(Dataset){

          
      if(Number(Dataset.dataset.clicks)==1){
        Dataset.dataset.clicks="0";
             return "true";
      }
Dataset.dataset.clicks=String(Number(Dataset.dataset.clicks)+1);
return "false";

}



    