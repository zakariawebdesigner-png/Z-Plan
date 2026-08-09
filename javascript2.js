    const h1=document.getElementById("h1");
    const task_info=document.getElementById("task-informations");
    const creation=document.getElementById("creation");
    const pop_up_sound=new Audio("sound/pop-up.wav");
        const done_task=new Audio("sound/done-task.mp3");
        const alert_sound= new Audio("sound/alert.wav");
         const delete_alert=document.getElementById("delete-alert2");
const alert_message=document.getElementById("alert");
const yes=document.getElementById("yes");
const no=document.getElementById("no");
const arrow=document.getElementById("arrow");
const arrow_div=document.getElementById("arrow-div");
const search_and_pic=document.getElementById("search-and-pic");
const Salu=document.getElementById("Salutate-notes");
const head=document.getElementById("head-part");

          const delete_all=document.getElementById("delete-all");
const no_completed_text=document.getElementById("no-completed-text");
const x_sign=document.getElementById("x-sign");
    const priority=document.getElementById("priority-select");
    const task_name=document.getElementById("name-task");
     const date_inpute=document.getElementById("date-input");
      const tasks_space=document.getElementById("tasks-space");
     const missions_container=document.getElementById("missions-container-id");
         const delete_task=new Audio("sound/delete-task.mp3");
        const create=document.getElementById("create");
        const pop_up_leave_sound=new Audio("sound/pop-leave.mp3");
    const  completed_missions_list=document.getElementById("completed-missions-list");

   const missions_container_2=document.getElementById("missions-container-2");/*this removes the auto margin at the page load*/
history.scrollRestoration = "manual";              
/*this removes the auto margin at the page load*/
const SettingsBar=document.getElementById("SettingsBar");
const gearBtn= document.getElementById("gearBtn");
  const appearenceChoices = document.querySelectorAll(".appearenceChoices");
const Profile_settingsPart= document.getElementById("Profile-settingsPart");
const ProfileSettings_arrow= document.getElementById("ProfileSettings-arrow");
const  Profile= document.getElementById("Profile");
const  ProQuick_Editsfile= document.getElementById("Quick-Edits");
const  QuickProfileSettings_Popup= document.getElementById("QuickProfileSettings-Popup");
const  right_arrow= document.getElementById("right-arrow");
const  left_arrow= document.getElementById("left-arrow");
const  avatarGroup2= document.getElementById("avatarGroup2");
const  avatarGroup1= document.getElementById("avatarGroup1");
const Choosen_Avatar= document.getElementById("Choosen-Avatar");
const calme= document.querySelector(".calmP");
const cards= document.querySelectorAll(".card");
const energetic= document.querySelector(".energeticP");
const professional= document.querySelector(".professionalP");
const friendly= document.querySelector(".friendlyP");

 const Calmevoice=new Audio("sound/Ai-commentatories/Calm-voice.mp3");
 const energeticVoice=new Audio("sound/Ai-commentatories/Energitic-voice.mp3");
 const professionalVoice=new Audio("sound/Ai-commentatories/professional-voice.mp3");
 const friendlyVoice=new Audio("sound/Ai-commentatories/Friendlly-voice.mp3");



let editingMission=null;


    document.body.classList.add("lightMode");

      const profile= document.getElementById("profile");
      
let Actual_MissionsArray=[];




   
window.addEventListener("load",()=>{  


  Actual_MissionsArray=JSON.parse(localStorage.getItem("Actual_MissionsArray")) || [];

  Actual_MissionsArray.forEach(Actualmission=>{
        Createmission(Actualmission);
  });

//From(70 to 71) Provides the profile avatar from deletion whene refreshing the page 
          profile.style.backgroundImage=localStorage.getItem("ProfilePhoto");

       
});
  


   window.addEventListener("scroll",()=>{

    if(window.scrollY>0){

     head.classList.add("glass");

    }
    else{

     head.classList.remove("glass");


    }


   });



   const TodaysTasks=document.getElementById("TodaysTasks");
   const DailyTasks=document.getElementById("DailyTasks");
   const iSwitch=document.getElementById("iSwitch");
   
   const SortSelect_and_arrow=document.getElementById("SortSelect-and-arrow");
      const SortList=document.getElementById("SortList");
      const optionSorts=document.querySelectorAll(".option");


    SortSelect_and_arrow.addEventListener("click",()=>{
          
      SortList.classList.toggle("Togglebb");

    });
