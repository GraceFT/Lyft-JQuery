$(function(){
    $("#name").keyup(validateName);
    $("#lastname").keyup(validateLastName);
    $("#email").keyup(validateEmail);
    $("#check").click(validateCheck);
})
function validateForm(){
/*validateName();
validateLastName();*/

    if (validateName() && validateLastName()&& validateEmail()&& validateCheck()){
        var next= $("#btn_next");
        next.attr("href","app.html");
        localStorage.setItem("nameUser",name.val());
        localStorage.setItem("lastnameUser",lastname.val());
        localStorage.setItem("emailUser",email.val());
    }
}
/*function upperCaseName(_id){
    var element=$(_id);
    element.val() = element.val().charAt(0).toUpperCase() + element.val().slice(1); 
}*/
function validateName(){
    var valiName = $("#name");
    var avise= $("#avise");
    var isName= false;
    if(valiName.val().length!=0 && valiName.val().length<30 && valiName.val().match(/^[a-zA-Z\s]*$/)){
        //upperCaseName("#name");
       avise.html('<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>');
        isName=true; 
    }else{
        avise.html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name and lastname</span>');
        isName=false; 
    }
    return isName;
}
function validateLastName(){
    var valiLast = $("#lastname");
    var avise= $("#avise");
    var isLastName= false;
    if(valiLast.val().length!=0 && valiLast.val().length<30 && valiLast.val().match(/^[a-zA-Z\s]*$/)){
        //upperCaseName("#lastname");
       avise.html('<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>');
        isLastName=true; 
    }else{
        avise.html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name and lastname</span>');
        isLastName=false; 
    }
    return isLastName;
}
function validateEmail(){
    var valiMail = $("#email");
    var avisemail= $("#avisemail");
    var isEmail= false;
    if(valiMail.val().length!=0 && valiMail.val().length<50 && valiMail.val().match(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/)){
        avisemail.html('<span style="color:green; font-size:11px; font-style:italic;">Validate Email</span>');
        isEmail=true; 
    }else{
        avisemail.html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your email</span>');
        isEmail=false;
    }
    return isEmail;
}
function validateCheck(){
    var check= $("#check");
    var checkdiv=$("#checkdiv");
    var isCheck= false;
    if(check.is(":checked")){
        checkdiv.html("");
        isCheck=true;
    }else{
        checkdiv.html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">You have to be accord with the terms</span>');
        isCheck=false;
    }
    return isCheck;
}