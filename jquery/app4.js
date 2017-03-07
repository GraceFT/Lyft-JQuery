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
            //update(_data); //pasamos la funcion 
        //para poder leer los datos
        }).fail(function(){
            alert('fallo el sitio');
        });
    }

    function update(_info)
    {
        $('#imagen').attr(URL);
    }
//$('#list').on('click','.cars_hover',function(){
    //    console.log( $(this));
    //    $(this);
    //})