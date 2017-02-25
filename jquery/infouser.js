$(document).ready(init);
///////////////////////////////////////////ADDING EVENTS////////////////////////////////////////////
function init(){
    $("#name").keyup(validateName);
    $("#lastname").keyup(validateLastName);
    $("#email").keyup(validateEmail);
    $("#check").click(validateCheck);
    $("#button-next").click(validateForm);
}
///////////////////////////////////////////VALIDATE FORM////////////////////////////////////////////
function validateForm(){
validateName();
validateLastName();
validateEmail();
validateCheck();

    if (validateName() && validateLastName()&& validateEmail()&& validateCheck()){
        var next= $("#btn_next");
        next.attr("href","app.html");
        localStorage.setItem("nameUser",name.val());
        localStorage.setItem("lastnameUser",lastname.val());
        localStorage.setItem("emailUser",email.val());
    }
}
///////////////////////////////////////////UPPERCASE NAME////////////////////////////////////////////
function CapitaliseFirstLetter(_id) {
        var txt = _id.val().toLowerCase();
        _id.val(txt.replace(/^(.)|\s(.)/g, function($upperCase) {
        return $upperCase.toUpperCase(); }));
        }
///////////////////////////////////////////VALIDATE NAME////////////////////////////////////////////
function validateName(){
    var valiName = $("#name");
    var isName= false;
    if(valiName.val().length!=0 && valiName.val().length<30 && valiName.val().match(/^[a-zA-Z\s]*$/)){
        CapitaliseFirstLetter(valiName);
        $("#avise").html('<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>');
        isName=true; 
    }else{
        $("#avise").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name and lastname</span>');
        isName=false; 
    }
    return isName;
}
///////////////////////////////////////////VALIDATE LASTNAME////////////////////////////////////////////
function validateLastName(){
    var valiLast = $("#lastname");
    var isLastName= false;
    if(valiLast.val().length!=0 && valiLast.val().length<30 && valiLast.val().match(/^[a-zA-Z\s]*$/)){
        CapitaliseFirstLetter(valiLast);
       $("#avise").html('<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>');
        isLastName=true; 
    }else{
        $("#avise").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name and lastname</span>');
        isLastName=false; 
    }
    return isLastName;
}
///////////////////////////////////////////VALIDATE EMAIL////////////////////////////////////////////
function validateEmail(){
    var valiMail = $("#email");
    var isEmail= false;
    if(valiMail.val().length!=0 && valiMail.val().length<50 && valiMail.val().match(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/)){
        $("#avisemail").html('<span style="color:green; font-size:11px; font-style:italic;">Validate Email</span>');
        isEmail=true; 
    }else{
        $("#avisemail").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your email</span>');
        isEmail=false;
    }
    return isEmail;
}
///////////////////////////////////////////VALIDATE CHECKBOX////////////////////////////////////////////
function validateCheck(){
    var check= $("#check").is(":checked");
    var isCheck = false;
    //console.log(check);
    if(!check){
       $("#checkdiv").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">You have to be accord with the terms</span>');
        isCheck=false;
    }else{
        $("#checkdiv").empty();
        isCheck=true;
    }
    return isCheck;
}