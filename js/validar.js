function limpiarErrores(){
  var errores = document.getElementsByClassName("error");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerHTML = "";
  }
}
function validar(formulario) {

  limpiarErrores();

  if (formulario.nombre.value.trim().length == 0) {
    document.getElementById("errorNombre").innerText = "Campo obligatorio";
    formulario.nombre.focus();
    return false;
  }
  if (formulario.nombre.value.trim().length <= 2) {
    alert("el nombre debe tener tres o mas caracteres");
    return false;
  }
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    alert("Email inválido");
    return false;
  }
 if  (formulario.contrasena.value.trim().length == ""){
    document.getElementById("errorPsw").innerText = "Campo obligatorio";
  formulario.contrasena.focus();
   return false;
 }
 if  (formulario.contrasena.value.trim().length <=8){
  alert("la contraseña debe tener al menos ocho caracteres");
  return false;
}
if (formulario.contrasena.value!=formulario.confirmacion.value){
  document.getElementById("errorConfirm").innerText = "las contraseñas no coinciden!";
  formulario.confirmacion.focus();
  return false;
}
if (formulario.genero.value==""){
  alert("campo obligatorio");
  formulario.genero.focus();
  return false;
}
if (formulario.pais.value ==""){
  alert("selecciona tu genero musical!");
  return false;
}
if (!formulario.terminos.checked){
  alert("acepte los terminos y condiciones");
  return false;
}
  alert("Tu solicitud de registro ha sido enviada!");

  return true;
}
