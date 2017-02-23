function init(){
    //console.log(init);
    var imgSrc= document.getElementById("flag-country");
    var codePais= document.getElementById("code-country");
    
    var imagesC = localStorage.getItem("cImage");
    var codeC = localStorage.getItem("codesPhone");
    
    imgSrc.src= imagesC;
    codePais.textContent= codeC;
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
        var next= document.getElementById("btn-next");
        next.href="info-user.html";
    }
}
function numberLong(){
    var userNumber = document.getElementById("user-number");
    var isVal= true;
    if(userNumber.value.length==0){
        avise.innerHTML='<span style="color:#ff00bf; font-size:11px; font-style:italic;">Complete with your phone number</span>';
        return isVal=false;
    }else{
        if(userNumber.value.length > 9 || userNumber.value.length < 6){
        avise.innerHTML='<span style="color:#ff00bf; font-size:11px; font-style:italic;">Put a number more than 6 digits and less than 9 digits</span>';
        return isVal= false;
        }else{
        avise.innerHTML='<span style="color:green; font-size:11px; font-style:italic;">Correct Number</span>'
        return isVal=true;
        }
    }
}


