 

     

import {
  ColorsContainer,
  colorBorder,
  Green,
  Blue,
  Yellow,
  Orange,
  Pink,
  DarkBlue
} from './RoutineElements.js';
   //this file Selectes the Color of the routine and return it




export let ReturnedColor="";

     function ChoosingColor(e){

                 
                   

            
const ColorsArray=[Green,Blue,Yellow,Orange,Pink,DarkBlue];



         
             let ChoosenColor=null;

                     if(ColorsArray.includes(e.target.closest("div"))){
                           ChoosenColor=e.target.closest("div");
                     }
                     else{
                      return;
                     }
        
           
                    if (!ChoosenColor || !ColorsArray.includes(ChoosenColor)) return;


           colorBorder.forEach((color)=>{
                    color.style.border="2px solid transparent";
           });
                    
           ChoosenColor.parentElement.style.border="2px solid rgb(0, 221, 255)";
if (ChoosenColor.classList.contains("Green")) {
    ReturnedColor = "linear-gradient(180deg, #66CFA2 0%, #78D8AE 50%, #8CE1BB 100%)";
}

if (ChoosenColor.classList.contains("Blue")) {
    ReturnedColor = "linear-gradient(180deg, #6BAEEB 0%, #7DBAF0 50%, #92C7F4 100%)";
}

if (ChoosenColor.classList.contains("Yellow")) {
    ReturnedColor = "linear-gradient(180deg, #E8C86A 0%, #EDD37F 50%, #F2DE97 100%)";
}

if (ChoosenColor.classList.contains("Orange")) {
    ReturnedColor = "linear-gradient(180deg, #E5A66E 0%, #EBB27F 50%, #F0BE94 100%)";
}

if (ChoosenColor.classList.contains("Pink")) {
    ReturnedColor = "linear-gradient(180deg, #D88DB0 0%, #E19BBC 50%, #E8A9C8 100%)";
}

if (ChoosenColor.classList.contains("DarkBlue")) {
    ReturnedColor = "linear-gradient(180deg, #6E7FC7 0%, #7E8ED0 50%, #90A0D9 100%)";
}







      
        
     }

    

export{ChoosingColor};

     