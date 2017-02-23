$(document).ready(init);


function init(){
    
    $('#btn-next').click(toDoAnAlert);
    $('#user-number').keyup(numberLong);
    var imgSrc= $("#flag-country");
    var codePais= $("#code-country");
    
    var imagesC = localStorage.getItem("cImage");
    var codeC = localStorage.getItem("codesPhone");
    
    imgSrc.attr({"src":imagesC});
    codePais.text(codeC);
    
}

function getRandomArbitrary(min, max) {
 return Math.random() * ((max - min) + min)  
}

function toDoAnAlert(){
    if(numberLong()==true){
       var code ="LAB-";
        var number = getRandomArbitrary(100,900);
        var completeCode= code + Math.floor(number);
        localStorage.setItem('avatarNumb',completeCode);
        alert("Your code: " + completeCode);
        var next= $("#btn-next");
        next.attr("href","info-user.html");
    }
}
function numberLong(){
    var userNumber = $("#user-number");
    var isVal= false;
    if(userNumber.val().match(/([0-9]+)/) && userNumber.val().length >= 9){
        $("#avise").html('<span style="color:green; font-size:11px; font-style:italic;">Correct Number</span>');
        isVal=true;
    }else{
         $("#avise").html('<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your phone number</span>');
        isVal= false;
    }
    return isVal;
}