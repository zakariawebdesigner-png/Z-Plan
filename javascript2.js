import {
    // First group
    h1,
    task_info,
    creation,
    delete_alert,
    alert_message,
    yes,
    no,
    arrow,
    search_and_pic,
  
    head,
    delete_all,

    priority,
    task_name,
    date_inpute,
  
    delete_task,
    pop_up_leave_sound,
    completed_missions_list,
    missions_container_2,

    // Second group
    SettingsBar,
    gearBtn,
    profile,
    overlay,
    Profile_settingsPart,
    ProfileSettings_arrow,
    ProQuick_Editsfile,
    QuickProfileSettings_Popup,
    right_arrow,
    left_arrow,
    avatarGroup1,
    Choosen_Avatar,
    cards,
    Calmevoice,
    energeticVoice,
    professionalVoice,
    friendlyVoice,
    High,
     
    DoneTaskNum
    

} from './Tasks-Page-Folder/Task-Elements.js';

import { RemoveMissionsAll } from './Tasks-Page-Folder/Data/Task-Manipulation.js';
import { DefaultStatistics} from './Shared/Data/User-Statistics-file.js';

import { HighCalculator } from './Tasks-Page-Folder/Calculations/High-Tasks-Num.js';
import { completedMissionsVisibleState } from './Tasks-Page-Folder/Ui/Visisbility-State.js';
import { Createmission } from './Tasks-Page-Folder/Ui/Create-Taks.js';
import { AiVoice } from './Tasks-Page-Folder/Ui/Ai-Voice.js';
import { PendingCalc } from './Tasks-Page-Folder/Calculations/Pending-Calc.js';

history.scrollRestoration = "manual";              

/*this removes the auto margin at the page load*/

let editingMission = null;
let username = localStorage.getItem("username");

import { Actual_MissionsArray, LoadMission } from './Tasks-Page-Folder/Data/Task-Manipulation.js';

import { Get_UserData } from './Shared/Data/UsersData-Manipulation.js';
import { PriorityColor } from './Tasks-Page-Folder/Ui/PriorityBackgroundColor.js';
import { SortSelect } from './Tasks-Page-Folder/Task-Elements.js';

import { SortAs } from './Tasks-Page-Folder/Ui/SortingMethod.js';

import {
    Register_UserData,
    Return_UserData,
    TemplateStatistics
} from './Shared/Data/UsersData-Manipulation.js';

let LastDay;

import { HundelTheClick } from './Tasks-Page-Folder/Ui/HandelClicks.js';
import { ActivitiesArray } from './Shared/Data/Register-User-Activities.js';

window.addEventListener("load", () => {  

console.log(ActivitiesArray);
    LoadMission();
    Get_UserData();

    if (!Actual_MissionsArray) return;
            
    Actual_MissionsArray.forEach(Actualmission => {

        let FunctionReturns = Createmission(Actualmission);

        if (Actualmission.completed == true) {

            completed_missions_list.appendChild(FunctionReturns.mission);
          
            FunctionReturns.mission.classList.add("change-background");

        }

        completedMissionsVisibleState();
       
    });


//From(70 to 71) Provides the profile avatar from deletion whene refreshing the page 
    profile.style.backgroundImage = localStorage.getItem("ProfilePhoto");

    let Today = new Date().setHours(0, 0, 0, 0);
            
    if (!TemplateStatistics.lastVisit) {
              
        TemplateStatistics.lastVisit = Today;
              
        TemplateStatistics.CurrentStreek = 1;

        Return_UserData();
        Register_UserData();
            
        return;
    }
             
    else {

        LastDay = new Date(TemplateStatistics.lastVisit).setHours(0, 0, 0, 0);

        console.log(LastDay);

        let DaysPased = (Today - LastDay) / (1000 * 60 * 60 * 24);

        console.log("DaysPased : ", DaysPased);

        if (DaysPased == 0) {

            TemplateStatistics.CurrentStreek = 1;

            Return_UserData();
            Register_UserData();

            console.log(TemplateStatistics);

            return;

        }

        else if (DaysPased == 1) {

            console.log("DaysPased : ", DaysPased);

            TemplateStatistics.CurrentStreek += 1;

            console.log(TemplateStatistics);

        }
             
        else {

            TemplateStatistics.CurrentStreek = 1;

            console.log(TemplateStatistics);

        }

    }
                      
    TemplateStatistics.lastVisit = Today;

    Return_UserData();
    Register_UserData();

});


