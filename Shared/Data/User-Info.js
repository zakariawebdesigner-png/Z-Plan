
 let Data={};

function  UserInformations(Name,Surname,Email,Password,Age,pic,Voice){

         Data={

             UserName:Name,
             UserSurname:Surname,
             name:Name,//This parameter was made specificaly for the function that creates the activity object  because it uses the parameter name. 
             UserEmail:Email,
             UserPassword:Password,
             UserAge:Age,
             ProfilePic:pic,
              AiVoice:Voice

              }


return Data;
}
export{UserInformations}