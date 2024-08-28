function encriptar(){    
    let texto = document.getElementById("input").value;
    console.log(texto);
    let tituloEncriptado = document.getElementById("titulo__mensaje");
    //let label = document.getElementsByClassName("label")[0];
    let btnCopiar = document.getElementById("button__copiar");
    let img = document.getElementById("img");
    let teEcriptado = document.getElementById("salida__texto_encriptado");
    let parafo = document.getElementById("parrafo");
    let btnEncripta = document.getElementById("output__button");
    let textoEncriptado = texto

        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if(texto.length != 0){
        document.getElementById("input").value = "";
        tituloEncriptado.textContent = textoEncriptado;
        btnCopiar.style.display = "block";
        img.style.display = "none";
        teEcriptado.style.top = "5%";
        parafo.style.display = "none";
        btnEncripta.style.position ="relative";
    }
    else{
        alert("Ingreso el texto a encriptar/desencriptar");
    }
    
}

function desencriptar(){
    let texto = document.getElementById("input").value;
    console.log(texto);
    let tituloEncriptado = document.getElementById("titulo__mensaje");
    let label = document.getElementsByClassName("label")[0];
    let btnCopiar = document.getElementById("button__copiar");
    let img = document.getElementById("img");
    let teEcriptado = document.getElementById("salida__texto_encriptado");
    let parafo = document.getElementById("parrafo");
    let textoEncriptado = texto

        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if(texto.length != 0){
        document.getElementById("input").value = "";
        tituloEncriptado.textContent = textoEncriptado;
        label.style.visibility = "hidden";
        btnCopiar.style.display = "block";
        img.style.display = "none";
        teEcriptado.style.top = "5%";
        parafo.style.display = "none";
    }
    else{
        alert("Ingreso tecto a encriptar");
    }
    
}

function copiar(){
    let textoCopiado = document.getElementById("titulo__mensaje");
    navigator.clipboard.writeText(textoCopiado.textContent);
}

// Función para verificar si un carácter es especial
function esCaracterPermitido(char) {
    // Definir una expresión regular para caracteres permitidos (letras, números, y espacios)
    const regex = /^[a-zA-Z0-9\s]$/;
    // Retornar verdadero si el carácter es permitido, falso si es un carácter especial
    return regex.test(char);
}

// Función que se ejecuta cuando se presiona una tecla en el textarea
function verificarCaracter(event) {
    // Obtener el código de la tecla presionada
    const charCode = event.which || event.keyCode;
    
    // Convertir el código de la tecla a un carácter
    const char = String.fromCharCode(charCode);

    // Si el carácter no está permitido, prevenir su ingreso
    if (!esCaracterPermitido(char)) {
        event.preventDefault();
        alert("no se permiten caracteres especiales");
    }
}

document.getElementById('input').addEventListener('keypress', verificarCaracter);

document.getElementById('input').addEventListener('keypress', function(event) {
    // Obtener el código de la tecla presionada
    const charCode = event.which || event.keyCode;
    
    // Convertir el código de la tecla a un carácter
    const char = String.fromCharCode(charCode);
    
    // Verificar si el carácter es una letra mayúscula
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        // Evitar la entrada de letras mayúsculas
        event.preventDefault();
        alert("no se permiten letras mayusculas");
    }
});