optionSorts.forEach(optionSort=>{
optionSort.addEventListener("click",()=>{


SortList.classList.toggle("Togglebb");

});

});




 
let item;
   avatarGroup1.addEventListener("click",(e)=>{
   item= e.target.closest(".Avatar");

       const style=getComputedStyle(item);
       const bg= style.backgroundImage;

Choosen_Avatar.style.backgroundImage=bg;
         
Choosen_Avatar.style.backgroundSize="contain";
Choosen_Avatar.style.backgroundRepeat="no-repeat";

Choosen_Avatar.style.backgroundPosition="center";
 
   localStorage.setItem("ProfilePhoto",bg);
profileOf_Header.style.backgroundImage=bg;

});



     
let voiceClicked;
cards.forEach(card=>{
            card.addEventListener("click",()=>{
               voiceClicked=true;
        cards.forEach(c=>{
                  c.classList.remove("animateVoice-cards");
                  c.style.backgroundColor="";

        });

     
            card.classList.add("animateVoice-cards");
            if(card.id=="calme"){
            card.style.backgroundColor="#0a65ab";
                voice=Calmevoice;
                 AiVoice(voice);
                 friendlyVoice.pause();
                          energeticVoice.pause();
                 professionalVoice.pause();
            }
               else if(card.id=="friendly"){
            card.style.backgroundColor="#dffa136e";
            
                           voice=friendlyVoice;
                 AiVoice(voice);
                  energeticVoice.pause();
                 professionalVoice.pause();
                 Calmevoice.pause();
            }
                else if(card.id=="energetic"){
            card.style.backgroundColor="#ff0fc36c";
                   voice=energeticVoice;
                 AiVoice(voice);
                           friendlyVoice.pause();
                 professionalVoice.pause();
                 Calmevoice.pause();
            }
             else if(card.id=="professional"){
            card.style.backgroundColor="#fc831271";
                                  voice=professionalVoice;
                 AiVoice(voice);
                   friendlyVoice.pause();
                          energeticVoice.pause();
                 Calmevoice.pause();
            }
              
              
            card.style.color="black";
           

      

     });


});





 








let position=0;
const step=7;
const maxPosition = (6.8)*step;
right_arrow.addEventListener("click",()=>{
position += step;
  if (position >= maxPosition) {
    position = maxPosition;
    right_arrow.disabled = true;
  }

  left_arrow.disabled = false;
avatarGroup1.style.transform=`translate(-${position}rem)`;

});

left_arrow.addEventListener("click",()=>{
position-=step;
if(position<0) position=0;
if (position <= 0) {
    position = 0;
    left_arrow.disabled = true;
  }

  right_arrow.disabled = false;
avatarGroup1.style.transform=`translate(-${position}rem)`;

});

   
const deleteQuikProfil_informations=document.getElementById("deleteQuikProfil-informations");
const name=document.getElementById("name");
const surename=document.getElementById("surename");
const saveQuikProfil_informations=document.getElementById("saveQuikProfil-informations");


deleteQuikProfil_informations.addEventListener("click",()=>{

  name.value="";
    surename.value="";
 
    Choosen_Avatar.style.backgroundImage="";
    cards.forEach(card=>{
            card.classList.remove("animateVoice-cards");
                  card.style.backgroundColor="";
    });
    


});

const changesDoneWindow=document.getElementById("changesWindow");

saveQuikProfil_informations.addEventListener("click",()=>{



       if(name.value!="" && item.backgroundImage!="" && voiceClicked==true ){
          username=name.value;
    localStorage.setItem("username", username);
    h1.textContent="Good AfterNoon "+`${username}`;

   
       profile.style.backgroundImage=localStorage.getItem("ProfilePhoto");

                         changesDoneWindow.style.display="flex";

               changesDoneWindow.classList.remove("changesWindowAnimate");
          changesDoneWindow.classList.remove("changesWindowAnimate2");

         void changesDoneWindow.offsetWidth;

          changesDoneWindow.classList.add("changesWindowAnimate");
          changesDoneWindow.classList.add("changesWindowAnimate2");
     setTimeout(() => {
    changesDoneWindow.classList.remove("changesWindowAnimate");

    changesDoneWindow.classList.add("changesWindowAnimate2");
}, 2000);


       }

 

});











