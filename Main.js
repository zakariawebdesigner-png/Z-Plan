import {
  AddRoutine_btn,
  AddRoutine_Voice,
  colorBorder,
  CreateRoutine,
  RoutinesCategory_input,
  DeleteOption,
  ModifyOption,
  RepeatContainer,
  RoutineColumnMonday,
  profile,
  RoutineDeleteButton,
  RoutineForm,
  RoutineOptions,
  
} from './Ui/RoutineElements.js';

import { DurationHours, DurationMinutes } from './Ui/DurationCalculation.js';

import { RoutineObdject } from './models/CreateRoutine.js';

import { ThePlaceToAppend } from './Ui/Days-of-routine.js';

import {
  HoursSide2Function,
  MinutesSideFunction,
  HoursSideFunction,
  MinutesSide2Function
} from './Ui/TimeChoosing.js';

import { PopUpApper } from './Ui/Routine-PopUp.js';

import { ToggleStart_End_TimePop } from './Ui/TimePopUps.js';

import { PopUpDelete } from './Ui/Routine-PopUp.js';

import {
  CategoryUiReaction,
  CheckingString,
  ChosenCategory,
  CategorySticker
} from './Ui/Category.js';

import { DaysSelector } from './Ui/Days-of-routine.js';

import { CreateRoputineFunc } from './models/CreateRoutine.js';

import {
  ReturnedColor,
  ChoosingColor
} from './Ui/RoutineColor.js';

import { ColorsContainer,Cancel } from './Ui/RoutineElements.js';

import { Duration } from './Ui/DurationCalculation.js';


let RoutinebackgroundColor="";


/** @type {HTMLDivElement} */
let RoutineDiv=null;


let RoutineObdjectArray=[];

window.addEventListener("load",()=>{
             
    RoutineObdjectArray.forEach(arr=>{

        const prayCount = RoutineObdjectArray.filter(ob => ob.RStycker === "Mosk").length;
        const studyCount = RoutineObdjectArray.filter(ob => ob.RStycker === "studySticker").length;
        const workCount = RoutineObdjectArray.filter(ob => ob.RStycker === "worksticker").length;
        const healthCount = RoutineObdjectArray.filter(ob => ob.RStycker === "healthsticker").length;
        const sportCount = RoutineObdjectArray.filter(ob => ob.RStycker === "sportsticker").length;
        const personalCount = RoutineObdjectArray.filter(ob => ob.RStycker === "personalsticker").length;
        const othersCount = RoutineObdjectArray.filter(ob => ob.RStycker === "othersticker").length;
                  
    });

});


HoursSide2.addEventListener("click",(event)=>{

    HoursSide2Function(event);
                  
});


MinutesSide.addEventListener("click",(event)=>{

    MinutesSideFunction(event);

});


HoursSide.addEventListener("click",(event)=>{

    HoursSideFunction(event);

});


MinutesSide2.addEventListener("click",(event)=>{

    MinutesSide2Function(event);

});


AddRoutine_btn.addEventListener("click",()=>{

    PopUpApper();
    
});

ToggleStart_End_TimePop();


RoutineDeleteButton.addEventListener("click",()=>{

    PopUpDelete();
       
});


RoutinesCategory_input.addEventListener("click",()=>{

    arrowCategory.classList.toggle("RotateArrow");
    Categories.classList.toggle("moveCategory");

    CategoryUiReaction();
    
});


document.body.classList.add("lightMode");


RepeatContainer.addEventListener("click",(e)=>{
        
    DaysSelector(e);

});


let RoutineId=null;


/*CreateRoutine.addEventListener("click",()=>{


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



              

    
});*/


ChosenCategory();


ColorsContainer.addEventListener("click",(e)=>{

    ChoosingColor(e);
  
});


CreateRoutine.addEventListener("click",()=>{

    CreateRoputineFunc(RoutineObdject,ReturnedColor);

});




import{DeleteInputs}from './Ui/CancelCreate.js';
Cancel.addEventListener("click",()=>{

    DeleteInputs();


});








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

        RoutinesToDelete=[
            ...document.querySelectorAll(".RoutineDiv")
        ].filter(Routine=>Routine.id==RoutineId);

        RoutineObdjectArray=RoutineObdjectArray.filter(
            Routine=>Routine.Rid!==RoutineId
        );
                                 
        RoutinesToDelete.forEach(Routine=>{
            Routine.remove();
        });

    }
    

    else if(e.target.closest(".ModifyRoutine")){
                           
        RoutineModify=e.target.closest(".RoutineDiv");

        RoutineId=RoutineModify.id;
                                    
        RoutineObdject=RoutineObdjectArray.find(
            Routine=>Routine.Rid===RoutineId
        );

        RoutinePopUp();

        AddRoutine_Voice.play();

        RoutineForm.classList.add("showRoutineForm");
                                   
    }
          

    localStorage.setItem(
        "RoutineObdjectArray",
        JSON.stringify(RoutineObdjectArray)
    );

});


