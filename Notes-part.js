



    




const  options_container= document.getElementById("options-container");
const btn_delete2= document.getElementById("btn-delete2");
const  NoteInformations= document.getElementById("NoteInformations");
const  addNote_btn= document.getElementById("addNote-btn");
const  Personal= document.getElementById("Personal");
const  Work= document.getElementById("Work");
const  Ideas= document.getElementById("Ideas");
const  Cancelbtn= document.getElementById("Cancelbtn");
const  Continuebtn= document.getElementById("Continuebtn");
const  NoteContent= document.getElementById("NoteContent");
const noteName= document.getElementById("noteName");
const the_content= document.getElementById("the-content");
const Reset= document.getElementById("Reset");
const Confirm= document.getElementById("Confirm");
const backarrow= document.getElementById("backarrow");
const personal= document.getElementById("personal");

const Notes_div = document.getElementById("Notes-div");


const date_input = document.getElementById("date-input");
 
const name_task =document.getElementById("name-task");
const datetime_local =document.getElementById("datetime-local");
const Notes_holder = document.getElementById("Notes-holder");
const placeholder="Type here";
const RevealedNote = document.getElementById("RevealedNote");
 const pOfReveal = document.getElementById("pOfReveal");
  const delete_alert3 = document.getElementById("delete-alert3");
   const delte = document.getElementById("delte");
   const allnotes_num = document.getElementById("allnotes-num");
   const pined_num = document.getElementById("pined-num");
      const Work_num = document.getElementById("Work-num");
   const Ideas_num = document.getElementById("Ideas-num");
      const Personal_num = document.getElementById("personal-num");
    const select = document.getElementById("select");



   
      the_content.textContent=placeholder;
         the_content.style.fontFamily='Poppins,sans-serif';
                  the_content.style.fontSize="larger";
                  the_content.style.color="gray";


      let notesCount=0;
      let PinedCount=0;
      let IdeasCount=0;
      let WorkCount=0;
       let PersonalCount=0;

      allnotes_num.textContent=notesCount;
       pined_num.textContent=PinedCount;
              Personal_num.textContent=PersonalCount;
              Work_num.textContent=WorkCount;
               Ideas_num.textContent=IdeasCount;


   


addNote_btn.addEventListener("click",function(e){
  
         const overlay= document.getElementById("overlay");
      
          
the_content.textContent=placeholder;
     NoteContent.style.pointerEvents="all";
       
NoteInformations.classList.remove("hideNotEinfo");
          
     NoteInformations.style.pointerEvents="auto";
   NoteInformations.classList.add("showNotEinfo");
 
            if(typeof pop_up_sound !== 'undefined') pop_up_sound.play();
 
NoteInformations.style.opacity="1";
  overlay.classList.add("active");
     });




let NotesArray=[];

