


import { overlay, SettingsBar } from './RoutineElements.js';

function ToggleSettings(){ 

  SettingsBar.classList.toggle("SettingsAnimation");
  overlay.classList.toggle("active");


}

export{ToggleSettings};