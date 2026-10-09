import {
  arrowCategory,
  RoutinesCategory_input,
  Pray,
  Study,
  WorkCategory,
  Health,
  Sport,
  Others,
  PersonalCategory,
  CategoriesSoundClick,
  Prayer_Motivation
} from './RoutineElements.js';

function CategoryUiReaction(){


        
arrowCategory.addEventListener("click",()=>{

RoutinesCategory_input.click();

    
});




}
 let  CategorySticker=null ;





  function ChosenCategory(){

        Pray.addEventListener("click",()=>{
      
           RoutinesCategory_input.value="Prayer Category";
               
                          Prayer_Motivation.currentTime=0;
                          
                        Prayer_Motivation.play();
                        
                   CategorySticker="Mosk";
                        
                         
                           
          
      });

             
      
      Study.addEventListener("click",()=>{

                  RoutinesCategory_input.value="Study Category";
               CategorySticker="studySticker";

      });



      
      WorkCategory.addEventListener("click",()=>{


           RoutinesCategory_input.value="Work Category";

         CategorySticker="worksticker";
      });





      
      Health.addEventListener("click",()=>{

               RoutinesCategory_input.value="Health Category";

 CategorySticker="healthsticker";

        
      });





      
      Sport.addEventListener("click",()=>{

            RoutinesCategory_input.value="Sport Category";


 CategorySticker="sportsticker";
        
      });






      
      Others.addEventListener("click",()=>{

           RoutinesCategory_input.value="Others Category";

          CategorySticker="othersticker";
        
          
      });



       
      PersonalCategory.addEventListener("click",()=>{


            RoutinesCategory_input.value="Personal Category";

 CategorySticker="personalsticker";

        
      });



  }

//Inside the code above i made the sticker decision is based on strings and when i create the routine folder i will be using those strings to store and apply the stickers on the routine 

export{CategorySticker};


   const CategoriesArray=[Pray,WorkCategory,Sport,Study,Health,Others,PersonalCategory];
export let CheckingString="";

       CategoriesArray.forEach(Category=>{
             Category.dataset.clicked="false";
        Category.addEventListener("click",()=>{
                     CategoriesSoundClick.currentTime=0;
                   CategoriesSoundClick.play();
                           CheckingString=Category.dataset.clicked="true";
                       
              
            
                        });

                 });

                  function Categorychoosed(){
              let CategorychoosedTemp="";

              if(CheckingString=="true"){
                       CategorychoosedTemp="true";
                               
              }

              else{
              CategorychoosedTemp="false";
              }

              return CategorychoosedTemp;
                           
                         
                }



                function  DeleteCheckingString(){
                    CheckingString="false";
                }




export {ChosenCategory,CategoryUiReaction,Categorychoosed,DeleteCheckingString};