Confirm.addEventListener("click",function(){
  
    const overlay= document.getElementById("overlay");
      overlay.classList.remove("active");
             document.body.style.overflowY="auto";
                    notesCount+=1;
                      allnotes_num.textContent=notesCount;
                        
                  const Note =document.createElement("div");
                  Note.dataset.index=notesCount;
                      NotesArray.push(Note);
                  Note.className="Note";
                   

                  
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
                     note_nameP.textContent=noteName.value;
                     note_nameP.className="note-nameP";                        
                      
                       note_nameP.classList.add("note-nameP");
                    
                       
                  const noteTypeP=document.createElement("p");
                     noteTypeP.textContent=select.textContent;
                     if(select.textContent.toLowerCase()=="work"){
                      Note.dataset.type="work"; 
                               noteTypeP.style.color=" #4dab";
                               noteTypeP.style.fontSize="larger";
                       noteTypeP.style.fontWeight="600";
                       
                          WorkCount+=1;
                           Work_num.textContent=WorkCount;


                     }
                     else if(select.textContent.toLowerCase()=="ideas"){
                            Note.dataset.type="ideas"; 
                          noteTypeP.style.color=" #ffb347";
                          noteTypeP.style.fontSize="larger";
                                        noteTypeP.style.fontWeight="600";
                                        IdeasCount+=1;
                                      Ideas_num.textContent=IdeasCount;

                     }
                      else {
                        Note.dataset.type="personal"; 
                         noteTypeP.style.color=" #b388ff";
                         noteTypeP.style.fontSize="larger";
                       noteTypeP.style.fontWeight="600";
                          PersonalCount+=1;
                      Personal_num.textContent=PersonalCount;

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
                              noteP.textContent=the_content.textContent+'\n';
                                 
                              noteText.appendChild(noteP);
                        
                              
                               Note.appendChild(noteText);
                               Note.appendChild(lineNote2);
                          const date_input = document.getElementById("datetime-local");
                          const note_creationDate =document.createElement("p");
                                 
                          note_creationDate.className="note-creationDate";

                         note_creationDate.classList.add("note-creationDate");
                                 
                              note_creationDate.textContent=date_input.value;
                                const LastPart_OfNote=document.createElement("div");
                                LastPart_OfNote.classList.add("LastPart-OfNote");
                              Note.appendChild(LastPart_OfNote);

                                 LastPart_OfNote.appendChild(note_creationDate);
                    

                         note_creationDate.classList.add("note-creationDate");

                              

                                         const modify= document.createElement("div");
                            modify.classList.add("modify");
                            const modifyTag=document.createElement("i");
                            modifyTag.classList.add("fa-solid", "fa-pen");
                                  modify.appendChild(modifyTag);

                            LastPart_OfNote.appendChild(modify);
                            
                                 


                              
                            

                                     const deleteNote=document.createElement("div");
                                     deleteNote.classList.add("fa-solid", "fa-trash");
                                     deleteNote.classList.add("deleteNote");
                                     LastPart_OfNote.appendChild(deleteNote);
                                     
                                     

                                  deleteNote.addEventListener("click",()=>{
                                         const indexTemp=NotesArray.indexOf(Note);
                                         NotesArray.splice(indexTemp,1);
                                         Note.remove();
                                         
                                         if(noteTypeP.textContent.toLowerCase()=="personal"){
                                                    PersonalCount-=1;
                                                 Personal_num.textContent=PersonalCount;
                                         }
                                        
                                          if(noteTypeP.textContent.toLowerCase()=="work"){
                                                    WorkCount-=1;
                                                 Work_num.textContent=WorkCount;
                                         }
                                          if(noteTypeP.textContent.toLowerCase()=="ideas"){
                                                    IdeasCount-=1;
                                                 Ideas_num.textContent= IdeasCount;
                                         }
                                               
                                          if(NotePinned==true){
                                                     PinedCount-=1;
                                         pined_num.textContent=PinedCount; 
                                   
                                         }



                                    notesCount-=1;
                                         allnotes_num.textContent=notesCount;


                                  });

                                   const PinnedBtn=document.createElement("div");
                                    LastPart_OfNote.appendChild(PinnedBtn);
                                     PinnedBtn.classList.add("PinnedBtn");

                                       PinnedBtn.classList.add("fa-solid", "fa-thumbtack");
                                           
                                     
                                     let PinedIsClicked=false;
                                  
                                  const pinnedInsideNote=document.createElement("div");
                                     const iOfpineed=document.createElement("i");

                                iOfpineed.classList.add("fa-solid", "fa-thumbtack");
                                  pinnedInsideNote.appendChild(iOfpineed);

                                  pinnedInsideNote.classList.add("pinnedInsideNote");
                                       let NotePinned=false;
                                          let lastPinned=null;
                                  PinnedBtn.addEventListener("click",()=>{
                                       if(NotePinned==false){
                                                   lastPinned=null;

                                                    
                                            Note.dataset.pinn="true";
                                                for(let otherNote of NotesArray){
                                                 if(otherNote != Note  && otherNote.dataset.pinn==="true"){
                                                  lastPinned=otherNote;
                                                }
                                              
                                                }

                                                if(lastPinned){

                                                        Notes_holder.insertBefore(Note,lastPinned.nextSibling);

                                                }
                                                else{
                                                  Notes_holder.prepend(Note);
                                                }
                                               
                                                       

                                         PinedCount+=1;
                                         pined_num.textContent=PinedCount;
                                                  title_type.appendChild(pinnedInsideNote);
                                        pinnedInsideNote.style.display="block";
                                               NotePinned= true;


                                       }

                                       else{
                                          
                                          Note.dataset.pinn="false";
                                          let curentIndex=Number(Note.dataset.index);
                                             let nextNote;
                                            for(const otherNote of NotesArray){
                                            if(otherNote!=Note &&  otherNote.dataset.pinn != "true" &&   Number(otherNote.dataset.index)>Number(curentIndex)){

                                                      nextNote=otherNote;
                                                      break;
                                            }
                                          
                                           }
                                           if(nextNote){
                                                Notes_holder.insertBefore(Note,nextNote);

                                           }
                                           else{
                                                 Notes_holder.appendChild(Note);

                                           }
                                            

                                  
                                         PinedCount-=1;
                                         pined_num.textContent=PinedCount;
                                                  pinnedInsideNote.remove();
                                        pinnedInsideNote.style.display="none";
                                               NotePinned= false;

                                       }

                                  });

                            
                              
                                
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
             notename_InsideReveal.textContent= noteName.value+'\n';

          });


          


         

 

                      


      
           
         

 const noteNameVar= [...noteName.value];
           let namenoteTmp=noteName.value;
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
         });


          delete_alert3.addEventListener("click",function(){
          

                   RevealedNote.style.display="none";
                   RevealedNote.style.pointerEvents="none";

          });


