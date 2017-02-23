function init(){
var flags = document.getElementById("paisDates");
var jsoncountry='[{"nombre": "Australia","code":"+61", "image":"images/flags/flat/16/Australia.png"},'+
'{"nombre":"Canada","code":"+1","image":"images/flags/flat/16/Canada.png"},'+
'{"nombre":"China","code":"+86","image":"images/flags/flat/16/China.png"},'+
'{"nombre":"France","code": "+33", "image":"images/flags/flat/16/France.png"},'+
'{"nombre": "India","code": "+91","image":"images/flags/flat/16/India.png"},'+
'{"nombre": "Japan","code": "+81", "image":"images/flags/flat/16/Japan.png"},'+
'{"nombre": "Mexico","code": "+52", "image":"images/flags/flat/16/Mexico.png"},'+
'{"nombre": "Puerto Rico","code": "+1", "image":"images/flags/flat/16/Puerto-Rico.png"},'+
'{"nombre": "United Kingdom","code": "+44","image":"images/flags/flat/16/United-Kingdom.png"}]';


var paises = JSON.parse(jsoncountry);
var long = paises.length;
    //console.log(paises[5].image);

    for(var i=0; i<long;i++)
    {
        var html='<a href="signup.html"><li><img class="bandera" src='+paises[i].image+'>'+paises[i].nombre+
            '<span style="display:none;" class="codephone">'+paises[i].code+'</span></li></a>';
        flags.innerHTML += html;
    }
    
    var lis=document.getElementsByTagName("li");
    for(var i=0; i<lis.length;i++)
    {
       lis[i].addEventListener("click",onClick);
    }
    
}

function onClick(evt)
{
    var srcImage=evt.currentTarget.getElementsByClassName("bandera")[0].src;
    console.log(srcImage);
    var codeCountry=evt.currentTarget.getElementsByClassName("codephone")[0].textContent;

    localStorage.setItem("cImage",srcImage);
    localStorage.setItem("codesPhone",codeCountry);
}