gearBtn.addEventListener("click",()=>{

  SettingsBar.classList.toggle("SettingsAnimation");


});


 appearenceChoices.forEach(choice=>{

choice.addEventListener("click",()=>{
 

      appearenceChoices.forEach(c=>{
        
        c.classList.remove("choiceStyle");
           
      });
      choice.classList.add("choiceStyle");
      
  if(choice.textContent.toLowerCase()=="dark mode"){
   
    document.body.classList.remove("lightMode");

     document.body.classList.add("darkMode");
    
      

  }
  else if(choice.textContent.toLowerCase()=="light mode"){
            document.body.classList.add("lightMode");
            
            document.body.classList.remove("darkMode");
  }


});
 });


const toolTip= document.getElementById("toolTip");
const toolTipGear= document.getElementById("toolTipGear");

profile.addEventListener("mouseenter",()=>{

toolTip.classList.add("appearTooltip");


});

profile.addEventListener("mouseleave",()=>{

toolTip.classList.remove("appearTooltip");


});

gearBtn.addEventListener("mouseenter",()=>{

toolTipGear.classList.add("appearTooltipGear");


});
gearBtn.addEventListener("mouseleave",()=>{

toolTipGear.classList.remove("appearTooltipGear");


});



profile.addEventListener("click",()=>{

   Profile_settingsPart.classList.toggle("Profile-SettingsAnimation");
  /* overlay.classList.add("active");*/

});


ProfileSettings_arrow.addEventListener("click",()=>{
  overlay.classList.remove("active");
   Profile_settingsPart.classList.toggle("Profile-SettingsAnimation");

});





       
          


    username = localStorage.getItem("username");
   h1.textContent="Hello "+ `${username}`;


 

  creation.addEventListener("click",function(){
    
         overlay.classList.add("active");
        task_info.classList.remove("hide");
  
       task_info.classList.add("show");
      pop_up_sound.play();
      task_info.style.pointerEvents="auto";

      task_name.value="";
      date_inpute.value="";
     
  });




 const overlay= document.getElementById("overlay");
const head_part= document.getElementById("head-part");

ProQuick_Editsfile.addEventListener("click",()=>{
head_part.style.zIndex="9999";
QuickProfileSettings_Popup.style.display="flex";
Profile_settingsPart.classList.toggle("Profile-SettingsAnimation");

overlay.classList.toggle("active");
document.body.style.overflow="hidden";

});

  const delete_PopUp_QuickProfile_info= document.getElementById("delete-alert4");

delete_PopUp_QuickProfile_info.addEventListener("click",()=>{

QuickProfileSettings_Popup.style.display="none";
overlay.classList.toggle("active");
document.body.style.overflowY="auto";

});


 
        
task_info.addEventListener("submit",function(e){

  e.preventDefault();

  
       
      
   overlay.classList.remove("active");


   if(editingMission){
    task_info.classList.remove("show");
        task_info.classList.add("hide");
        task_info.style.pointerEvents = "none";
        pop_up_leave_sound.play();

     const m=editingMission;

   const  mName= m.querySelector(".mission-name");
  const mType= m.querySelector(".Type-div");
  
      const dateTime=date_inpute.value;

  const   mdate= m.querySelector(".dateP");
  const   mtime= m.querySelector(".timeP");

const [date, time] = dateTime.split("T");

      mdate.textContent = "📅"+" "+date;
    mtime.textContent = "🕒"+" "+time;


   
   mName.textContent= task_name.value;
   mType.textContent= priority.value;
   


 if(priority.value == "High"){
          
    mName.style.color='white';
        mdate.style.color='white';
           mType.textContent="High";
     mType.classList.add("hightstyle");
             m.dataset.priority="High"; 

      
} 



       else if(priority.value=="Medium"){

           
                 mName.style.color='white';
        mdate.style.color='white';
        mType.textContent="Medium";
        mType.classList.add("mediumstyle");
        m.dataset.priority="Medium"; 
        }

else if(priority.value=="Low"){

           
            mName.style.color='white';
        mdate.style.color='white';
         mType.textContent="Low";
         mType.classList.add("lowstyle");
         m.dataset.priority="Low"; 
        }
          const idOfModified_Mission=Number(m.dataset.id);
          const missionsObj=Actual_MissionsArray.find(obj=>obj.id==idOfModified_Mission);
          missionsObj.title=task_name.value;
           missionsObj.priority=priority.value;
                missionsObj.date=date_inpute.value;


                      localStorage.setItem("Actual_MissionsArray",JSON.stringify(Actual_MissionsArray));

    editingMission=null;

    return;


   }
   


 let missionsObject={
      id: Date.now(),
      title:task_name.value,
      date: date_inpute.value,
      priority:priority.value,
      completed:false,
      paused:false
    };

    Createmission(missionsObject);

     
        
             Actual_MissionsArray.push(missionsObject);

             localStorage.setItem("Actual_MissionsArray",JSON.stringify(Actual_MissionsArray));


         task_info.classList.remove("show");

task_info.classList.add("hide");
    pop_up_leave_sound.play();
    task_info.style.pointerEvents="none";

 


HighCalculator();

   
     
 const Pending=document.getElementById("Pending");
     
      Pending.textContent= missions_container_2.children.length;



   
  

});




    

    
let voice;
function AiVoice(voice){
 
 setTimeout(() => {
  voice.currentTime = 0;
  voice.play();
}, 500); // 1000ms = 1 second
}



 let day_time= new Date();

 let time= day_time.getHours();



 if(time>=5 && time<=11){

    h1.textContent="Good Morning "+`${username}`;

 }

 else if(time>11 && time<=15){

    h1.textContent="Good AfterNoon "+`${username}`;


 }

 else if(time>15 && time<=19){

    h1.textContent="Good Eavening  "+`${username}`;

 }

 else{

        h1.textContent="Good Night   "+`${username}`;

 }


  const btn_delete=document.getElementById("btn-delete");


     btn_delete.addEventListener("click",function(){
      editingMission=null;
overlay.classList.toggle("active");
      task_info.classList.remove("show");
            task_info.classList.add("hide");
           task_info.style.pointerEvents="none";
            delete_task.play();

     });







