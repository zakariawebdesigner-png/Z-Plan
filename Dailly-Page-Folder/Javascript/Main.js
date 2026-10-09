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
  ColumnsOfRoutines,
  gearBtn,appearenceChoices,
  ProfileSettings_arrow
  
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

import { CreateRoutineFunc } from './models/CreateRoutine.js';

import {
  ReturnedColor,
  ChoosingColor
} from './Ui/RoutineColor.js';

import { ColorsContainer,Cancel } from './Ui/RoutineElements.js';

import { Duration } from './Ui/DurationCalculation.js';

import { ToggleSettings } from './Ui/SettingsToggle.js';

 let RoutinebackgroundColor="";


/** @type {HTMLDivElement} */
let RoutineDiv=null;


export let RoutineObdjectArray=[];

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





 gearBtn.addEventListener("click",()=>{
   
  ToggleSettings();
   console.log("nsssssssssssssssssssss");


});









import { StyleMode } from '../../Shared/Ui/Theme-Modes.js';

 appearenceChoices.forEach(choice=>{

StyleMode(choice);
      

 })














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

import { Modify } from './Ui/ModifyRoutine.js';
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


ChosenCategory();


ColorsContainer.addEventListener("click",(e)=>{

    ChoosingColor(e);
  
});


let ObdjectToModify=null;

export let RoutineModify=null;



CreateRoutine.addEventListener("click",()=>{

    if(RoutineModify){
      console.log(ObdjectToModify);
      
      Modify(RoutineModify,ObdjectToModify,ReturnedColor);

          return;
    }
    

    CreateRoutineFunc(RoutineObdject,ReturnedColor);

});




import{DeleteInputs}from './Ui/CancelCreate.js';
Cancel.addEventListener("click",()=>{

    DeleteInputs();


});



import { AppearOptions,HideOptions } from './Ui/RoutineOptions.js';

ColumnsOfRoutines.addEventListener("click",(e)=>{
                   
AppearOptions(e);

});






DeleteOption.addEventListener("click",()=>{
                   
HideOptions();

});




export let BooleanModify=false;
export let RoutineId=null;
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
         
       const Rid= RoutineModify.dataset.Rid;
                                    
        ObdjectToModify=RoutineObdjectArray.filter(
            Routine=>String(Routine.Rid)===String(Rid)
        );
              HideOptions();
        PopUpApper();

        AddRoutine_Voice.play();

        RoutineForm.classList.add("showRoutineForm");

        BooleanModify=true;
    



                                   
    }
          


});


import { ProfileSettingsbar,ArrowOfProfile } from '../../Shared/Ui/Profile-Settings-toggle.js';

profile.addEventListener("click",()=>{
 console.log("yes");

ProfileSettingsbar();

});


ProfileSettings_arrow.addEventListener("click",()=>{
 console.log("yes");
ArrowOfProfile();

});