window.addEventListener("scroll", () => {

    if (window.scrollY > 0) {

        head.classList.add("glass");

    }

    else {

        head.classList.remove("glass");

    }

});


const SortSelect_and_arrow = document.getElementById("SortSelect-and-arrow");
const SortList = document.getElementById("SortList");
const optionSorts = document.querySelectorAll(".option");


SortSelect_and_arrow.addEventListener("click", () => {

    SortList.classList.toggle("Togglebb");

});

optionSorts.forEach(optionSort => {

    optionSort.addEventListener("click", () => {

        SortList.classList.toggle("Togglebb");

    });

});


let item = null;
let profileOf_Header = null;

avatarGroup1.addEventListener("click", (e) => {

    item = e.target.closest(".Avatar");

    const style = getComputedStyle(item);
    const bg = style.backgroundImage;

    Choosen_Avatar.style.backgroundImage = bg;
         
    Choosen_Avatar.style.backgroundSize = "contain";
    Choosen_Avatar.style.backgroundRepeat = "no-repeat";
    Choosen_Avatar.style.backgroundPosition = "center";
 
    localStorage.setItem("ProfilePhoto", bg);


});


let voiceClicked;
import { voices } from './Tasks-Page-Folder/Task-Elements.js';
cards.forEach(card => {

    card.addEventListener("click", () => {

        voiceClicked = true;

        cards.forEach(c => {

            c.classList.remove("animateVoice-cards");
            c.style.backgroundColor = "";

        });

        card.classList.add("animateVoice-cards");

        if (card.id == "calme") {

            card.style.backgroundColor = "#0a65ab";

           let voice = voices.find(voice=>voice.id==card.id);

              
                let UserInfo_Object= JSON.parse(localStorage.getItem("UserInfo_Object"));
                
               UserInfo_Object.AiVoice=card.id;
               
               localStorage.setItem("UserInfo_Object",JSON.stringify(UserInfo_Object));
                AiVoice(voice.audio);
      console.log(UserInfo_Object);
            friendlyVoice.pause();
            energeticVoice.pause();
            professionalVoice.pause();

        }

        else if (card.id == "friendly") {

            card.style.backgroundColor = "#dffa136e";
            
            let voice = voices.find(voice=>voice.id==card.id);;

            AiVoice(voice.audio);

                let UserInfo_Object= JSON.parse(localStorage.getItem("UserInfo_Object"));
               UserInfo_Object.AiVoice=card.id;
               localStorage.setItem("UserInfo_Object",JSON.stringify(UserInfo_Object));
            energeticVoice.pause();
            professionalVoice.pause();
            Calmevoice.pause();

        }

        else if (card.id == "energetic") {

            card.style.backgroundColor = "#ff0fc36c";

            let voice = voices.find(voice=>voice.id==card.id);

            AiVoice(voice.audio);
                       let UserInfo_Object= JSON.parse(localStorage.getItem("UserInfo_Object"));
               UserInfo_Object.AiVoice=card.id;
               localStorage.setItem("UserInfo_Object",JSON.stringify(UserInfo_Object));
            friendlyVoice.pause();
            professionalVoice.pause();
            Calmevoice.pause();

        }

        else if (card.id == "professional") {

            card.style.backgroundColor = "#fc831271";

            let voice = voices.find(voice=>voice.id==card.id);

            AiVoice(voice.audio);
   let UserInfo_Object= JSON.parse(localStorage.getItem("UserInfo_Object"));
               UserInfo_Object.AiVoice=card.id;
               localStorage.setItem("UserInfo_Object",JSON.stringify(UserInfo_Object));
            friendlyVoice.pause();
            energeticVoice.pause();
            Calmevoice.pause();

        }
              
        card.style.color = "black";

    });

});


let position = 0;
const step = 7;
const maxPosition = (6.8) * step;

right_arrow.addEventListener("click", () => {

    position += step;

    if (position >= maxPosition) {

        position = maxPosition;
        right_arrow.disabled = true;

    }

    left_arrow.disabled = false;

    avatarGroup1.style.transform = `translate(-${position}rem)`;

});


left_arrow.addEventListener("click", () => {

    position -= step;

    if (position < 0) position = 0;

    if (position <= 0) {

        position = 0;
        left_arrow.disabled = true;

    }

    right_arrow.disabled = false;

    avatarGroup1.style.transform = `translate(-${position}rem)`;

});


const deleteQuikProfil_informations =
    document.getElementById("deleteQuikProfil-informations");

