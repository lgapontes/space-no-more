
function clonarLista(lista,callback) {
  let nova_lista = JSON.parse(JSON.stringify(lista));
  callback(nova_lista);
}

function criarOption(value) {
  return criarOptionCompleto(value,value);
}

function criarOptionCompleto(value,html) {
  let option = document.createElement("option");
  option.value = value;
  option.innerHTML = html;
  return option;
}

function preencherSelect(id,lista,callback) {
  let select = document.getElementById(id);
  select.innerHTML = '';
  select.appendChild(criarOptionCompleto('','[todos]'));

  lista.forEach((item, i) => {
    select.appendChild(criarOption(item));

    if (i == (lista.length - 1)) {
      select.removeAttribute('readonly');
      select.removeAttribute('disabled');
      callback();
    }
  });
}

function limparSelect(id,callback) {
  let select = document.getElementById(id);
  select.innerHTML = '';
  select.appendChild(criarOptionCompleto('','[todos]'));
  select.setAttribute('readonly','readonly');
  select.setAttribute('disabled','disabled');
  callback();
}

function preencherSelectEncadeado(valoresSelecionados,id,lista_original,callback) {
  clonarLista(lista_original,lista=>{
    if (valoresSelecionados.length == 0) {
      preencherSelect(id,lista,()=>{
        callback();
      });
    } else {
      valoresSelecionados.forEach((valor, i) => {
        let index = lista.indexOf(valor);
        lista.splice(index, 1);

        if (i == (valoresSelecionados.length - 1)) {
          preencherSelect(id,lista,()=>{
            callback();
          });
        }
      });
    }
  });
}

function obterValorSelect(id) {
  let elemento = document.getElementById(id);
  return elemento.options[elemento.selectedIndex].value;
}

function renderDetalhesEspecie(especie) {
  if (especie == '') {
    document.getElementById('especie-info').innerHTML = `Nenhuma Espécie selecionada.\nCom a opção "[todos]" marcada o gerador irá sorteá-la.`;
  } else {
    document.getElementById('especie-info').innerHTML = ESPECIES[especie].detalhes;
  }
}

document.getElementById('especie').addEventListener('input',(event)=>{
  event.preventDefault();
  let especie = event.target.value;
  renderDetalhesEspecie(especie);
});

function renderDetalhesArquetipo(arquetipo) {
  if (arquetipo == '') {
    limparSelect('doutrina',()=>{
      preencherSelect('verbete1',VERBETES,()=>{
        limparSelect('verbete2',()=>{
          limparSelect('verbete3',()=>{
            document.getElementById('arquetipo-info').innerHTML = `Nenhum Arquétipo selecionado.\nCom a opção "[todos]" marcada o gerador irá sorteá-lo.`;
            renderDetalhesDoutrina('');
            console.log(`Nenhum arquétipo selecionado`);
          });
        });
      });
    });
  } else {
    preencherSelectEncadeado([],'doutrina',ARQUETIPOS[arquetipo]['Doutrinas'],()=>{
      let verbete_arquetipo = ARQUETIPOS[arquetipo].verbete;

      preencherSelectEncadeado([verbete_arquetipo],'verbete1',VERBETES,()=>{
        console.log(`Item da lista do Verbete 1 retirado: ${verbete_arquetipo}`);

        limparSelect('verbete2',()=>{
          limparSelect('verbete3',()=>{
            document.getElementById('arquetipo-info').innerHTML = `${ARQUETIPOS[arquetipo].detalhes}\n\nVerbete: ${ARQUETIPOS[arquetipo].verbete}`;
            renderDetalhesDoutrina('');
            console.log(`Arquétipo selecionado: ${arquetipo}`);
          });
        });
      });
    });
  }
}

document.getElementById('arquetipo').addEventListener('input',(event)=>{
  event.preventDefault();
  let arquetipo = event.target.value;
  renderDetalhesArquetipo(arquetipo);
});

function renderDetalhesDoutrina(doutrina) {
  if (doutrina == '') {
    document.getElementById('doutrina-info').innerHTML = `Nenhuma Doutrina selecionada.\nCom a opção "[todos]" marcada o gerador irá sorteá-la.`;
  } else {
    let arquetipo = obterValorSelect('arquetipo');
    document.getElementById('doutrina-info').innerHTML = DOUTRINAS[arquetipo][doutrina]['Descrição'];
  }
}

