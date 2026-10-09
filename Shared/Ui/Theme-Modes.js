 

import { appearenceChoices } from "../../Dailly-Page-Folder/Javascript/Ui/RoutineElements.js";


 function StyleMode(choice){
    

choice.addEventListener("click",()=>{
 
console.log("hi");
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



 }


export{StyleMode}


