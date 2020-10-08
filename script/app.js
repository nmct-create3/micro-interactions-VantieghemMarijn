let email ,password = {},signInButton;
const lblemail=document.querySelector('.js-test');
const lblpassword=document.querySelector('.js-p');
function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    password=document.querySelector(".js-input");
    checkbox=document.querySelector(".js-checkbox");
    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            password.type="text"
        }else{
            password.type="password"
        }
    });
}
function getdomelements(){
    email=document.querySelector(".js-email");
    password["input"]=document.querySelector(".js-password");
    signInButton=document.querySelector(".js-sign-in-button")
    
    //console.log(email,password,signInButton);
    enableListeners();
}
function enableListeners(){
    email.addEventListener("blur",function(){
        //console.log("blur email");
        
        console.log(lblemail)
        
        if(isValidEmailAddress(email.value)){
            signInButton.disabled=false;
            //lblemail.classList.toggle("has-error")
        }else{
            signInButton.disabled=true;
            //lblemail.classList.toggle("has-error");
        }
        
    });
    password["input"].addEventListener("blur",function(){
        //console.log("blur password");
        console.log(lblpassword)
        if(isValidPassword(password.value)){
            signInButton.disabled=false;
            password.classList.remove("has-error")
        }else{
            signInButton.disabled=true;
            password.classList.add("has-error")
        }
    });
    signInButton.addEventListener("click",function(){
        
        console.log("sign in");
        if(isEmpty(password.value)&&isEmpty(email.value)){
            console.log("its guchi");
            
        }else{
            console.log("nono");
            signInButton.disabled=true;
        }
    });
}
const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress);
};
const isValidPassword = function(password){
    if(password.length>1){
        return true;
    }
    else{
        return false;
    }
}
const isEmpty = function(fieldValue) {
    if(fieldValue.length){
        return true;
        
    }else{
        return false;
    }
    
 };
document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    getdomelements();
});