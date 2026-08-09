


const submit_btn=document.getElementById("submit_btn");
const form=document.getElementById("form");
const email=document.getElementById("email");
const alert_message=document.getElementById("alert");
const alert_sound= new Audio("sound/alert.wav");
const delete_alert=document.getElementById("delete-alert");
const password=document.getElementById("password");
const alert_message2=document.getElementById("alert-password-length");
const delete_alert2=document.getElementById("delete-alert2");

const name=document.getElementById("name");
const surname=document.getElementById("surname");

submit_btn.addEventListener("mouseenter",function(event){
 submit_btn.style.width="45%";
  submit_btn.textContent="Lets go 🔥";

});
    submit_btn.addEventListener("mouseleave",function(event){
  
        submit_btn.textContent="Submit";
        submit_btn.style.width="35%";


     });



  form.addEventListener("submit",function(event){
             event.preventDefault();

      let username=name.value;
          let usersurname=surname.value;

         


      if(email.value.length==0){
    
        alert_message.style.display="block";
             alert_message2.style.zIndex="1";
       alert_sound.currentTime=0;
       alert_sound.play();
        
       
     }



   

       if(password.value.length<8){
    
       alert_message2.style.display="block";
          alert_message2.style.top="1rem";
          alert_message2.style.left="12rem";

          alert_message2.style.zIndex="2";

      alert_sound.play();
       /* alert("Password length must be at least 8 charachtors length!!!⚠️");
         */
   }

   
 

   if(password.value.length>=8  && email.value.length!=0){
localStorage.setItem("username", username);
window.location.href = 'pageLoad.html';
   
        
   }

   
});




delete_alert.addEventListener("click",function(){

alert_message.style.display="none";
});

delete_alert2.addEventListener("click",function(){
     
  alert_message2.style.display="none";
  
});



const RandomPass= document.getElementById("RandomPass");

RandomPass.addEventListener("click",()=>{



let randomnum=0;

  password.value="";
const Alphabet=["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","R","S","T","U","V","W","Y","Z"]
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*","(", ")", "-", "_", "=", "+","[", "]", "{", "}","|", ";", ":", "'", ",", ".", "<", ">", "/", "?","`", "~"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const allArray=[...Alphabet,...specialChars,...numbers];

   for(let i=0;i<20;i++){

         randomnum=Math.floor(Math.random()*allArray.length);


     password.value+=allArray[randomnum];
    




   }



});



 





