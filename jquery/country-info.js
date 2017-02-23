$(document).ready(init);
    
function init(){
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
}

function onClick(evt)
{
    var srcImage=$(evt.currentTarget).find(".bandera").attr("src");
    //console.log(srcImage);
    var codeCountry=$(evt.currentTarget).find(".codephone").text();
    localStorage.setItem("cImage",srcImage);
    localStorage.setItem("codesPhone",codeCountry);
}