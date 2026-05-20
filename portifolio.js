function mostrarMensagem(nomeProjeto) {
    alert(`Você clicou no projeto: ${nomeProjeto}`)
}

const elementoTexto = document.getElementById('maquina-escrever')
const texto  ="Desenvolvedor Front-end em formação"
elementoTexto.innerHTML = ""

function escreverTexto(texto,elemento,index = 0) {
    if(index < texto.length) {
        elemento.innerHTML += texto.charAt(index)
        setTimeout(() => escreverTexto(texto,elemento,index + 1), 80)
    }
}

escreverTexto(texto, elementoTexto)

function carregarSaudacao() {
    var msg = document.getElementById("msg-saudacao");
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 5 && hora < 12) {
        msg.innerHTML = "Bom dia! Olá, eu sou Danilo 👋"
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = "Boa tarde! Olá, eu sou Danilo 👋"
    } else {
        msg.innerHTML = "Boa noite! Olá, eu sou Danilo 👋"
    }

}

  carregarSaudacao();