const name = document.getElementById("name");
const surename = document.getElementById("surename");

const saveQuikProfil_informations =
    document.getElementById("saveQuikProfil-informations");


deleteQuikProfil_informations.addEventListener("click", () => {

    name.value = "";
    surename.value = "";
 
    Choosen_Avatar.style.backgroundImage = "";

    cards.forEach(card => {

        card.classList.remove("animateVoice-cards");
        card.style.backgroundColor = "";

    });

});

import { UserInformations } from './Shared/Data/User-Info.js';
const changesDoneWindow = document.getElementById("changesWindow");

saveQuikProfil_informations.addEventListener("click", () => {

    if (name.value != "" && item && voiceClicked == true) {

        username = name.value;
       

        localStorage.setItem("username", username);

        h1.textContent = "Good AfterNoon " + `${username}`;

        profile.style.backgroundImage =localStorage.getItem("ProfilePhoto");

         


        changesDoneWindow.style.display = "flex";

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


const toolTip = document.getElementById("toolTip");
const toolTipGear = document.getElementById("toolTipGear");

profile.addEventListener("mouseenter", () => {

    toolTip.classList.add("appearTooltip");

});


import { CreateActivityObject } from './Shared/Data/Register-User-Activities.js';

name.addEventListener("blur",()=>{
let UserInfo_Object=null;
if(localStorage.getItem("UserInfo_Object")){
  UserInfo_Object=JSON.parse(localStorage.getItem("UserInfo_Object"));

}

        UserInfo_Object.name=name.value;
                UserInfo_Object.UserName=name.value;

        
        localStorage.setItem("UserInfo_Object",JSON.stringify(UserInfo_Object));

       let obj= CreateActivityObject("Change Username",UserInfo_Object);
         
           ActivitiesArray.push(obj);

        localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));

            

});


let AvatarArray=document.querySelectorAll(".Avatar");


AvatarArray.forEach(avatar=>{


avatar.addEventListener("click",()=>{

let UserInfo_Object=null;

if(JSON.parse(localStorage.getItem("UserInfo_Object"))){
  UserInfo_Object=JSON.parse(localStorage.getItem("UserInfo_Object"));

}
    
               
    const style = getComputedStyle(avatar);
    const bg = style.backgroundImage;
          console.log(UserInfo_Object);

        UserInfo_Object.ProfilePic=bg;
        localStorage.setItem("UserInfo_Object",JSON.stringify(UserInfo_Object));

        let obj=CreateActivityObject("Change Avatar",UserInfo_Object);
               obj.Name="";
         ActivitiesArray.push(obj);

                 localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));


});





});











profile.addEventListener("mouseleave", () => {

    toolTip.classList.remove("appearTooltip");

});


gearBtn.addEventListener("mouseenter", () => {

    toolTipGear.classList.add("appearTooltipGear");

});


gearBtn.addEventListener("mouseleave", () => {

    toolTipGear.classList.remove("appearTooltipGear");

});


gearBtn.addEventListener("click", () => {

    SettingsBar.classList.toggle("SettingsAnimation");
    overlay.classList.toggle("active");

});


profile.addEventListener("click", () => {

    Profile_settingsPart.classList.toggle("Profile-SettingsAnimation");
    overlay.classList.add("active");

});


ProfileSettings_arrow.addEventListener("click", () => {

    overlay.classList.remove("active");
    Profile_settingsPart.classList.toggle("Profile-SettingsAnimation");

});


import { appearenceChoices } from './Tasks-Page-Folder/Task-Elements.js'; 

import { StyleMode } from '../../Shared/Ui/Theme-Modes.js';

appearenceChoices.forEach(choice => {

    StyleMode(choice);

});


username = localStorage.getItem("username");

h1.textContent = "Hello " + `${username}`;


import { AppearMission_Form } from './Tasks-Page-Folder/Ui/Task-Info-Appearence.js';

let MissionObject = null;

creation.addEventListener("click", function() {

    AppearMission_Form();

});


const head_part = document.getElementById("head-part");

ProQuick_Editsfile.addEventListener("click", () => {

    head_part.style.zIndex = "9999";

    QuickProfileSettings_Popup.style.display = "flex";

    Profile_settingsPart.classList.toggle("Profile-SettingsAnimation");

    overlay.classList.add("active");

    

});



const delete_PopUp_QuickProfile_info =
    document.getElementById("delete-alert4");


