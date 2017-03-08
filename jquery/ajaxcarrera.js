$(document).ready(init);

    function init(){
      soliciteDriver();
    }

    function soliciteDriver()
    {
        $.ajax({
            url:'https://clientes.geekadvice.pe/api/carrera',
            data: {tipo:1}
        }).done(function(_data){ //en vez de success se pone done
            //alert('ok');
            console.log(_data);
            update(_data); //pasamos la funcion 
        //para poder leer los datos
        });//.fail(function(){
            //alert('fallo el sitio');
        //});
    }

    function update(_info)
    {
        console.log($('#imagen_driver'));
        //{"src":_info.conductor.url}
        $('#name_driver').text(_info.conductor.name);
        $('#imagen_driver').attr({"src":_info.conductor.url});
        $('#total_payment').text(_info.estimado.moneda + _info.final);
    }
