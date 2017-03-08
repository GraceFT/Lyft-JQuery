$(document).ready(init);

function init(){
        solicitarEstimado();
        validating();
        
}
////////TO GET THE CHOOSEN-CAR////////////////
function validating(){
    if (valLocalStorageImgCar() || valLocalStorageCarName()|| valLocalStorageCarDescrip())
    {
        $("#car_img").attr({'src': 'images/line.png'});
		$("#cars_name").text('Lyft');
		$("#cars_descrip").text('Fast ride, 4 seats');
	}
	else
	{
		$("#car_img").attr({'src': localStorage.getItem('carImage')});
		$("#cars_name").text(localStorage.getItem('carName'));
		$("#cars_descrip").text(localStorage.getItem('carDescrip'));
	   }
    }
    
    //********functions to validate the localstorage*******//
    function  valLocalStorageImgCar(){
        return(localStorage.getItem('carImage') == null);}

    function  valLocalStorageCarName(){
        return (localStorage.getItem('carName') == null);}
    
    function  valLocalStorageCarDescrip(){
        return (localStorage.getItem('carDescrip') == null);}

///*****AJAX**********AJAX**********AJAX******///
    function solicitarEstimado()
    {
        $.ajax({
            url:'http://clientes.geekadvice.pe/api/estimado',
            data: {tipo:1}
        }).done(function(_data){ //en vez de success se pone done
            //alert('ok');//console.log(_data);
            update(_data); //pasamos la funcion //para poder leer los datos
        }).fail(function(){
            alert('fallo el sitio');
        });
    }
    
    function update(_info)
    {
        //alert(_info.destino);
        //alert(_info.estimado.min);
        //console.log($('#price_stimate'));
        $('#price_stimate').text(_info.estimado.moneda + _info.estimado.min +' - '+ _info.estimado.max);
        $('#origin').html(_info.origen);
        $('#destiny').html(_info.destino);
    }
    
