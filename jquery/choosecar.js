$(document).ready(init);
function init(){
var cars = '[{"nombre": "Line","time":"3", "image":"images/line.png", "description":"Shared, 2 riders max"},'+
'{"nombre": "Lyft","time":"3", "image":"images/lyft.png" , "description":"4 seats"},'+
'{"nombre": "Plus","time":"4", "image":"images/plus.png", "description":"6 seats"},'+
'{"nombre": "Premier","time":"3", "image":"images/premier.png", "description":"High-end, 4 seats"}]';

    
    var carsChoose = $('#list_cars');
    //console.log($('#list_cars'));
    
    var carsShip = $.parseJSON(cars);
    $.each(carsShip, function() 
    {
      var carsitos = '<div class=" cars_hover" id="item"><div class="content_cars"><img src='+this['image']+' alt="" class="img-responsive img_carro"></div><div><li class="car_name">'+this['nombre']+'</li><li><small class="car_descrip">'+this['description']+'</small></li></div><div class="cars_time text-center pull-right"><li>'+this['time']+'</li><small>min</small></div></div>';
      carsChoose.append(carsitos);
    });
  
    var lis = $(".cars_hover");
    $.each(lis,function(){
        $(this).on('click',onClick);
    });  
}

function onClick(evt)
{
    var carImage=$(evt.currentTarget).find(".img_carro").attr("src");
    var carName = $(evt.currentTarget).find(".car_name").text();
    var carDescrip = $(evt.currentTarget).find(".car_descrip").text();
    
    localStorage.setItem("carImage",carImage);
    localStorage.setItem("carName",carName);
    localStorage.setItem("carDescrip",carDescrip);
    
}