document.getElementById('doutrina').addEventListener('input',(event)=>{
  event.preventDefault();
  let doutrina = event.target.value;
  renderDetalhesDoutrina(doutrina);
});

function obterVerbetesSelecionados() {
  let retorno = {
    verbete_arquetipo: false,
    verbete1: false,
    verbete2: false,
    verbete3: false,
    todos: false,
    lista: [],
    dict: {
      verbete_arquetipo: '',
      verbete1: '',
      verbete2: '',
      verbete3: '',
    }
  };

  let arquetipo = obterValorSelect('arquetipo');
  if (arquetipo != '') {
    retorno.verbete_arquetipo = true;
    retorno.dict.verbete_arquetipo = ARQUETIPOS[arquetipo].verbete;
    retorno.lista.push(ARQUETIPOS[arquetipo].verbete);
  }

  let verbete1 = obterValorSelect('verbete1');
  if (verbete1 != '') {
    retorno.verbete1 = true;
    retorno.dict.verbete1 = verbete1;
    retorno.lista.push(verbete1);
  }

  let verbete2 = obterValorSelect('verbete2');
  if (verbete2 != '') {
    retorno.verbete2 = true;
    retorno.dict.verbete2 = verbete2;
    retorno.lista.push(verbete2);
  }

  let verbete3 = obterValorSelect('verbete3');
  if (verbete3 != '') {
    retorno.verbete3 = true;
    retorno.dict.verbete3 = verbete3;
    retorno.lista.push(verbete3);
  }

  if (retorno.lista.length == 4) {
    retorno.todos = true;
  }

  return retorno;
}

document.getElementById('verbete1').addEventListener('input',(event)=>{
  event.preventDefault();
  let verbete1 = event.target.value;
  let lista = obterVerbetesSelecionados().lista;
  preencherSelectEncadeado(lista,'verbete2',VERBETES,()=>{
    console.log(`Verbete 1 selecionado: ${verbete1}`);
  });
});

document.getElementById('verbete2').addEventListener('input',(event)=>{
  event.preventDefault();
  let verbete2 = event.target.value;
  let lista = obterVerbetesSelecionados().lista;
  preencherSelectEncadeado(lista,'verbete3',VERBETES,()=>{
    console.log(`Verbete 2 selecionado: ${verbete2}`);
  });
});

document.getElementById('verbete3').addEventListener('input',(event)=>{
  event.preventDefault();
  let verbete3 = event.target.value;
  console.log(`Verbete 3 selecionado: ${verbete3}`);
});

document.getElementById('rolar').addEventListener('click',(event)=>{
  event.preventDefault();
  rolarPersonagem(()=>{});
});

function naoFoiSelecionado(valor) {
  return (valor === '');
}

function obterItemSorteado(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}


/*
let retorno = {
  verbete_arquetipo: false,
  verbete1: false,
  verbete2: false,
  verbete3: false,
  todos: false,
  lista: [],
};
*/

function obterOuRolarVerbetes(arquetipo,callback) {
  let retorno = obterVerbetesSelecionados();

  if (retorno.todos) {
    callback(retorno.lista);
  } else {
    clonarLista(VERBETES,lista_verbetes=>{
      let lista_retorno = [];

      if (retorno.verbete_arquetipo) {
        lista_retorno.push(retorno.dict.verbete_arquetipo);
        let index = lista_verbetes.indexOf(retorno.dict.verbete_arquetipo);
        lista_verbetes.splice(index, 1);
      } else {
        let sorteado = obterItemSorteado(lista_verbetes);
        lista_retorno.push(sorteado);
        let index = lista_verbetes.indexOf(sorteado);
        lista_verbetes.splice(index, 1);
      }

      if (retorno.verbete1) {
        lista_retorno.push(retorno.dict.verbete1);
        let index = lista_verbetes.indexOf(retorno.dict.verbete1);
        lista_verbetes.splice(index, 1);
      } else {
        let sorteado = obterItemSorteado(lista_verbetes);
        lista_retorno.push(sorteado);
        let index = lista_verbetes.indexOf(sorteado);
        lista_verbetes.splice(index, 1);
      }

      if (retorno.verbete2) {
        lista_retorno.push(retorno.dict.verbete2);
        let index = lista_verbetes.indexOf(retorno.dict.verbete2);
        lista_verbetes.splice(index, 1);
      } else {
        let sorteado = obterItemSorteado(lista_verbetes);
        lista_retorno.push(sorteado);
        let index = lista_verbetes.indexOf(sorteado);
        lista_verbetes.splice(index, 1);
      }

      if (retorno.verbete3) {
        lista_retorno.push(retorno.dict.verbete3);
        let index = lista_verbetes.indexOf(retorno.dict.verbete3);
        lista_verbetes.splice(index, 1);
      } else {
        let sorteado = obterItemSorteado(lista_verbetes);
        lista_retorno.push(sorteado);
        let index = lista_verbetes.indexOf(sorteado);
        lista_verbetes.splice(index, 1);
      }

      callback(lista_retorno);
    });
  }
}