let delete_all_isPressed=false;
delete_all.addEventListener("click",function(){

 

 delete_all_isPressed=!delete_all_isPressed;
             if(missions_container_2.children.length>0 || completed_missions_list.children.length>0  ){
                        overlay.classList.toggle("active");

                 alert_message.style.display="block";
                 alert_message.style.pointerEvents="auto";
                 alert_sound.currentTime=0;
                  alert_sound.play();
                   
               }

               else{
                alert_message.style.display="none";
                  alert_message.style.pointerEvents="none";
               
                      alert_sound.pause();

               }
              
                
                   

            
         });


    no.addEventListener("click",function(){
           overlay.classList.toggle("active");
           alert_message.style.display="none";
           alert_message.style.pointerEvents="none";

    });

     yes.addEventListener("click",function(){
      overlay.classList.toggle("active");
      alert_message.style.display="none";
      alert_message.style.pointerEvents="none";
                while(completed_missions_list.children.length!=0){
                    completed_missions_list.children[0].remove();
                    
            }
          
                completedMissionsVisibleState();

      while(missions_container_2.children.length!=0 ){
                    missions_container_2.children[0].remove();

            }
                completedMissionsVisibleState();
             

            

Pending.textContent=0;
                   High.textContent=0;
                   DoneTaskNum.textContent=0;
         
    });








delete_alert.addEventListener("click",function(){
                        overlay.classList.toggle("active");

alert_message.style.display="none";
 alert_message.style.pointerEvents="none";

});

  let isclicked=false;
 const searchBar= document.createElement("input");
 searchBar.type="search";
 searchBar.id="search-bar";
   search_and_pic.appendChild(searchBar);
   
     searchBar.className="search-bar";


arrow.addEventListener("click",function(){
 

if(!isclicked){
   arrow.classList.remove("vice-versa-arrow-animation");
     arrow.classList.add("arrow-animation");
   search_and_pic.classList.remove("move-input-reverse");
search_and_pic.classList.add("move-input");

}
else{
   arrow.classList.remove("arrow-animation");

   arrow.classList.add("vice-versa-arrow-animation");
search_and_pic.classList.remove("move-input");

search_and_pic.classList.add("move-input-reverse");

}
isclicked=!isclicked;


});



