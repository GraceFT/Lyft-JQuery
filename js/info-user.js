function validateForm(){
/*validateName();
validateLastName();*/

    if (valName()==true && valLastName()==true&& valEmail()==true&& valCheck()){
        var next= document.getElementById("btn_next");
        next.href="app.html";
        localStorage.setItem("nameUser",name.value);
        localStorage.setItem("lastnameUser",lastname.value);
        localStorage.setItem("emailUser",email.value);
    }
}
//Uppercase
function upperCaseName(_id){
    var element=document.getElementById(_id);
    element.value = element.value.charAt(0).toUpperCase() + element.value.slice(1); 
}
function valName(){
    var valiName = document.getElementById("name");
    var isName= true;
    if(valiName.value.length!=0 && valiName.value.length<30 && valiName.value.match(/^[a-zA-Z\s]*$/)){
        upperCaseName("name");
       avise.innerHTML='<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>';
        return isName=true; 
    }else{
        avise.innerHTML='<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name and lastname</span>';
        return isName=false; 
    }
}
function valLastName(){
    var valiLast = document.getElementById("lastname");
    var isLastName= true;
    if(valiLast.value.length!=0 && valiLast.value.length<30 && valiLast.value.match(/^[a-zA-Z\s]*$/)){
        upperCaseName("lastname");
       avise.innerHTML='<span style="color:green; font-size:11px; font-style:italic;">Validate Name and Lastname</span>';
        return isLastName=true; 
    }else{
        avise.innerHTML='<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your name and lastname</span>';
        return isLastName=false; 
    }
}
function valEmail(){
    var valiMail = document.getElementById("email");
    var isEmail= true;
    if(valiMail.value.length!=0 && valiMail.value.length<50 && valiMail.value.match(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/)){
        avisemail.innerHTML='<span style="color:green; font-size:11px; font-style:italic;">Validate Email</span>';
        return isEmail=true; 
    }else{
        avisemail.innerHTML='<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your email</span>';
        return isEmail=false;
    }
}
function valCheck(){
    var check=document.getElementById("check");
    var isCheck= true;
    if(check.checked){
        checkdiv.innerHTML="";
        return isCheck=true;
    }else{
        checkdiv.innerHTML='<span style="color:#ff00bf; font-size:11px; font-style:italic;">You have to be accord with the terms</span>';
        return isCheck=false;
    }
    return isCheck;
}



/*
//validating name
function validateName(){
    var valName = document.getElementById("name").value;
    var validaName= true;
    if (valName!= ""){
        upperCaseName("name"); 
        if(!/([0-9]+)/.test(valName)){
        return true;
        }
    }
}
//validating lastname
function validateLastName(){
    var valLastName = document.getElementById("lastname").value;
    if (valLastName!= ""){
        upperCaseName("lastname"); 
        if(!/([0-9]+)/.test(valLastName)){
        return true;}    
    }
}
//validating email
function validateEmail(){
    var valEmail = document.getElementById("email").value;
    var text=/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    if(text.test(valEmail)){
        return true;
    }
}
function valCheck(){
    var check=document.getElementById("check");
    var isCheck= true;
    if(check.checked){
        return isCheck=true;
    }else{
        return isCheck=false;
    }
    return isCheck;
}*/