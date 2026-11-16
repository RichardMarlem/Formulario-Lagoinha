

let etapaAtual = 1;

function mostrarEtapa(numero) {

    document.querySelectorAll('.etapa').forEach(etapa => {
        etapa.hidden = true;
        etapa.classList.remove('ativa');
    });

    const proxima = document.getElementById(`etapa${numero}`);

    proxima.hidden = false;
    proxima.classList.add('ativa');

    etapaAtual = numero;
}

function proximaEtapa() {
    mostrarEtapa(etapaAtual + 1);
}

function voltarEtapa() {
    mostrarEtapa(etapaAtual - 1);
}


function val(id) {
    return document.getElementById(id).value;
}

function coletarDados() {
    return {
        nomeCompleto: val("nomeCompleto"),
        celular: val("celular"),
        email: val("email"),
        dataNascimento: val("dataNascimento"),
        sexo: val("sexo"),
        estadoCivil: val("estadoCivil"),
        cidade: val("cidade"),
        bairro: val("bairro"),
        cultoAssistido: val("cultoAssistido"),
        estouVisitando: document.getElementById("estouVisitando").checked,
        aceiteiJesusPrimeiraVez: document.getElementById("aceiteiJesusPrimeiraVez").checked,
        reconciliandoComJesus: document.getElementById("reconciliandoComJesus").checked,
        queroMeTornarMembro: document.getElementById("queroMeTornarMembro").checked,
        desejoParticiparDeUmGc: document.getElementById("desejoParticiparDeUmGc").checked,
        aconselhamentoPastoral: document.getElementById("aconselhamentoPastoral").checked,
        preenchimentoFeito: val("preenchimentoFeito")

    };
}


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    
    event.preventDefault();

    
    const dados = coletarDados();

    
    console.table(dados);

});
