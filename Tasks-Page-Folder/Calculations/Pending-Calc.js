import { missions_container_2, Pending } from "../Task-Elements.js";

 
   

   function PendingCalc(){
let  PendingNum=0;
       PendingNum=missions_container_2.children.length;
       console.log(PendingNum);
         Pending.textContent=PendingNum;
   }

   export{PendingCalc}