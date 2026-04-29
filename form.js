const formulario = document.getElementById('meuFormulario')

formulario.addEventListener('submit', function(evento) {

    const Peixe = {
        nome_popular: document.getElementById('nome_popular').value,
        nome_cientifico: document.getElementById('nome_cientifico').value,

        imagem: document.getElementById('imagem').value,
        descricao_descoberta: document.getElementById('descricao_descoberta').value,
    }

    const novoPeixe = `
        <div class="peixe__conteudo">

            <div class="peixe__cabecalho">
                <img class="peixe__img" src="" alt="Peixe Tambaqui">
                <h3 class="peixe__nome">${Peixe.nome_popular}</h3>
            </div>

            <div class="peixe__corpo">
                <p class="peixe__texto">
                    O ${Peixe.nome_popular}, conhecido como ${Peixe.nome_cientifico} é ${Peixe.descricao_descoberta}
                </p>
            </div>

        </div>
                    
    `;

    const adicionados = document.getElementById('adicionados')

    console.log(novoPeixe)
    
    adicionados.innerHTML += novoPeixe;
    formulario.reset();
    
}
);