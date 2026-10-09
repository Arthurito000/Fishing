 class Modelo{
    constructor(nome, descricao, imagem){
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
    }

}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const novo = new novo(titulo, descricao, imagem);

    fetch('/api/lista', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringfy(novo)
    })
    .then(() => {
        window.location.href = 'index.html';
    });
});

const container = document.querySelector('.todosCards');
//console.log(container);

fetch('/api/lista')
    .then((data)=> data.json())
    .then((json)=> {
        json.forEach(Modelo => {`
            <div class="peixe__conteudo">
                <div class="peixe__cabecalho">
                    <img class="peixe__img" src= ${Modelo.imagem} alt="Peixe Tambaqui">
                    <h3 class="peixe__nome">${Modelo.nome}</h3>
                </div>
                <div class="peixe__corpo">
                    <p class="peixe__texto"> ${Modelo.descricao} </p>
                </div>

            </div>
            `;
        });
    })
    .catch((err)=>console.log(err));