delete_PopUp_QuickProfile_info.addEventListener("click", () => {

    QuickProfileSettings_Popup.style.display = "none";

    document.body.style.overflowY = "auto";
overlay.classList.remove("active");
});


export let Missions = null;




task_info.addEventListener("submit", function(e) {

    e.preventDefault();


    if (editingMission) {

        const m = editingMission;

        m.querySelector(".mission-name").textContent = task_name.value;

        m.dataset.priority = priority.value;

        const missionObject = Actual_MissionsArray.find(
            item => item.id === Number(m.dataset.id)
        );

        missionObject.name = task_name.value;
        missionObject.priority = priority.value;
        missionObject.date = date_inpute.value;

        const typeDiv = m.querySelector(".Type-div");
        const missionName = m.querySelector(".mission-name");
        const missionDate = m.querySelector(".dateP");

        typeDiv.classList.remove(
            "hightstyle",
            "mediumstyle",
            "lowstyle"
        );

        if (missions_container_2.children.length > 1) {
      
            let SortMethode = SortSelect.textContent.replace(" ", "-");
                     
            SortAs(SortMethode);
                           
        }


        PriorityColor(
            missionObject,
            typeDiv,
            missionName,
            missionDate
        );


        localStorage.setItem(
            "Actual_MissionsArray",
            JSON.stringify(Actual_MissionsArray)
        );


        HighCalculator();

        editingMission = null;

   
       let obj= CreateActivityObject("Modified a Task", missionObject);
    
     
  ActivitiesArray.push(obj);
  
     localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));
        return;

    }


    overlay.classList.remove("active");


    let FunctionsReturns = Createmission();

    if (!FunctionsReturns) return;
    
    DefaultStatistics.TaskesCreated += 1;
    DefaultStatistics.TottalTasks += 1;

    Return_UserData();
    Register_UserData();

    console.log(TemplateStatistics);


    MissionObject = FunctionsReturns.MissionObject;

    Missions = FunctionsReturns.mission;


    Actual_MissionsArray.push(MissionObject);
              
    localStorage.setItem("Actual_MissionsArray",JSON.stringify(Actual_MissionsArray));


    let SortMethode = SortSelect.textContent.replace(" ", "-");

    console.log(SortMethode);

    SortAs(SortMethode);

    task_info.classList.remove("show");

    task_info.classList.add("hide");

    pop_up_leave_sound.play();

    task_info.style.pointerEvents = "none";


    HighCalculator();


    PendingCalc();


       let obj= CreateActivityObject("Created a new Task", MissionObject);
    
     
  ActivitiesArray.push(obj);
  
     localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));
console.log(ActivitiesArray);
});


missions_container_2.addEventListener("click", (event) => {

    editingMission = HundelTheClick(event);
    let UserInfo_Object= JSON.parse(localStorage.getItem("UserInfo_Object"));
             if(!UserInfo_Object)return;
      let voiceId =UserInfo_Object.AiVoice;
      console.log(voiceId);

     let Ai_VoiceInDataBase  = voices.find(voice=>voice.id==voiceId);
console.log(Ai_VoiceInDataBase);

    if(missions_container_2.children.length==0)  AiVoice(Ai_VoiceInDataBase.audio);

    

});


completed_missions_list.addEventListener("click", (event) => {

    editingMission = HundelTheClick(event);


});


SortList.addEventListener("click", (event) => {

    let SortChoosen =
        event.target.closest("div").textContent.replace(" ", "-");

    SortSelect.textContent =
        event.target.closest("div").textContent;

    console.log(SortChoosen);

    SortAs(SortChoosen);

});


let day_time = new Date();

let time = day_time.getHours();


if (time >= 5 && time <= 11) {

    h1.textContent = "Good Morning " + `${username}`;

}

else if (time > 11 && time <= 15) {

    h1.textContent = "Good AfterNoon " + `${username}`;

}

else if (time > 15 && time <= 19) {

    h1.textContent = "Good Eavening  " + `${username}`;

}

else {

    h1.textContent = "Good Night   " + `${username}`;

}


const btn_delete = document.getElementById("btn-delete");


btn_delete.addEventListener("click", function() {

    editingMission = null;

    overlay.classList.toggle("active");

    task_info.classList.remove("show");

    task_info.classList.add("hide");

    task_info.style.pointerEvents = "none";

    delete_task.play();

});


delete_all.addEventListener("click", function() {

    overlay.classList.add("active");

    alert_message.style.display = "block";

    alert_message.style.pointerEvents = "auto";

});


