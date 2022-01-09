let email=document.getElementById("email");
function validate(){
    let regexp=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    if(regexp.test(email.value)){
        alert("Email ID is Valid")
        return true;
    }
    else{
        alert("Email ID is Invalid")
        return false;
    }
}