const textoEncriptar = document.querySelector(".texto-entrada");
const textoResultado = document.querySelector(".texto-salida");


function btnEncriptar(){
  alert("¡Texto Encriptado satisfactoriamente!");
  const textoEncriptado = encriptar(textoEncriptar.value)
  textoResultado.value = textoEncriptado
}

function encriptar(stringEncriptado) {
  

  let matrizcodigo = [["e", "enter"], ["i","ives"], ["a","ali"], ["o", "okr"], ["u", "ut"]]
  stringEncriptado = stringEncriptado.toLowerCase()

  for(let i = 0; i < matrizcodigo.length; i++){
    if(stringEncriptado.includes(matrizcodigo[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])

    }
  }
  return stringEncriptado
}

function btnDesencriptar() {
  alert("¡Texto Desencriptado satisfactoriamente!");
  const textoEncriptado = desencriptar(textoResultado.value)
  textoResultado.value = textoEncriptado
}

function desencriptar(stringDesencriptado) {
  let matrizcodigo = [["e", "enter"], ["i","ives"], ["a","ali"], ["o", "okr"], ["u", "ut"]]
  stringDesencriptado = stringDesencriptado.toLowerCase()

  for(let i = 0; i < matrizcodigo.length; i++){
    if(stringDesencriptado.includes(matrizcodigo[i][1])){
      stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
    }
  }
  return stringDesencriptado
}

function copiarResultado() {

    const texto = document.getElementById("texto-salida").value;
  
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.style.position = "absolute";
    elementoTemporal.style.left = "-9999px";
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
  
    elementoTemporal.select();
  
    document.execCommand("copy");
  
    document.body.removeChild(elementoTemporal);
  
    alert("¡Texto copiado al portapapeles!");
  }
  
  function limpiarCampos() {

    const textoEntrada = document.getElementById("texto-entrada");
    const clave = document.getElementById("clave");
    const textoSalida = document.getElementById("texto-salida");
  
    textoEntrada.value = "";
    clave.value = "";
    textoSalida.value = "";
  
    textoEntrada.placeholder = "Ingrese el texto a encriptar/desencriptar";
    clave.placeholder = "Ingrese la clave de encriptado";
    textoSalida.placeholder = "El resultado de mostrará aquí";
  
    textoEntrada.focus();
  }
  
  limpiarCampos();


  

  

