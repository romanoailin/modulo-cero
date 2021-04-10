// script.js
alert("¡Hola! A continuación vas a tener que ingresar algunos datos personales");

var nombrePedido = prompt("Nombre:");
var apellidoPedido = prompt("Apellido:");
var edadPedida = prompt("Edad:");
var ciudadPedida = prompt("Ciudad de domicilio:");
var mascotasPedidas = prompt("¿Tenés mascotas? Si/No");
var mascotasNombrePedidas = prompt("¿Cómo se llaman?"); 


document.getElementById("nombre").innerHTML = nombrePedido;
document.getElementById("apellido").innerHTML = apellidoPedido;
document.getElementById("edad").innerHTML = edadPedida;
document.getElementById("ciudad").innerHTML = ciudadPedida;
document.getElementById("mascotas").innerHTML = mascotasPedidas;
document.getElementById("mascotasnombre").innerHTML = mascotasNombrePedidas;