function rolarPersonagem(callback) {
  let nome = obterItemSorteado(NOMES); //NOMES[Math.floor(Math.random() * NOMES.length)];
  let sobrenome = obterItemSorteado(SOBRENOMES); //SOBRENOMES[Math.floor(Math.random() * SOBRENOMES.length)];

  let especie = obterValorSelect('especie');
  if (naoFoiSelecionado(especie)) {
    especie = obterItemSorteado(Object.keys(ESPECIES));
  }

  let vida_maxima = ESPECIES[especie].vida_maxima;

  let arquetipo = obterValorSelect('arquetipo');
  if (naoFoiSelecionado(arquetipo)) {
    arquetipo = obterItemSorteado(Object.keys(ARQUETIPOS));
  }

  obterOuRolarVerbetes(arquetipo,(listaVerbetes)=>{

    let doutrina = obterValorSelect('doutrina');
    if (naoFoiSelecionado(doutrina)) {
      doutrina = obterItemSorteado(Object.keys(DOUTRINAS[arquetipo]));
    }

    let profissao = obterValorSelect('profissao');
    if (naoFoiSelecionado(profissao)) {
      profissao = obterItemSorteado(PROFISSOES);
    }

    let equipamento = obterValorSelect('equipamento');
    if (naoFoiSelecionado(equipamento)) {
      equipamento = obterItemSorteado(EQUIPAMENTOS);
    }

    let interponder = 'Interponder de Matéria Escura';

    let armamento = obterValorSelect('armamento');
    if (naoFoiSelecionado(armamento)) {
      armamento = obterItemSorteado(ARMAMENTOS);
    }

    let creditos = '100';

    let personalidade = obterValorSelect('personalidade');
    if (naoFoiSelecionado(personalidade)) {
      personalidade = obterItemSorteado(PERSONALIDADES);
    }

    let dextinto = '0';
    let armadura = '0';
    let radiacao = '0';

    document.getElementById('resultado').textContent =
`Nome: ${nome} ${sobrenome}
Personalidade: ${personalidade}
Armadura: ${armadura} / Dextinto: ${dextinto} / Radiação: ${radiacao}

Espécie: ${especie}
Vida Máxima: ${vida_maxima}

Arquétipo: ${arquetipo}
Doutrina: ${doutrina}
Profissão: ${profissao}

Verbetes: ${listaVerbetes.join(', ')}

Equipamentos: ${interponder}, ${equipamento}
Armamentos: ${armamento}
Créditos: ${creditos}
`;

  });
}

function iniciar() {
  preencherSelect('arquetipo',Object.keys(ARQUETIPOS),()=>{
    preencherSelect('equipamento',EQUIPAMENTOS,()=>{
      preencherSelect('armamento',ARMAMENTOS,()=>{
        preencherSelect('profissao',PROFISSOES,()=>{
          preencherSelect('personalidade',PERSONALIDADES,()=>{
            renderDetalhesEspecie('');
            renderDetalhesArquetipo('');
            renderDetalhesDoutrina('');

            rolarPersonagem(()=>{
              console.log(`Página carregada: v${VERSAO}`);
            });
          });
        });
      });
    });
  });
}

iniciar();
