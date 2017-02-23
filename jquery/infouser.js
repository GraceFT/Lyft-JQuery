$(document).ready(init);

function init(){
    $("#name").keyup(validateName);
    $("#lastname").keyup(validateLastName);
    $("#email").keyup(validateEmail);
    $("#check").click(validateCheck);
    $("#button-next").click(validateForm);
}

function validateForm(){
validateName();
validateLastName();
validateEmail();
validateCheck();

    if (validateName() && validateLastName()&& validateEmail()&& validateCheck()){
        var next= $("#btn_next");
        next.attr("href","app.html");
        localStorage.setItem("nameUser",name);
        localStorage.setItem("lastnameUser",lastname.val());
        localStorage.setItem("emailUser",email.val());
    }
}
function upperCaseName(_id){
    if(_id.toLowerCase){
       $(_id).val() = $(_id).val().charAt(0).toUpperCase() + $(_id).val().slice(1);  
    } 
}
function validateName(){
    var valiName = $("#name");
    var isName= false;
    if(valiName.val().length!=0 && valiName.val().length<30 && valiName.val().match(/^[a-zA-Z\s]*$/)){
        upperCaseName(valiName);
       $("#avise").html('<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>');
        isName=true; 
    }else{
        $("#avise").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name and lastname</span>');
        isName=false; 
    }
    return isName;
}
function validateLastName(){
    var valiLast = $("#lastname");
    var isLastName= false;
    if(valiLast.val().length!=0 && valiLast.val().length<30 && valiLast.val().match(/^[a-zA-Z\s]*$/)){
        //upperCaseName("#lastname");
       $("#avise").html('<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>');
        isLastName=true; 
    }else{
        $("#avise").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name and lastname</span>');
        isLastName=false; 
    }
    return isLastName;
}
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