no.addEventListener("click", function() {

    overlay.classList.toggle("active");

    alert_message.style.display = "none";

    alert_message.style.pointerEvents = "none";

});



yes.addEventListener("click", function() {

    overlay.classList.toggle("active");

    alert_message.style.display = "none";

    alert_message.style.pointerEvents = "none";


    while (completed_missions_list.children.length != 0) {

        completed_missions_list.children[0].remove();

    }


    completedMissionsVisibleState();


    while (missions_container_2.children.length != 0) {

        missions_container_2.children[0].remove();

    }


    RemoveMissionsAll();


    completedMissionsVisibleState();


    PendingCalc();

    High.textContent = 0;

    DoneTaskNum.textContent = 0;

    RemoveMissionsAll();


                Actual_MissionsArray.length=0;
              DefaultStatistics.TaskesCreated=0;
                                    
              TemplateStatistics.TaskesCreated=0;
               Return_UserData();
               Register_UserData();
          let obj= CreateActivityObject("Deleats All Tasks", Actual_MissionsArray);
                          
                           
           ActivitiesArray.push(obj);
               localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));


});


delete_alert.addEventListener("click", function() {

    overlay.classList.toggle("active");

    alert_message.style.display = "none";

    alert_message.style.pointerEvents = "none";

});


let isclicked = false;

const searchBar = document.createElement("input");

searchBar.type = "search";
searchBar.id = "search-bar";

search_and_pic.appendChild(searchBar);

searchBar.className = "search-bar";


arrow.addEventListener("click", function() {

    if (!isclicked) {

        arrow.classList.remove("vice-versa-arrow-animation");

        arrow.classList.add("arrow-animation");

        search_and_pic.classList.remove("move-input-reverse");

        search_and_pic.classList.add("move-input");

    }

    else {

        arrow.classList.remove("arrow-animation");

        arrow.classList.add("vice-versa-arrow-animation");

        search_and_pic.classList.remove("move-input");

        search_and_pic.classList.add("move-input-reverse");

    }

    isclicked = !isclicked;

});

import { DecrementTodayActivity } from './Shared/Data/User-Statistics-file.js';
searchBar.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {


        const query = searchBar.value.toLowerCase().trim();

        const missions =completed_missions_list.querySelectorAll(".mission");

    

        for (let i = 0; i < missions.length; i++) {
           let UndoneMission=Actual_MissionsArray.find(mission=>mission.id==missions[i].dataset.id);
           
                  UndoneMission.completed=false;
                     TemplateStatistics.DoneTasks-=1;
                        Return_UserData();
                              Register_UserData();
                              
                   localStorage.setItem("Actual_MissionsArray",JSON.stringify(Actual_MissionsArray));
                  console.log(Actual_MissionsArray);

            const task = missions[i];
                            
                      
            const delete_button =task.querySelector(".delete-button");

            delete_button.style.display = "flex";

            const name =task.querySelector(".mission-name").textContent.toLowerCase().trim();


            if (name === query) {

                missions_container_2.appendChild(task);

                task.style.pointerEvents = "auto";


                let task_name2 =
                    task.querySelector(".mission-name");

                task_name2.style.textDecoration = "none";


                const priority = task.dataset.priority;

                if (priority == "High") {

                    task.classList.remove("change-background");

                    task.classList.add("high-priority-color");

                    task_name2.style.color = 'white';

                }


                else if (priority == "Medium") {

                    task.classList.remove("change-background");

                    task.classList.add("medium-priority-color");

                    task_name2.style.color = 'white';

                }


                else if (priority == "Low") {

                    task.classList.remove("change-background");

                    task.classList.add("low-priority-color");

                    task_name2.style.color = 'white';

                }

            }


            completedMissionsVisibleState();

            DecrementTodayActivity("tasks");


       let taskObject=Actual_MissionsArray.find(obj=>obj.name==task.querySelector(".mission-name").textContent);
          console.log(taskObject);
  let obj= CreateActivityObject("Render as undone",taskObject);
                          
                           
                        ActivitiesArray.push(obj);
                        
                           localStorage.setItem("ActivitiesArray",JSON.stringify(ActivitiesArray));


        }


    }

    PendingCalc();

    HighCalculator();


    DoneTaskNum.textContent =
        completed_missions_list.children.length;

});


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


import { LocalStorageRelease } from './Tasks-Page-Folder/Ui/removeeLocal-storage.js';

LocalStorageRelease();