
import {NoteContent,NoteInformations,RevealedNote,pOfReveal,Notes_holder } from "./NotesElements.js";
import { CreateNoteObj } from "./Data/Create-NotesObject.js";
import { IncrementTodayActivity } from "../Shared/Data/User-Statistics-file.js";
import { AllNotes } from "../Notes-part.js";

let notesCount=0;
let PinedCount=0;

let NotesObject;

      function CreateNote(SavedNotes){
        if(SavedNotes){
          NotesObject=SavedNotes;
        }
        else{
               NotesObject= CreateNoteObj();
        }

        

 const overlay= document.getElementById("overlay");
      overlay.classList.remove("active");
             document.body.style.overflowY="auto";
                   
                     
                        
                  const Note =document.createElement("div");
                  
                  Note.dataset.index=notesCount;
                      notesCount+=1;
                  Note.className="Note";
                   
                  Note.dataset.id=NotesObject.id;

                  
                  Notes_holder.appendChild(Note);
                   const Notes=document.querySelectorAll(".Note");
                  const isDark= document.body.classList.contains("darkMode");
                   if(isDark==true){
                          
                                     
                     Notes.forEach(Note=>{
                      
                           Note.classList.remove("lightModeNote");
                           Note.classList.add("DarkModeNote");
                     });
                         


                   }
                   else{

                      Notes.forEach(Note=>{

                           Note.classList.add("lightModeNote");
                           Note.classList.remove("DarkModeNote");

                     });
                         

                           
                          
                   }
                    
                    const  title_type=document.createElement("div");
                      title_type.className="title-type";
                      Note.appendChild( title_type);
                        title_type.classList.add("title-type");
                          
                    const note_nameP=document.createElement("p");
                     note_nameP.textContent=NotesObject.name;
                     note_nameP.className="note-nameP";                        
                      
                       note_nameP.classList.add("note-nameP");
                    
                       
                  const noteTypeP=document.createElement("p");
                     noteTypeP.textContent=NotesObject.type;
                     noteTypeP.className="noteTypeP";
                     if(NotesObject.type.toLowerCase()=="work"){
                      Note.dataset.type="work"; 
                               noteTypeP.style.color=" #4dab";
                               noteTypeP.style.fontSize="larger";
                       noteTypeP.style.fontWeight="600";
                       


                     }
                     
                     else if(NotesObject.type.toLowerCase()=="ideas"){
                            Note.dataset.type="ideas"; 
                          noteTypeP.style.color=" #ffb347";
                          noteTypeP.style.fontSize="larger";
                                        noteTypeP.style.fontWeight="600";

                     }
                      else {
                        Note.dataset.type="personal"; 
                         noteTypeP.style.color=" #b388ff";
                         noteTypeP.style.fontSize="larger";
                       noteTypeP.style.fontWeight="600";
                               
                     }
                     noteTypeP.className="noteTypeP";
                       noteTypeP.classList.add("noteTypeP");
                                                 

                       title_type.appendChild(note_nameP);
                       title_type.appendChild( noteTypeP);
                           const  lineNote=document.createElement("div");
                            lineNote.className="lineNote";
                             lineNote.classList.add("lineNote");
                       const noteText=document.createElement("div");
                          noteText.className="noteText";
                            noteText.classList.add("noteText");
                              Note.appendChild(lineNote);
                        
                          const lineNote2=document.createElement("div");

                          
                            lineNote2.className="lineNote";
                             lineNote2.classList.add("lineNote");
                              
                          const noteP=document.createElement("p");
                             noteP.className="noteP";
                             noteP.classList.add("noteP");
                              noteP.textContent=NotesObject.content+'\n';
                                 
                              noteText.appendChild(noteP);
                        
                              
                               Note.appendChild(noteText);
                               Note.appendChild(lineNote2);
                          const date_input = document.getElementById("datetime-local");
                          const note_creationDate =document.createElement("p");
                                 
                          note_creationDate.className="note-creationDate";

                         note_creationDate.classList.add("note-creationDate");
                                 
                              note_creationDate.textContent=NotesObject.date;
                                const LastPart_OfNote=document.createElement("div");
                                LastPart_OfNote.classList.add("LastPart-OfNote");
                              Note.appendChild(LastPart_OfNote);

                                 LastPart_OfNote.appendChild(note_creationDate);
                    

                         note_creationDate.classList.add("note-creationDate");

                              

                              
                                    
                                     
                                    
                                   
                            


                                         const modify= document.createElement("div");
                                         modify.className="modify";
                            modify.classList.add("modify");
                            const modifyTag=document.createElement("i");
                            modifyTag.classList.add("fa-solid", "fa-pen");
                                  modify.appendChild(modifyTag);

                            LastPart_OfNote.appendChild(modify);
                            
                                 


                              
                            

                                     const deleteNote=document.createElement("div");
                                     deleteNote.className="deleteNote";
                                     deleteNote.classList.add("fa-solid", "fa-trash");
                                     deleteNote.classList.add("deleteNote");
                                     LastPart_OfNote.appendChild(deleteNote);
                                     
                                  
                                       

                                    

                                 

                                   const PinnedBtn=document.createElement("div");
                                   PinnedBtn.className="PinnedBtn";
                                    LastPart_OfNote.appendChild(PinnedBtn);
                                     PinnedBtn.classList.add("PinnedBtn");

                                       PinnedBtn.classList.add("fa-solid", "fa-thumbtack");
                                           
                                     
                                    
                                  
                                
                                      
                              
                                 
                     let count=0;
                     let notePTemp=" ";
                     let result="";
                   let notePArray=[...noteP.textContent];
                   notePTemp=noteP.textContent;
                   noteP.textContent="";
                   const read= document.createElement("span");
                   for(let i=0;i<notePArray.length;i++){
                     result+= notePArray[i];
                     count+=1;

                     if(count==100){
                       
                      read.textContent=" Read more..."
                      read.style.cursor="pointer";
                      
                      read.style.color="rgb(92, 249, 92)";
                      noteP.textContent+=result+" ";
                      noteP.appendChild(read);

                        break;
                     }
                   
                   }
                     if(count<5){

                      const read="";
                              noteP.textContent=notePTemp;

                     }
                   


             const notename_InsideReveal=document.getElementById("notesName>RevealedNote");
          read.addEventListener("click",function(){
            pOfReveal.textContent=notePTemp;
             RevealedNote.style.pointerEvents="auto";
                  RevealedNote.style.display="flex";
                  RevealedNote.style.zIndex= 103;
                 RevealedNote.style.opacity= 1;
             notename_InsideReveal.textContent= NotesObject.name+'\n';

          });


          


         

 

                      


      
           
         

 const noteNameVar= [...NotesObject.name];
           let namenoteTmp=NotesObject.name;
           note_nameP.textContent="";
          if(noteNameVar.length>8){
             
            for(let i=0;i<6;i++){

                note_nameP.textContent+=noteNameVar[i];

            }

               note_nameP.textContent+="...";

          }
          else{
            note_nameP.textContent=namenoteTmp;
          }

NoteContent.classList.remove("notecontentAnimation-reverse");
NoteInformations.classList.remove("noteInfoAnimation-reverse");


NoteContent.classList.remove("notecontentAnimation");
NoteInformations.classList.remove("noteInfoAnimation");


     NoteInformations.classList.remove("showNotEinfo");
          NoteInformations.classList.add("hideNotEinfo");
          NoteContent.style.pointerEvents="none";
          NoteInformations.style.pointerEvents="none";

            if(typeof delete_task !== 'undefined') delete_task.play();

                
             AllNotes.push(Note);
             IncrementTodayActivity("notes");

return NotesObject;

}


export{CreateNote}

