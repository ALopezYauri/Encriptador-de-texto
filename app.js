function encriptar(){    
    let texto = document.getElementById("input").value;
    console.log(texto);
    let tituloEncriptado = document.getElementById("titulo__mensaje");
    //let label = document.getElementsByClassName("label")[0];
    let btnCopiar = document.getElementById("button__copiar");
    let img = document.getElementById("img");
    let teEcriptado = document.getElementById("salida__texto_encriptado");
    let parafo = document.getElementById("parrafo");
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
    }
    else{
        alert("Ingreso tecto a encriptar");
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