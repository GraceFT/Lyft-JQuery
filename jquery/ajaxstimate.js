$(document).ready(init);

function init(){
        solicitarEstimado();
        
}
////////TO GET THE CHOOSEN-CAR///////////////

///*****AJAX**********AJAX**********AJAX******///
    function solicitarEstimado()
    {
        $.ajax({
            type:'GET',
            url:'http://clientes.geekadvice.pe/api/estimado',
            data: {tipo:1}
        }).done(function(_data){ //en vez de success se pone done
            //alert('ok');//console.log(_data);
            update(_data); //pasamos la funcion //para poder leer los datos
        })
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
    
