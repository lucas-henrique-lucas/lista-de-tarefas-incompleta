function adicionarTarefa() {
    let texto = prompt('Anote:');

    let item_lista = document.createElement('li');
    manipularAtributo(item_lista, 'class', 'lista__item');

    let botao_lista_remover = document.createElement('button');
    manipularAtributo(botao_lista_remover, 'class', 'remover');
    manipularAtributo(botao_lista_remover, 'onclick', 'removerTarefa(this)');
    exibirIconeDoBotao('./img/trash-2.svg', botao_lista_remover);

    let botao_lista_concluir = document.createElement('button');
    manipularAtributo(botao_lista_concluir, 'class', 'concluir');
    manipularAtributo(botao_lista_concluir, 'onclick', 'concluirTarefa(this)');
    exibirIconeDoBotao('./img/check.svg', botao_lista_concluir);

    let botao_lista_editar = document.createElement('button');
    manipularAtributo(botao_lista_editar, 'class', 'editar');
    manipularAtributo(botao_lista_editar, 'onclick', 'editarTarefa(this)');
    exibirIconeDoBotao('./img/edit-3.svg', botao_lista_editar);

    let texto_lista = document.createElement('p');
    manipularAtributo(texto_lista, 'class', 'lista__item__texto');

    texto_lista.textContent = texto;

    document.getElementById('lista-pendencia').appendChild(item_lista).appendChild(botao_lista_remover);
    document.getElementById('lista-pendencia').appendChild(item_lista).appendChild(botao_lista_concluir);
    document.getElementById('lista-pendencia').appendChild(item_lista).appendChild(botao_lista_editar);
    document.getElementById('lista-pendencia').appendChild(item_lista).appendChild(texto_lista);
}

function limparCampo() {
    const pendencia = document.getElementById('lista-pendencia');
    const  concluido = document.getElementById('lista-concluido');

    while (pendencia.hasChildNodes()) {
      pendencia.removeChild(pendencia.firstChild);
    }

    while (concluido.hasChildNodes) {
        concluido.removeChild(concluido.firstChild);
    }
}

function exibirIconeDoBotao(caminho, botao) {
    let img = document.createElement('img');
    manipularAtributo(img, 'src', caminho)
    botao.appendChild(img);
}

function manipularAtributo(elemento, atributo, nome) {
    elemento.setAttribute(atributo, nome);
}

function removerTarefa(este) {
    let elemento = este.parentNode;
    elemento.remove()
}

function concluirTarefa(este) {
    let elemento = este.parentNode;
    let img = este.firstChild;
    if (elemento.parentNode.id == 'lista-pendencia') {
        img.src = './img/x.svg';
        document.getElementById('lista-concluido').appendChild(elemento);
    } else {
        img.src = './img/check.svg';
        document.getElementById('lista-pendencia').appendChild(elemento);
    }
}

function editarTarefa(este) {
    let elemento = este.parentNode;
    let texto = elemento.children[3].textContent;
    let novoTexto = prompt('Editar:', texto);
    return novoTexto == null ? texto : elemento.children[3].textContent = novoTexto;
}
