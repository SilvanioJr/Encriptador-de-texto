
    var textArea = document.querySelector(".text-area");
    var mensagem = document.querySelector(".mensagem");


    function btnEncriptar(){
        var textoEncriptado = encriptar(textArea.value);
        mensagem.value = textoEncriptado;
        textArea.value = "";
    }

    function btnDescriptar(){
        var textoDescriptado = descriptar(textArea.value);
        mensagem.value = textoDescriptado;
        textArea.value = "";
        
    }

    function encriptar(stringEncriptada) {
        var matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for(var i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        return stringEncriptada;
    }

    function descriptar(stringDescriptar){
        var matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
        stringDescriptar = stringDescriptar.toLowerCase();

        for(var i = 0; i < matrizCodigo.length; i++){
            if(stringDescriptar.includes(matrizCodigo[i][1])){
                stringDescriptar = stringDescriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }

        return stringDescriptar;
    } 

    function copiarTexto() {
        var copiar = document.querySelector(".mensagem");
        copiar.select();
        document.execCommand("copy");
    }
