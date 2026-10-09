

export let Actual_MissionsArray=[];

 function DataRegister(){

    localStorage.setItem("Actual_MissionsArray",JSON.stringify(Actual_MissionsArray));

 }



 function LoadMission(){

      const savedMissions = localStorage.getItem("Actual_MissionsArray");

  if (!savedMissions) return;

  Actual_MissionsArray = JSON.parse(savedMissions);
 }







 function RemoveMission(Mission_Id){

     Actual_MissionsArray=Actual_MissionsArray.filter(m=>m.id !== Mission_Id);
                 localStorage.setItem("Actual_MissionsArray",JSON.stringify(Actual_MissionsArray));
                 

 }


 
 function RemoveMissionsAll(){
     Actual_MissionsArray=[];
                 localStorage.setItem("Actual_MissionsArray",JSON.stringify(Actual_MissionsArray));
                 console.log("After:",localStorage.getItem("Actual_MissionsArray"));

 }





 export{RemoveMission,LoadMission,DataRegister,RemoveMissionsAll}