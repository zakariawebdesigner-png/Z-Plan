


import { NoteInformations } from "./NotesElements.js";

function  AppearInfo(){

   NoteInformations.classList.remove("hideNotEinfo");
             NoteInformations.classList.add("showNotEinfo");
              NoteInformations.style.pointerEvents = "auto";
            NoteInformations.style.opacity = "1";


}

export{AppearInfo}