$(function (){
var jsoncountry='[{"nombre": "Australia","code":"+61", "image":"images/flags/flat/16/Australia.png"},'+
'{"nombre":"Canada","code":"+1","image":"images/flags/flat/16/Canada.png"},'+
'{"nombre":"China","code":"+86","image":"images/flags/flat/16/China.png"},'+
'{"nombre":"France","code": "+33", "image":"images/flags/flat/16/France.png"},'+
'{"nombre": "India","code": "+91","image":"images/flags/flat/16/India.png"},'+
'{"nombre": "Japan","code": "+81", "image":"images/flags/flat/16/Japan.png"},'+
'{"nombre": "Mexico","code": "+52", "image":"images/flags/flat/16/Mexico.png"},'+
'{"nombre": "Puerto Rico","code": "+1", "image":"images/flags/flat/16/Puerto-Rico.png"},'+
'{"nombre": "United Kingdom","code": "+44","image":"images/flags/flat/16/United-Kingdom.png"}]';

var flags = $("#paisDates");
var paises = $.parseJSON(jsoncountry);
    $.each(paises, function() 
    {
      var country = '<a href="signup.html"><li><img class="bandera" src='+this['image']+'>'+this['nombre']+
            '<span style="display:none;" class="codephone">'+this['code']+'</span></li></a>';
      flags.append(country);
    });
  
    var lis = $("li");
    $.each(lis,function(){
        $(this).on('click',onClick);
    });  
});

function onClick(evt)
{
    var srcImage=$(evt.currentTarget).find(".bandera").attr("src");
    //console.log(srcImage);
    var codeCountry=$(evt.currentTarget).find(".codephone").text();
    localStorage.setItem("cImage",srcImage);
    localStorage.setItem("codesPhone",codeCountry);
}