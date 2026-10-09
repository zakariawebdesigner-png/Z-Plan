import { Notes_holder,pined_num } from "./NotesElements.js";
import { AllNotes } from "../Notes-part.js";

             

let lastPinned=null;
function PinnTheNote(NotesArray,NotesObject,NoteClicked){

   
                                  
    
                                      
                                    
                                      
                                           if(NotesObject.pinned==false &&  !NoteClicked.querySelector(".pinnedInsideNote")){
                                                      
                                               const pinnedInsideNote=document.createElement("div");
                                                pinnedInsideNote.className="pinnedInsideNote";
                                                       const iOfpineed=document.createElement("i");

                                                     iOfpineed.classList.add("fa-solid", "fa-thumbtack");
                                                       lastPinned=null;
    
                                                        
                                                
                                                
                                                    for(let otherNote of NotesArray){
                                                    console.log(otherNote);
                                                     if(otherNote !== NotesObject  && otherNote.pinned===true){
                                                                    
                                                          
                                                     lastPinned=AllNotes.find(Note=>Note.querySelector(".note-nameP").textContent== otherNote.name);
                                                    
                                                    }
                                                  
                                                    }
    
                                                    if(lastPinned){
                                                        
                                                          console.log("lastPinned");
    
                                                            Notes_holder.insertBefore(NoteClicked,lastPinned.nextSibling);
    
                                                    }
                                                    else{
                                                      Notes_holder.prepend(NoteClicked);
                                                     
                                                    }
                                                   
                                                           
    
                                             
                                              
                                                      pinnedInsideNote.appendChild(iOfpineed);

                                             pinnedInsideNote.classList.add("pinnedInsideNote");

                                                 const title_type=NoteClicked.querySelector(".title-type");
                                                      title_type.appendChild(pinnedInsideNote);
                                            pinnedInsideNote.style.display="block";
                                                  
                                                   NotesObject.pinned=true;
    
                                                      NoteClicked.dataset.pinned="true";
                                           }
    
                                           else{
                                              
                                            
                                              let curentIndex=Number(NoteClicked.dataset.index);
                                                 let nextNote;
                                                for(const otherNote of AllNotes){
                                                if(otherNote!==NoteClicked &&  otherNote.dataset.pinned !== "true" &&   Number(otherNote.dataset.index)>Number(curentIndex)){
                                                                     
                                                     
                                                            nextNote = otherNote;                                                       
                                                          break;
                                                }
                                              
                                               }
                                               if(nextNote){
                                                    Notes_holder.insertBefore(NoteClicked,nextNote);
                                               }
                                               else{
                                                     Notes_holder.appendChild(NoteClicked);
    
                                               }

                                               
                                                              

                                                      let pinnedInsideNote=NoteClicked.querySelector(".pinnedInsideNote");
                                                      if(pinnedInsideNote){
                                                              pinnedInsideNote.remove();
                                                               pinnedInsideNote.style.display="none";
                                                      }
                                                            
                                           
                                                 
                                                  
                                                   
                                                     NotesObject.pinned=false;
                                                    NoteClicked.dataset.pinned="false";
                                               
                                                
                                                   
                                           }
                                        
                                      
    
                                     
    
    
                                
}

export{PinnTheNote}