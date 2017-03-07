$(document).ready(init);

    function init(){
        solicitarEstimado();
    }

    function solicitarEstimado()
    {
        $.ajax({
            url:'http://clientes.geekadvice.pe/api/estimado',
            data: {tipo:1}
        }).done(function(_data){ //en vez de success se pone done
            //alert('ok');
            //console.log(_data);
            update(_data); //pasamos la funcion 
        //para poder leer los datos
        }).fail(function(){
            alert('fallo el sitio');
        });
    }
    
    function update(_info)
    {
        //alert(_info.destino);
        //alert(_info.estimado.min);
        //console.log($('#price_stimate'));
        $('#price_stimate').text(_info.estimado.moneda + _info.estimado.min +'-'+ _info.estimado.max);
        $('#origin').html(_info.origen);
        $('#destiny').html(_info.destino);
    }
    
//$('#list').on('click','.cars_hover',function(){
    //    console.log( $(this));
    //    $(this);
    //})