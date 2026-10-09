 

import {
  Profile_settingsPart,
  overlay
} from "../../Dailly-Page-Folder/Javascript/Ui/RoutineElements.js";



function ProfileSettingsbar(){
  Profile_settingsPart.classList.toggle("Profile-SettingsAnimation");
  overlay.classList.add("active");

}



function ArrowOfProfile(){
     overlay.classList.remove("active");
   Profile_settingsPart.classList.toggle("Profile-SettingsAnimation");
}
 

export{ProfileSettingsbar,ArrowOfProfile}
 