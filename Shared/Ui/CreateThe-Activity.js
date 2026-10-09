

import {DotsDiv,ActivityContainer } from "../../Profile-Folder/Profile-Elements.js";

function CreateActivity(ActivityObject,NumOfObjects){
  
 const PointContainer=document.createElement("div");

        PointContainer.className="PointContainer";

             DotsDiv.appendChild(PointContainer);
             
   


                     if(NumOfObjects>1){


                          const point=document.createElement("div");
                          point.className="point";

                         PointContainer.appendChild(point);


                           const lineOfActivity2=document.createElement("div");
                          lineOfActivity2.className="lineOfActivity2";

                         PointContainer.appendChild(lineOfActivity2);

                     


                              }

                      


  const activity=document.createElement("div");
                       activity.className="activity";

                     ActivityContainer.appendChild(activity);


                                    
  const ProfileInsideAct_Container=document.createElement("div");
                       ProfileInsideAct_Container.className="ProfileInsideAct-Container";
                          
                     activity.appendChild(ProfileInsideAct_Container);


                                  
  const ProfileInsideAct=document.createElement("div");
                       ProfileInsideAct.className="ProfileInsideAct";

                     ProfileInsideAct_Container.appendChild(ProfileInsideAct);




                  
  const textInsideAct=document.createElement("div");
                       textInsideAct.className="textInsideAct";

                     activity.appendChild(textInsideAct);



 
  const DateOfActivity=document.createElement("div");
                       DateOfActivity.className="DateOfActivity";

                    DateOfActivity.textContent=ActivityObject.date;


                     textInsideAct.appendChild(DateOfActivity);



                     
 
  const TheActivity=document.createElement("div");
                       TheActivity.className="TheActivity";
                         TheActivity.textContent=ActivityObject.Action;
                     textInsideAct.appendChild(TheActivity);



  const WhatsDone=document.createElement("div");
                       WhatsDone.className="WhatsDone";
                        if(ActivityObject.Name==""){

                           ProfileInsideAct_Container.style.backgroundImage=ActivityObject.PrifilePic;

                                    WhatsDone.textContent=`${ActivityObject.Name}`;
                      

                        }
                      
                         else{
                                            
                                 WhatsDone.textContent=`"${ActivityObject.Name}"`;

                                   if(ActivityObject.Action=="Change Username"){
                                       ProfileInsideAct_Container.style.backgroundImage=`url("../photos/correct-Sticker.png")`;
                                       
                                   }
                        


                             else if(ActivityObject.Action=="Deleats All Notes"){
                               ProfileInsideAct_Container.style.backgroundImage=`url("../photos/homme.png")`;
                                 
                             }

                             
                              else if(ActivityObject.Action=="Render as undone"){
                               ProfileInsideAct_Container.style.backgroundImage=`url("../photos/circulaire.png")`;
                                 
                             }

                             
                             else if(ActivityObject.Action=="Deleats All Tasks"){
                               ProfileInsideAct_Container.style.backgroundImage=`url("../photos/homme.png")`;
                                 
                             }

                             
                             else if(ActivityObject.Action=="Created a new Task"){
                               ProfileInsideAct_Container.style.backgroundImage=`url("../photos/AddedNotes-Sticker.jpg")`;
                                 
                             }

                             
                             else if(ActivityObject.Action=="Complete a task"){
                               ProfileInsideAct_Container.style.backgroundImage=`url("../photos/Correct.png")`;
                                 
                             }



                             else if(ActivityObject.Action=="Created a new Note"){
                               ProfileInsideAct_Container.style.backgroundImage=`url("../photos/NotesCreated.png")`;
                                 
                             }
                            

                                    else if(ActivityObject.Action=="modify a Note"){

                                        ProfileInsideAct_Container.style.backgroundImage=`url("../photos/circulaire.png")`;
                                 
                                      }
                                      
                                    else if(ActivityObject.Action=="Modified a Task"){

                                        ProfileInsideAct_Container.style.backgroundImage=`url("../photos/circulaire.png")`;
                                 
                                      }

                                       else if(ActivityObject.Action=="Delete a task"){

                                        ProfileInsideAct_Container.style.backgroundImage=`url("../photos/supprimer.png")`;
                                 
                                      }
                                      
                                      else if(ActivityObject.Action=="Delete a Note"){

                                             ProfileInsideAct_Container.style.backgroundImage =`url("../photos/supprimer.png")`;
                  
                                                 ProfileInsideAct_Container.style.backgroundSize = "10px 10px";
                                               ProfileInsideAct_Container.style.backgroundRepeat = "no-repeat";
                                               ProfileInsideAct_Container.style.backgroundPosition = "center";
                                                  }

                                                   else if(ActivityObject.Action=="Pinned a Note"){

                                                       ProfileInsideAct_Container.style.backgroundImage =`url("../photos/pinned.png")`;
                  
                                                               ProfileInsideAct_Container.style.backgroundSize = "10px 10px";
                                                               ProfileInsideAct_Container.style.backgroundRepeat = "no-repeat";
                                                              ProfileInsideAct_Container.style.backgroundPosition = "center";
                                                  }



                            




                        
                     textInsideAct.appendChild(WhatsDone);



}


   ProfileInsideAct_Container.style.width = "60px";
ProfileInsideAct_Container.style.height = "60px";
ProfileInsideAct_Container.style.backgroundSize = "cover";
ProfileInsideAct_Container.style.backgroundPosition = "center";
ProfileInsideAct_Container.style.backgroundRepeat = "no-repeat";


}

export{CreateActivity}