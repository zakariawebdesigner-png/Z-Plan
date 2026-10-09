

import {noteName,the_content,select,datetime_local} from "../NotesElements.js";



function CreateNoteObj(){

return {
               id: Date.now(),
               DateOfCreate:new Date(),
               name: noteName.value,
               type: select.textContent,
               content: the_content.textContent,
               date: datetime_local.value,
               pinned: false

               };
}

export{CreateNoteObj}