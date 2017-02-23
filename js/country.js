function init(){
    var lista= document.getElementById("list-country");
    var links= lista.getElementsByTagName("a");
    for (var i=0; i<links.length;i++){
        links[i].addEventListener("click",onLinkClick);
    }
}
function onLinkClick(event){
    var imagen = event.currentTarget.document.getElementsByClassName("flag")[0].src;
    console.log(imagen);
    var code = event.currentTarget.document.getElementsByClassName("flag")[0].textContent;
    localStorage.setItem("countryimg",imagen);
}
