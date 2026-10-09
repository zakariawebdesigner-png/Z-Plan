 
export const h1 = document.getElementById("h1");
export const creation = document.getElementById("creation");

export const pop_up_sound = new Audio("sound/pop-up.wav");
export const done_task = new Audio("sound/done-task.mp3");
export const alert_sound = new Audio("sound/alert.wav");

export const delete_alert = document.getElementById("delete-alert2");
export const alert_message = document.getElementById("alert");
export const yes = document.getElementById("yes");
export const no = document.getElementById("no");

export const arrow = document.getElementById("arrow");
export const arrow_div = document.getElementById("arrow-div");
export const search_and_pic = document.getElementById("search-and-pic");
export const Salu = document.getElementById("Salutate-notes");
export const head = document.getElementById("head-part");

export const delete_all = document.getElementById("delete-all");
export const no_completed_text = document.getElementById("no-completed-text");
export const x_sign = document.getElementById("x-sign");

export const appearenceChoices = document.querySelectorAll(".appearenceChoices");


export const tasks_space = document.getElementById("tasks-space");
export const missions_container = document.getElementById("missions-container-id");

export const delete_task = new Audio("sound/delete-task.mp3");

export const create = document.getElementById("create");

export const pop_up_leave_sound = new Audio("sound/pop-leave.mp3");

export const completed_missions_list =document.getElementById("completed-missions-list");
export const SortList =document.getElementById("SortList");
export const SortSelect =document.getElementById("SortSelect");
export const Notes_holder=document.getElementById("Notes-holder");



export const DoneTaskNum = document.getElementById("DoneTaskNum");


export const High = document.getElementById("High");
export const Pending = document.getElementById("Pending");





    export const task_info=document.getElementById("task-informations");
export  const priority=document.getElementById("priority-select");
 export   const task_name=document.getElementById("name-task");
   export  const date_inpute=document.getElementById("date-input");
    export  const missions_container_2=document.getElementById("missions-container-2");/*this removes the auto margin at the page load*/

    export const SettingsBar = document.getElementById("SettingsBar");

export const gearBtn = document.getElementById("gearBtn");

export const profile = document.getElementById("profile");

export const overlay = document.getElementById("overlay");

export const Profile_settingsPart = document.getElementById("Profile-settingsPart");

export const ProfileSettings_arrow = document.getElementById("ProfileSettings-arrow");

export const Profile = document.getElementById("Profile");

export const ProQuick_Editsfile = document.getElementById("Quick-Edits");

export const QuickProfileSettings_Popup = document.getElementById("QuickProfileSettings-Popup");

export const right_arrow = document.getElementById("right-arrow");
export const bell = document.getElementById("bell");

export const left_arrow = document.getElementById("left-arrow");

export const avatarGroup2 = document.getElementById("avatarGroup2");

export const avatarGroup1 = document.getElementById("avatarGroup1");

export const Choosen_Avatar = document.getElementById("Choosen-Avatar");

export const calme = document.querySelector(".calmP");

export const cards = document.querySelectorAll(".card");

export const energetic = document.querySelector(".energeticP");

export const professional = document.querySelector(".professionalP");

export const friendly = document.querySelector(".friendlyP");

export const Calmevoice = new Audio("sound/Ai-commentatories/Calm-voice.mp3");

export const energeticVoice = new Audio("sound/Ai-commentatories/Energitic-voice.mp3");
  
export const professionalVoice = new Audio("sound/Ai-commentatories/professional-voice.mp3");

export const friendlyVoice = new Audio("sound/Ai-commentatories/Friendlly-voice.mp3");


export const voices = [
    { id: "calme", audio: Calmevoice },
    { id: "friendly", audio: friendlyVoice },
    { id: "energetic", audio: energeticVoice },
    { id: "professional", audio: professionalVoice }
];