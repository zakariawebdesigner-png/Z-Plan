
    
      import { Ideas_num,Work_num,pined_num,Personal_num,allnotes_num } from "./NotesElements.js";
function DeleteTheNote(NotesObject,NotesArray,Note){

const noteTypeP=Note.querySelector(".noteTypeP");


       const indexTemp=NotesArray.indexOf(NotesObject);
         NotesArray.splice(indexTemp,1);
          console.log(NotesArray);
          Note.remove();
             localStorage.setItem("NotesArray",JSON.stringify(NotesArray));

           console.log(NotesArray);
                                        
                                       

    
}

export{DeleteTheNote}