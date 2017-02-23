function a()
{
  var jsonp = '[{"nombre": "Australia","code":"+61", "image":"images/flags/flat/16/Australia.png"}]';
  var lang = '';
  var p = '';
  var obj = $.parseJSON(jsonp);
  $.each(obj, function() 
  {
      lang += '<a href="signup.html"><li><img class="bandera" src='+this['image']+'>'+this['nombre']+
            '<span style="display:none;" class="codephone">'+this['code'].code+'</span></li></a>'
          //'<li>' + this['nombre'] + '</li>';
      //p += this['ID'] + "<br/>";
  });
  $('#n').html(lang);
  //$('#n1').html(p);
}