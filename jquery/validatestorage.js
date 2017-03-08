$(document).ready(init);

function init(){
        validating();
}
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