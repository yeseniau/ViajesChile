$(document).ready(function(){

    $(".btn").click(function(){
        alert("Su correo ha sido enviado con exito. Gracias por contactarnos");
    });


});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
