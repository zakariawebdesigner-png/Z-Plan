

import { bell } from "../Task-Elements.js";


function LocalStorageRelease(){

bell.addEventListener("click",()=>{

localStorage.clear();



});
}

export{LocalStorageRelease}