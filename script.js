let  nombre = prompt("Ingrese su nombre","");
let apellido = prompt("Ingrese su apellido","");
let f_nacimiento = prompt("Ingrese su fecha de nacimiento con formato AAAA-MM-DD","");

var f_nac = new Date(f_nacimiento).getTime();
var f_hoy = new Date().getTime();
var diff = f_hoy - f_nac;

if ( f_nacimiento[5] == "0" || (f_nacimiento[5] == "1" && (f_nacimiento[6] == "0" || f_nacimiento[6] == "1" || f_nacimiento[6] == "2"))) {
    diferenciaDias = Number((diff / (1000 * 60 * 60 * 24)).toFixed(2));

    if (diferenciaDias < 0) {
        alert("Usted nacerá en el futuro")
    } 
    else {
        alert( nombre + " " + apellido + ". Usted ha vivido " + diferenciaDias + " dias")
    }
}
else {
    alert("Mes Incorrecto")
}



