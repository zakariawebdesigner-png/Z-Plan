



    


import {  DefaultStatistics } from "./Shared/Data/User-Statistics-file.js";
const  options_container= document.getElementById("options-container");
const btn_delete2= document.getElementById("btn-delete2");
const  addNote_btn= document.getElementById("addNote-btn");
const  Personal= document.getElementById("Personal");
const  Work= document.getElementById("Work");
const  Ideas= document.getElementById("Ideas");
const  Cancelbtn= document.getElementById("Cancelbtn");
const  Continuebtn= document.getElementById("Continuebtn");

const Reset= document.getElementById("Reset");
const Confirm= document.getElementById("Confirm");
const backarrow= document.getElementById("backarrow");

const placeholder="Type here";

  const delete_alert3 = document.getElementById("delete-alert3");
   const delte = document.getElementById("delte");
  

 import { CreateNote } from "./Notes-Folder/CreateNote.js";

   
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

let NotesArray=[];
let SavedNotes;
window.addEventListener("load",()=>{


   NotesArray=JSON.parse(localStorage.getItem("NotesArray"))|| [];
   if(NotesArray.length==0)return;


   NotesArray.forEach(obj=>{
         CreateNote(obj); 
   });
   
   

if(NotesArray==null)NotesArray=[];

});
import { CountNotesPerType } from "./Notes-Folder/Count-Notes-Types.js";
import {allnotes_num, pined_num,Work_num,Ideas_num,Personal_num } from "./Notes-Folder/NotesElements.js";
import { Return_UserData,Register_UserData, TemplateStatistics } from "./Shared/Data/UsersData-Manipulation.js";
import {noteName, the_content,datetime_local, NoteContent, NoteInformations, RevealedNote, select, Notes_holder  } from "./Notes-Folder/NotesElements.js";

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





let NoteToEdite;
export let   AllNotes=[];
import { CreateActivityObject } from "./Shared/Data/Register-User-Activities.js";
import { ActivitiesArray } from "./Shared/Data/Register-User-Activities.js";
Confirm.addEventListener("click",function(){



  if(NoteToEdite){

    let N=NoteToEdite;
 

let Notebject=NotesArray.find(noteData=>noteData.id==N.dataset.id);

               
     

     Notebject.name=noteName.value;
      Notebject.date=datetime_local.value;
      Notebject.type=select.textContent;

     N.querySelector(".note-nameP").textContent=Notebject.name;

      N.querySelector(".note-creationDate").textContent= Notebject.date;
          
     N.querySelector(".noteTypeP").textContent=Notebject.type
                          
        
        NoteToEdite=null;
        
         localStorage.setItem("NotesArray",JSON.stringify(NotesArray));

      let obj=CreateActivityObject("modify a Note",Notebject);
   
ActivitiesArray.push(obj);

   localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));
        return;
      }





    


let noteData=CreateNote(SavedNotes); 

NotesArray.push(noteData);
   localStorage.setItem("NotesArray",JSON.stringify(NotesArray));


DefaultStatistics.NotesCreated+=1;

Return_UserData();
   Register_UserData();

   let Counters=CountNotesPerType();
                         

                    allnotes_num.textContent=Counters.notesCount;
pined_num.textContent=Counters.PinedCount;
Work_num.textContent=Counters.WorkCount;
Ideas_num.textContent=Counters.IdeasCount;
Personal_num.textContent=Counters.PersonalCount;

let obj=CreateActivityObject("Created a new Note",noteData);
    
     
  ActivitiesArray.push(obj);
  
     localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));
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

                  if(Notes_holder.children.length==0)return;


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
                                 
                      NotesArray.length=0;
                      localStorage.setItem("NotesArray",JSON.stringify(NotesArray));
                      
                          DefaultStatistics.NotesCreated=0;
                                    
                                TemplateStatistics.NotesCreated=0;
                                         Return_UserData();
                                  Register_UserData();

                             let obj= CreateActivityObject("Deleats All Notes", NotesArray);
                          
                           
                        ActivitiesArray.push(obj);
                        
                           localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));

     });


import { AppearInfo } from "./Notes-Folder/NotesInformationAppeear.js";
import { DeleteTheNote } from "./Notes-Folder/Delete-Note.js";
import { PinnTheNote } from "./Notes-Folder/PinneNote_function.js";



Notes_holder.addEventListener("click",(event)=>{

  if(Notes_holder.children.length==0)return;

const NoteClicked=event.target.closest(".Note");

if(!NoteClicked)return;


if(event.target.closest(".modify")){
AppearInfo();
NoteToEdite=NoteClicked;

}


else if(event.target.closest(".deleteNote")){



let NotesObject=NotesArray.find(obj=>obj.id==NoteClicked.dataset.id);


let obj=CreateActivityObject("Delete a Note",NotesObject);
ActivitiesArray.push(obj);

   localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));

DeleteTheNote(NotesObject,NotesArray,NoteClicked);

   DefaultStatistics.NotesCreated-=1;
                                    
         Return_UserData();
           Register_UserData();

          

 let Counters=CountNotesPerType();
                         

                    allnotes_num.textContent=Counters.notesCount;
pined_num.textContent=Counters.PinedCount;
Work_num.textContent=Counters.WorkCount;
Ideas_num.textContent=Counters.IdeasCount;
Personal_num.textContent=Counters.PersonalCount;


}



else if(event.target.closest(".PinnedBtn")){


let NotesObject=NotesArray.find(obj=>obj.id==NoteClicked.dataset.id);

PinnTheNote(NotesArray,NotesObject,NoteClicked);


let obj=CreateActivityObject("Pinned a Note",NotesObject);

ActivitiesArray.push(obj);

   localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));

}









});