const notes_arangement_div= document.getElementById("notes-arangement-div");


          
notes_arangement_div.addEventListener("click",(event)=>{
  const Type=event.target.closest(".personal");
    const Type2=event.target.closest(".Work");
  const Type3=event.target.closest(".ideas");

const Notes = document.querySelectorAll(".Note");
   
Notes.forEach(Note=>{
   if(Type){
        if(Note.dataset.type==="personal" ){
 
           Note.classList.toggle("snappingNote");
      
        }
   }
   else if(Type2){
          if(Note.dataset.type==="work"){
 
              Note.classList.toggle("snappingNote");
   
                    }
    }
     
    else if(Type3){

    
     if(Note.dataset.type==="ideas" ){
 
       Note.classList.toggle("snappingNote");
   
     }
    }
  });

         
  



});


         
           













 select.addEventListener("click",function(event){
  
    
       options_container.classList.remove("hide");

 options_container.classList.toggle("show");
  options_container.style.zIndex="10";
          
     });


     
Personal.addEventListener("click",function(){



   select.textContent="Personal";
    options_container.classList.remove("show");
   options_container.classList.add("hide");
     



     });
     


     Work.addEventListener("click",function(){


   select.textContent="Work";
    options_container.classList.remove("show");
   options_container.classList.add("hide");
     


     });
     


     Ideas.addEventListener("click",function(){


   select.textContent="Ideas";
    options_container.classList.remove("show");
   options_container.classList.add("hide");
     


     });
     


Continuebtn.addEventListener("click",function(){
    NoteContent.classList.remove("notecontentAnimation-reverse");
NoteInformations.classList.remove("noteInfoAnimation-reverse");
             
NoteContent.classList.add("notecontentAnimation");
NoteInformations.classList.add("noteInfoAnimation");
NoteInformations.style.pointerEvents="none";

});



   


btn_delete2.addEventListener("click",function(){
 
 document.body.style.overflowY="auto";
NoteContent.classList.remove("notecontentAnimation-reverse");
NoteInformations.classList.remove("noteInfoAnimation-reverse");
 
 
NoteContent.classList.remove("notecontentAnimation");
NoteInformations.classList.remove("noteInfoAnimation");
 
 
    NoteInformations.classList.remove("showNotEinfo");
         NoteInformations.classList.add("hideNotEinfo");
         NoteContent.style.pointerEvents="none";
         NoteInformations.style.pointerEvents="none";
 
           if(typeof delete_task !== 'undefined') delete_task.play();
              const overlay= document.getElementById("overlay");
      overlay.classList.remove("active");
            
 
    });

     

     
     Reset.addEventListener("click",function(){

                the_content.textContent=placeholder;
           

     });

Cancelbtn.addEventListener("click",function(){

                
             noteName.value="";
            datetime_local.value="";
           select.textContent="Choose a type";

     });
      




     backarrow.addEventListener("click",function(){


             NoteContent.classList.add("notecontentAnimation-reverse");
NoteInformations.classList.add("noteInfoAnimation-reverse");
NoteInformations.style.opacity="1";
NoteInformations.style.pointerEvents="all";



     });


      
delte.addEventListener("click",function(){


            while(Notes_holder.children.length!=0){
               Notes_holder.children[0].remove();

            }
                 PinedCount=0;
                 notesCount=0;
                PersonalCount=0;
                WorkCount=0;
                IdeasCount=0;
                  Personal_num.textContent=PersonalCount;
                      allnotes_num.textContent=notesCount;
                      Work_num.textContent=WorkCount;
                      Ideas_num.textContent=IdeasCount; 
                      pined_num.textContent=PinedCount; 

     });
















