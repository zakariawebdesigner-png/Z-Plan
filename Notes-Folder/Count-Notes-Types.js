

import { Notes_holder } from "./NotesElements.js";


 let notesCount=0;
      let PinedCount=0;
      let IdeasCount=0;
      let WorkCount=0;
       let PersonalCount=0;
function CountNotesPerType(){
 let notesCount=0;
      let PinedCount=0;
      let IdeasCount=0;
      let WorkCount=0;
       let PersonalCount=0;
let AllNotes=Notes_holder.querySelectorAll(".Note");

       AllNotes.forEach(Note=>{

            if(Note.querySelector(".noteTypeP").textContent=="Personal"){


                  PersonalCount+=1;
                    console.log("PersonalCount insideFunc:", PersonalCount);
            }

              if(Note.querySelector(".noteTypeP").textContent=="Work"){


                  WorkCount+=1;

            }

              if(Note.querySelector(".noteTypeP").textContent=="Ideas"){


                  IdeasCount+=1;

            }


              if(Note.dataset.pinned=="true"){


                  PinedCount+=1;

            }


            notesCount+=1;

                  
           

       });


 return{
                PersonalCount,
                notesCount,
                WorkCount,
                IdeasCount,
                PinedCount
            }


}

export{CountNotesPerType}