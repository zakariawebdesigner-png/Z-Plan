



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
    RepeatContainer
 
} from "../Ui/RoutineElements.js";
import { BooleanModify } from "../Main.js";

import { DaysSelector } from "./Days-of-routine.js";

import{CreateRoutineFunc}from '../models/CreateRoutine.js';
import { RoutineModify } from "../Main.js";


import { ThePlaceToAppend } from "./Days-of-routine.js";
import { CategorySticker,CheckingString,Categorychoosed} from "./Category.js";

import { AlignRoutine } from "../models/AligneRoutine.js";

import{Duration,DurationHours,DurationMinutes}from './DurationCalculation.js';
import{ChosenCategory}from './Category.js';
/**
 * @param {HTMLDivElement} RoutineModify
 */

function Modify(RoutineModify,ObdjectToModify,RoutinebackgroundColor){
       

       ChosenCategory();
      
                 ObdjectToModify.Rname=RoutinesName_input.value;
                 
                ObdjectToModify.RstartingTimeHours=Hours.value;
                     ObdjectToModify.RstartingTimeMin=Minutes.value;
                      ObdjectToModify.REndingTimeHours=EndHours.value;
                    ObdjectToModify.REndingTimeMin=EndMinutes.value; 
                  ObdjectToModify.RRepeatedDays=ThePlaceToAppend.map(arr=>arr.id);
                   ObdjectToModify.RbackgroundColor=RoutinebackgroundColor;
                     ObdjectToModify.RStycker=CategorySticker;

                   RoutineModify.querySelector(".RoutineName").textContent=ObdjectToModify.Rname;

                       RoutineModify.querySelector(".StartingTimeHourP").textContent =ObdjectToModify.RstartingTimeHours;
                         RoutineModify.querySelector(".StartingTimeMinP").textContent = ObdjectToModify.RstartingTimeMin;
                           RoutineModify.querySelector(".EndingTimeHourP").textContent =   ObdjectToModify.REndingTimeHours;
                             RoutineModify.querySelector(".EndingTimeMinP").textContent =   ObdjectToModify.REndingTimeMin;

                              const OldSticker=RoutineModify.querySelector(".RCategoryEmogy");
                            const NewSticker =document.getElementById(ObdjectToModify.RStycker);
                            console.log(ObdjectToModify.RStycker);
                          OldSticker.innerHTML="";
                          OldSticker.appendChild(NewSticker.cloneNode(true));

                          RepeatContainer.addEventListener("click",(e)=>{
        
                                           DaysSelector(e);


                                         });
          Duration(Number(ObdjectToModify.RstartingTimeHours),Number(ObdjectToModify.RstartingTimeMin),Number(ObdjectToModify.REndingTimeHours),Number(ObdjectToModify.REndingTimeMin));

    AlignRoutine(RoutineModify,ObdjectToModify,DurationHours,DurationMinutes,Number(ObdjectToModify.RstartingTimeHours),Number(ObdjectToModify.RstartingTimeMin),BooleanModify);
                
         
      
                            
                       

                             RoutineModify=null;
                              
                           }
     


             
export{Modify};


              

   
