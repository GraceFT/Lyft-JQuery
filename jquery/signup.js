$(document).ready(init);
///////////////////////////////////////////INIT WITH SET INFO////////////////////////////////////////////
function init(){
    $('#btn-next').click(toDoAnAlert);
    $('#user-number').keyup(numberLong);
    /*$("#input").keydown(justNumbers)*/
    
    var imgSrc= $("#flag-country");
    var codePais= $("#code-country");
    var imagesC = localStorage.getItem("cImage");
    var codeC = localStorage.getItem("codesPhone");
    
    imgSrc.attr({"src":imagesC});
    codePais.text(codeC); 
}
///////////////////////////////////////////GET RANDOM NUMBER////////////////////////////////////////////
function getRandomArbitrary(min, max) {
 return Math.random() * ((max - min) + min)  
}
///////////////////////////////////////////Create an Alert////////////////////////////////////////////
function toDoAnAlert(){
    if(numberLong()==true){
        var number = getRandomArbitrary(100,900);
        var completeCode= "LAB-" + Math.floor(number);
        localStorage.setItem('avatarNumb',completeCode);
        alert("Your code: " + completeCode);
        var next= $("#btn-next");
        next.attr("href","info-user.html");
    }
}
///////////////////////////////////////////Validate input phone-number////////////////////////////////////////////
function numberLong(){
    var userNumber = $("#user-number");
    var isVal= false;
    if(userNumber.val().match(/([0-9]+)/) && userNumber.val().length >= 9){
        $("#avise").html('<span style="color:green; font-size:11px; font-style:italic;">Correct Number</span>');
        localStorage.setItem('phone',userNumber.val());
        isVal=true;
    }else{
         $("#avise").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your phone number</span>');
        isVal= false;
    }
    return isVal;
}
///////////////////////////////////////////VALIDATE LASTNAME////////////////////////////////////////////
/* function justNumbers(){
    if(event.keyCode<45||event.keyCode>57)
        event.preventDefault();
}
    */