searchBar.addEventListener("keydown",function(event){
  if( event.key==="Enter"){

 
    const query=searchBar.value.toLowerCase().trim();
      const missions= completed_missions_list.querySelectorAll(".mission"); //this array was created to hold the missions inside the completed missions container in order to search about a specific mission by its name to reappend it again to missions container

  for(let i=0;i<missions.length;i++){
        const task=missions[i];
      const  delete_button=task.querySelector(".delete-button");
        delete_button.style.display = "flex"; 
      const name=task.querySelector(".mission-name").textContent.toLowerCase().trim();
        

         if(name===(query) ){
        
               missions_container_2.appendChild(task);
               task.style.pointerEvents="auto";
                
               
            
              
              let task_name2=task.querySelector(".mission-name");
               task_name2.style.textDecoration="none";
  
                 
                 const priority=task.dataset.priority;
  if(priority == "High"){
    
         task.classList.remove("change-background");
                  task.classList.add("high-priority-color");

      task_name2.style.color='white';
           }


       else if(priority=="Medium"){
            
                         task.classList.remove("change-background");

            task.classList.add("medium-priority-color");
                task_name2.style.color='white';
           }

else if(priority=="Low"){
  
            task.classList.remove("change-background");
                          task.classList.add("low-priority-color");

           task_name2.style.color='white';
                   
        }
                       
                              
          
          
         }
          
        
            completedMissionsVisibleState();
          }
          

      


      }

      Pending.textContent=missions_container_2.children.length;
       HighCalculator();
       DoneTaskNum.textContent=completed_missions_list.children.length;

});


     







  






 
function completedMissionsVisibleState(){

if(completed_missions_list.children.length==0){

                no_completed_text.style.display="block";
              x_sign.style.display="block";

     }

else{

                no_completed_text.style.display="none";
              x_sign.style.display="none";

     }

}


      function HighCalculator(){
 const High=document.getElementById("High");
     
    let Missions=missions_container_2.querySelectorAll(".mission");
       let HighCount=0;
          Missions.forEach(Mission=>{
               if(Mission.dataset.priority=="High"){
                  HighCount++;
               }
          });
          
      
    
        
     High.textContent= HighCount;



      }






