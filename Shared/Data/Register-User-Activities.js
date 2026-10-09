

export let ActivitiesArray=JSON.parse(localStorage.getItem("ActivitiesArray")) || [];


function CreateActivityObject(TheAction,TheObject){
      
let now = new Date();

               let   dateAndTime = now.toLocaleDateString() + " " +now.toLocaleTimeString([], {hour: "2-digit",minute: "2-digit"});

          const  ActivityObject={

                Action:TheAction,
              Name:TheObject.name,
              date: dateAndTime,
               PrifilePic:TheObject.ProfilePic
                     } ; 
                     
                  
    
       return ActivityObject;
}

export{CreateActivityObject}


