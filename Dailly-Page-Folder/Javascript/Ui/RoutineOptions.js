    




import { RoutineOptions } from './RoutineElements.js';




function AppearOptions(e){
    
let SelectedRoutine = null;

    if(e.target.closest(".ThreeDotsOfRoutine")){

    const dots=e.target.closest(".ThreeDotsOfRoutine");

    SelectedRoutine=dots.closest(".RoutineDiv");
           
    SelectedRoutine.appendChild(RoutineOptions);

    const rect = SelectedRoutine.getBoundingClientRect();

    RoutineOptions.style.left=`${rect.width+10}px`;

    RoutineOptions.classList.remove("hideOption");
    RoutineOptions.classList.add("AppearOptions");
            
}


}






function HideOptions(){
                   
    RoutineOptions.classList.remove("AppearOptions");
    RoutineOptions.classList.add("hideOption");

}



export{AppearOptions,HideOptions};