function Createmission(missionsObject){

    const mission= document.createElement("div");
   const Type_div=document.createElement("div");
    
    Type_div.className="Type-div";
      

    

  const mission_components_holder1= document.createElement("div");

 
    const Type_Name_date_holder= document.createElement("div");
    
        mission_components_holder1.appendChild(Type_Name_date_holder);


    Type_Name_date_holder.className="Type-Name-date-holder";
   Type_Name_date_holder.classList.add("Type-Name-date-holder");

   mission_components_holder1.classList.add("mission-components-holder1");



       Type_Name_date_holder.appendChild(Type_div);
       
   mission.appendChild(mission_components_holder1);

  mission.className="mission";
   mission.classList.add("mission");
   
   

const mission_name= document.createElement("p");
   mission_name.classList.add("mission-name");
   mission_name.className="mission-name";
   Type_Name_date_holder.appendChild(mission_name);



 const mission_components_holder2= document.createElement("div");
  mission_components_holder2.className="mission-components-holder2";
   mission.appendChild(mission_components_holder2);

    const modifyDiv= document.createElement("div");

    modifyDiv.className="modifyTask"; 

     modify_i=document.createElement("i");

     modify_i.classList.add("fa-solid", "fa-pen");

      modifyDiv.appendChild(modify_i);

      const modifyDiv_text= document.createElement("p");
 
modifyDiv_text.textContent="Modify";
     modifyDiv.appendChild(modifyDiv_text);



  mission_components_holder2.appendChild(modifyDiv);

       
const delete_button= document.createElement("div");

           const delete_button_i= document.createElement("i");

      delete_button_i.classList.add("fa-solid" ,"fa-trash-can");
      delete_button_i.id="DeleteMissioniTag";
      delete_button.classList.add("delete-button");
      delete_button.appendChild(delete_button_i);

      const dleteTaskText= document.createElement("p");
 
dleteTaskText.textContent="Delete";
     delete_button.appendChild(dleteTaskText);
       mission_components_holder2.appendChild(delete_button);

    const PausedTask= document.createElement("div");

       PausedTask.className="PausedTask"; 

     mission_components_holder2.appendChild(PausedTask);

     
     const PausedTask_i = document.createElement("i");
    
     PausedTask_i.classList.add("fa-solid" , "fa-pause");
            PausedTask.appendChild(PausedTask_i);

        const PausedTaskText= document.createElement("p");
 
          PausedTaskText.textContent="Pause";
          PausedTask.appendChild(PausedTaskText);
    
       missions_container_2.appendChild(mission);


       
     
  

     
        

    const mission_date= document.createElement("mission-date");
const dateTime = missionsObject.date;

const [date, time] = dateTime.split("T");

         if(missionsObject.priority == "High"){
          
    mission_name.style.color='white';
        mission_date.style.color='white';
           Type_div.textContent="High";
     Type_div.classList.add("hightstyle");
      
} 



       else if(missionsObject.priority=="Medium"){

           
                 mission_name.style.color='white';
        mission_date.style.color='white';
        Type_div.textContent="Medium";
        Type_div.classList.add("mediumstyle");
        
        }

else if(missionsObject.priority=="Low"){

           
            mission_name.style.color='white';
        mission_date.style.color='white';
         Type_div.textContent="Low";
         Type_div.classList.add("lowstyle");
        }



       

mission.dataset.priority =missionsObject.priority;


  mission_name.textContent=missionsObject.title;
  mission_date.textContent=missionsObject.date;
mission_date.classList.add("mission-date");
      const dateP_time_div= document.createElement("div");
    dateP_time_div.className="dateP-time-div";
       

      const dateP= document.createElement("p");
        const timeP= document.createElement("p");

  dateP.textContent = "📅"+" "+date;
    timeP.textContent = "🕒"+" "+time;

dateP.className="dateP"; 
timeP.className="timeP"; 

    dateP_time_div.appendChild(dateP);
      dateP_time_div.appendChild(timeP);


      mission_components_holder1.appendChild(dateP_time_div);
dateP_time_div.className="dateP-time-div";

     
        const threeDotsOf_mission= document.createElement("i");
   threeDotsOf_mission.classList.add("fa-solid", "fa-ellipsis-vertical");
  
   threeDotsOf_mission.classList.add("threeDotsOf-mission");
   threeDotsOf_mission.id="threeDotsOf_mission";
     mission_components_holder1.appendChild(threeDotsOf_mission);

mission.dataset.id = missionsObject.id;

threeDotsOf_mission.addEventListener("click",(e)=>{
e.stopPropagation();
});



let clicked=false;

    mission.addEventListener("click",function(event){
    
               


                  if(event.target.closest(".delete-button")){
                 
                 const mission = event.target.closest(".mission");
                                              
                   const Mission_Id=Number(mission.dataset.id);
                              Actual_MissionsArray=Actual_MissionsArray.filter(m=>m.id !== Mission_Id);
                         localStorage.setItem("Actual_MissionsArray",JSON.stringify(Actual_MissionsArray));
                 
                 
                      mission.remove();

          
            
                 completedMissionsVisibleState();
               
                 return;
              }

              else if(event.target.closest(".modifyTask")){
                  
                  overlay.classList.toggle("active");
                     task_info.classList.remove("hide");
                   task_info.classList.add("show");
        
                   task_info.style.pointerEvents = "auto";
                          pop_up_sound.play();

                  
                     priority.value=mission.dataset.priority;


                    task_name.value=mission_name.textContent;
                   date_inpute.value=mission_date.textContent;
               
                  editingMission=mission;

                 return;
              }

               else if(event.target.closest(".PausedTask")){
                  

               
               
                 return;
              }


                   if(!clicked){
                           mission.style.pointerEvents="none";
                               delete_button.style.pointerEvents="auto";

                             }
                    clicked=!clicked;

                 

   
                      

             mission_name.style.textDecoration="line-through";

               done_task.currentTime="0";
                  done_task.play();
   
                     mission.classList.remove("high-priority-color");
                        mission.classList.remove("medium-priority-color");
                            mission.classList.remove("low-priority-color");
          
        mission.classList.add("change-background");
           




completed_missions_list.appendChild(mission);

      Pending.textContent=missions_container_2.children.length;
       const DoneTaskNum=document.getElementById("DoneTaskNum");

     let DoneCount=completed_missions_list.children.length;
     
     
     DoneTaskNum.textContent=DoneCount;
       
           
delete_button.style.display="none";
    completedMissionsVisibleState();
    
    if(missions_container_2.children.length==0){
    AiVoice(voice);
 

}
HighCalculator();
    });











  }













/*window.addEventListener("load", function () {

const username = localStorage.getItem("username");
if (!username) return;

let hasSpoken = false;

function speakOnce() {
    if (hasSpoken) return;
    hasSpoken = true;

    const voices = speechSynthesis.getVoices();
    if (voices.length === 0) return;

    const speech = new SpeechSynthesisUtterance(
        "Hello " + username + ". Welcome to your tasks."
    );

    speech.voice =
        voices.find(v => v.name.toLowerCase().includes("david")) ||
        voices[0];

    speech.pitch = 0.4;
    speech.rate = 0.85;

    speechSynthesis.speak(speech);
}

speechSynthesis.onvoiceschanged = speakOnce;

// fallback (safe)
setTimeout(speakOnce, 500);

});*/
  



 