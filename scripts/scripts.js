const VERSAO = '1.0';

const ESPECIES = {
  'Humano': {
    detalhes: `Vida Máxima: 6\n\nA maioria deles se foi, mas os poucos milhões que sobraram ainda estão tentando resolver suas pendências com a Callback.\n\nCaracterísticas: são mais suscetíveis ao Dextinto, acumulando 2 pontos por hora cheia, mas se recuperam mais rápido: uma unidade de Matéria Escura reduz 3 pontos de Dextinto. Se morrerem, podem ser convertidos à espécie PROJEÇÃO. Para isso outra personagem deve obter sucesso em Reparar sintéticos e projeções e transplantar o cérebro do morto para uma cápsula nos próximos minutos (a cirurgia tem duração de 3h).`,
  },
  'Projeção': {
    detalhes: `Vida Máxima: 7\n\nAs projeções são geradas por um manipulador de moléculas capaz de sintetizar um organismo virtual táctil em qualquer lugar nas proximidades da cápsula projetora. Possuem formato humanoide geralmente inspirado na antiga imagem humana do controlador. Foi criada para permitir a pós-vida quando um ser biológico morre e tem seu cérebro transplantando para a cápsula. A partir daí o indivíduo é capaz de criar uma projeção virtual de si mesmo em qualquer lugar em uma esfera de 500 mil quilômetros. Esta projeção pode interagir com objetos do ambiente. Caso seja exposta a situações como vácuo, fogo, concussão, radiação, entre outros, as partículas projetadas sofrem efeitos estáticos que danificam o cérebro controlador - podendo levá-lo a morte.\n\nCaracterísticas: podem se teletransportar uma vez por sessão de jogo, movendo sua projeção para até 10 metros. Elas sempre precisam estar projetadas, não podendo sumir completamente. São curadas com rolagem de Reparar sintéticos e projeções. São suscetíveis a danos de radiação e plasma, adicionando +1 dado à jogada de dano do adversário. Destruir a cápsula do controlador causa morte irreversível da personagem.`,
  },
  'Sintético': {
    detalhes: `Vida Máxima: 8\n\nMúsculos colóides de silício, esqueleto de fibra de carbono e fluido de látex branca, estes são os sintéticos criados pela FUXTIL. Máquinas altamente complexas mais fortes e rápidas, de anatomia semelhante aos humanos, mas com fisionomia plástica e traços metálicos.\n\nCaracterísticas: Todas as jogadas que envolvam força são realizadas com +1. Precisam de peças sobressalentes e sucesso em Reparar sintéticos e projeções para recuperar Vida. Não sofrem efeitos do vácuo.`,
  },
};

const DOUTRINAS = {
  'Alquimancer': {
    'Perceber matéria escura': {
      'Descrição': 'Percebe a presença de Matéria Escura em Distância Curta (30 metros) a partir da personagem.',
    },
    'Criar combustão': {
      'Descrição': 'Cria uma chama auto inflamável em um ponto visível em Distância Curta (10 metros). Esta chama provoca 2 de dano por rodada e tem duração de 3 rodadas.',
    },
    'Criar área anti-vácuo': {
      'Descrição': 'Cria uma esfera de 3 metros de diâmetro (comporta até 5 indivíduos) que protege contra o vácuo. Duração de 1 minuto. Caso a esfera seja recriada após a duração, será necessário abastecê-la com oxigênio.',
    },
    'Teletransportar': {
      'Descrição': 'Teletransporta um objeto ou indivíduo para uma posição a uma Distância Curta (10 metros) a partir da personagem.',
    },
    'Criar oxigênio': {
      'Descrição': 'Cria oxigênio em uma área de 10 metros cúbicos para no máximo 10 indivíduos por 1 hora. Se a área for maior, até 30 metros quadrados, a duração é de 30 minutos. Se a área for aberta o período é 10 minutos.',
    },
  },

  'Armipotente': {
    'Dois ataques por rodada': {
      'Descrição': 'Com esta doutrina a personagem pode executar 2 ataques com uma Ação Principal.',
    },
    '+1 Vida': {
      'Descrição': 'Adiciona um ponto de Vida Máxima à personagem.',
    },
    '+1 Dano': {
      'Descrição': 'Adiciona +1 em todo dano provocado pela personagem.',
    },
    '+1 Corpo-a-corpo e Explosivos': {
      'Descrição': 'Bônus de +1 nas rolagens de Atacar corpo-a-corpo e Usar explosivos.',
    },
    '+1 Armas e Arremessos': {
      'Descrição': 'Bônus de +1 em Usar armas de fogo e Arremessar objetos.',
    },
  },

  'Psionista': {
    'Ataque psíquico': {
      'Descrição': 'Afeta um alvo senciente com uma onda psíquica que provoca 2 de dano. Pode alcançar um indivíduo visível a até 30m.',
    },
    'Destruir objetos': {
      'Descrição': 'Destrói objetos a uma Distância Curta (10 metros). A massa total do objeto não pode ultrapassar 2 quilos. Não funciona em seres sencientes ou contra objetos em movimento.',
    },
    'Desviar projéteis': {
      'Descrição': 'Como uma Ação Reativa, uma personagem pode declarar interceptar projéteis disparados contra um alvo. O alvo pode ser a própria personagem ou algo a 10 metros. Os projéteis devem ser desviados para alguma direção. Funciona com qualquer tipo de projétil, exceto disparos de radiação ou fusão nuclear.',
    },
    'Mindframe': {
      'Descrição': 'Cria uma cena na mente de um alvo a no máximo 10 metros. A cena dura 2 rodadas e pode simular qualquer situação. Efetivamente ela não causa ferimentos, mas o indivíduo acreditará fielmente que a cena ficticia é verdadeira, podendo levá-lo a se ferir para escapar da situação.',
    },
    'Telecinesia': {
      'Descrição': 'Pode mover ou sustentar objetos de no máximo 50Kg a uma distância curta (10 metros). O efeito dura por 10 minutos ou até o Psionista encerrá-lo.',
    },
  },

  'Guiacura': {
    'Curar vida biológica': {
      'Descrição': 'Cura 4 pontos de Vida de um alvo biológico. Se aplica à espécie humana, alienígenas, e qualquer criatura não sintética ou projetada. O alvo deve estar a 3m.',
    },
    'Curar vida sintética': {
      'Descrição': 'Cura 3 pontos de Vida de um alvo à 3 metros que seja da espécie Projeção ou Sintético.',
    },
    'Reviver criatura senciente': {
      'Descrição': 'Revive uma criatura que esteja Engajada e tenha morrido a 10 rodadas. Não funciona em criaturas mortas pelo Dextinto. Só funciona 1 vez por sessão para cada personagem.',
    },
    'Remover radiação ou doença': {
      'Descrição': 'É capaz de remover todos os pontos de radiação ou uma doença de um indivíduo de qualquer espécie. O alvo deve estar Engajado (3m).',
    },
    'Retardar dextinto': {
      'Descrição': 'Quando uma personagem é afetada pelo Dextinto ela precisa encontrar Matéria Escura ou sofrerá as consequências em agonia (vide regra na pág X). Esta doutrina reduz 1 ponto de Dextinto de um alvo em Distância Curta, removendo todos os efeitos. Pode ser acionada com Ação Reativa. Não pode ser utilizada na própria personagem.',
    },
  },

  'Guiamente': {
    'Amistosidade forçada': {
      'Descrição': 'Com esta doutrina uma NPC que NÃO estiver hostil em relação às personagens dos jogadores assumirá uma postura amistosa por 10 minutos. Pedir à NPC para atacar um aliado ou se ferir fará com que o efeito termine.',
    },
    'Causar esquecimento': {
      'Descrição': 'Com esta doutrina a personagem pode fazer com que um outra personagem do jogo esqueça um fato. O objeto de esquecimento deve ser pontual. Esquecer o nome é possível, porém esquecer todo o conhecimento de um assunto, não. A palavra final é do narrador.',
    },
    'Comandar indivíduo': {
      'Descrição': 'Com esta doutrina o jogador pode conduzir uma cena narrativa para uma personagem do narrador. Nesta cena a personagem não pode se ferir. Atacar um aliado é possível, atear fogo em um local onde a própria será ferida, não. A cena dura 1 rodada em combate ou 1 minuto se estiver fora de combate.',
    },
    'Ler mentes': {
      'Descrição': 'O jogador pode perguntar ao narrador uma pergunta a respeito do pensamento de uma criatura controlada por ele. A resposta deve compor apenas as opções "sim", "não", ou "indiferente". Caso a personagem seja de outro jogador, quem responderá será o jogador. Em ambos os casos a resposta deve ser sincera.',
    },
    'Perceber intenção': {
      'Descrição': 'Com esta doutrina um jogador pode fazer uma pergunta ao narrador a respeito da intenção de uma personagem. A resposta deve ser sincera, mas restrita a casos brandos como "ele vai atacar" ou "ele está com medo".',
    },
  },

  'Cronomancer': {
    'Combate antecipado': {
      'Descrição': 'Esta doutrina permite à personagem executar 1 Ação de Movimento e 1 Ação Principal antes do início do combate. Após executá-las, ela age normalmente quando chegar sua vez na iniciativa.',
    },
    'Paralizar tempo': {
      'Descrição': 'Paraliza uma criatura ou objeto por 1 rodada a uma Distância Curta (10 metros) a partir da personagem. A criatura ou objeto não pode ter peso superior a 200 quilos.',
    },
    'Prever o futuro': {
      'Descrição': 'O jogador pode fazer uma pergunta ao narrador e o mesmo deve responder com sinceridade. O alcance no futuro é de 1 hora. Indivíduos que a personagem não conheça aparecem como sombras. A cena será restrita ao local atual e pode não se concretizar se os envolvidos agirem na intenção de alterá-la. Dúvidas como "eu vou morrer?" ou "a nave vai explodir?" podem não ser efetivas sem um contexto.',
    },
    'Visão do passado': {
      'Descrição': 'O jogador pode fazer uma pergunta ao narrador e o mesmo deve responder com sinceridade. O alcance no passado é de 1 dia. Indivíduos que a personagem não conheça vão aparecer como sombras. A cena será restrita ao local atual.',
    },
    'Voltar no tempo': {
      'Descrição': 'O jogador volta a narrativa em 1 ação ou, em combate, 1 rodada. Neste caso ele pode narrar outra ação ou até mesmo rerolar dados. O retorno envolve todos os elementos que estiverem nos 3m cúbicos a partir da posição da personagem. Não funciona para morte ou Dextinto - o indivíduo continuará afetado ou morto.',
    },
  },
};

const ARQUETIPOS = {
  'Alquimancer': {
    'Doutrinas': Object.keys(DOUTRINAS['Alquimancer']),
    detalhes: 'A ciência avançou ao ponto de viabilizar corpos sencientes capazes de modificar o ambiente, podendo manipular elementos químicos ou físicos para benefício próprio ou do grupo.',
    verbete: 'Analisar quimicamente',
  },
  'Armipotente': {
    'Doutrinas': Object.keys(DOUTRINAS['Armipotente']),
    detalhes: 'Quem vai na frente? O Armipotente é aquele que possui as melhores técnicas de combate, focado em garantir a segurança de seus aliados. Exceção: o uso das Doutrinas do Armipotente não provoca Dextinto.',
    verbete: 'Usar armas de fogo',
  },
  'Psionista': {
    'Doutrinas': Object.keys(DOUTRINAS['Psionista']),
    detalhes: 'Imprudentes são aqueles que não temem os psiônicos. É como dizem: “todos um dia terão medo de um mindframe”.',
    verbete: 'Perceber ambiente',
  },
  'Guiacura': {
    'Doutrinas': Object.keys(DOUTRINAS['Guiacura']),
    detalhes: 'Toda nave deveria ter um. Na prática são poucos que se oferecem para aprender as doutrinas relacionadas à cura e manutenção da vida. São capazes de restaurar qualquer ser senciente, humanos, sintéticos e até mesmo criaturas alienígenas.',
    verbete: 'Curar ferimentos',
  },
  'Guiamente': {
    'Doutrinas': Object.keys(DOUTRINAS['Guiamente']),
    detalhes: 'O resíduo da humanidade ainda carrega a arrogância que nos fez chegar a esta situação de quase extinção. A Callback é a arma, mas quem puxa o gatilho são os seres vivos. Um Guiamente sabe disso e não tem escrúpulos em reagir às ameaças.',
    verbete: 'Convencer indivíduos',
  },
  'Cronomancer': {
    'Doutrinas': Object.keys(DOUTRINAS['Cronomancer']),
    detalhes: 'Gerenciar o tempo não é mais suficiente, agora é preciso controlá-lo. Um regresso ou avanço na linha temporal faz do Cronomancer o melhor aliado para as insondáveis ameaças da Callback.',
    verbete: 'Investigar pistas',
  },
};

const PROFISSAO = [
  'Botânica',
  'Combatente',
  'Computadores',
  'Criminoso',
  'Desportista',
  'Geologia',
  'Hiperespaço',
  'Maquinário',
  'Medicina',
  'Pilotagem',
  'Psicologia',
  'Química',
  'Robótica',
  'Xenobiologia',
];

const VERBETES = [
  'Analisar quimicamente',
  'Arremessar objetos',
  'Atacar corpo-a-corpo',
  'Caminhar no espaço',
  'Convencer indivíduos',
  'Curar ferimentos',
  'Enganar indivíduos',
  'Esconder rapidamente',
  'Estudar alienígenas',
  'Exercer força bruta',
  'Forjar e reparar armas',
  'Hackear computadores',
  'Intimidar indivíduos',
  'Investigar pistas',
  'Liderar indivíduos',
  'Mover furtivamente',
  'Operar e reparar máquinas',
  'Perceber ambiente',
  'Pesquisar física quântica',
  'Pilotar nave',
  'Praticar acrobacia',
  'Reparar sintéticos e projeções',
  'Usar armas de fogo',
  'Usar explosivos',
];

const ARMAMENTOS = {
  Bastão de combate
  Bastão de energia
  Bisturi
  Blade de combate
  Blade de energia
  Blade de luz
  Blade elétrica
  Blade radioativa
  Bomba de fumaça
  Bomba de ruído
  Bomba improvisada
  Cassetete
  Cassetete elétrico
  Corrente
  Cortador laser
  Faca de combate
  Faca laser
  Fuzil laser
  Fuzil de plasma
  Fuzil (projéteis)
  Fuzil laser com silenciador
  Fuzil de plasma com silenciador
  Fuzil (projéteis) com silenciador
  Granada antigravitacional
  Granada de atordoamento
  Granada de fragmentação
  Granada de plasma
  Granada de radiação
  Granada eletromagnética
  Granada fumígena (sinalização)
  Katana
  Katana de energia
  Kunai
  Kunai de energia
  Kusarigama
  Kusarigama de energia
  Lança de combate
  Lança de energia
  Lança-chamas
  Lança-granadas
  Lança-míssil
  Metralhadora laser
  Metralhadora de plasma
  Metralhadora (projéteis)
  Metralhadora laser com silenciador
  Metralhadora de plasma com silenciador
  Metralhadora (projéteis) com silenciador
  Mina de aproximação (antigravitacional)
  Mina de aproximação (atordoamento)
  Mina de aproximação (eletromagnética)
  Mina de aproximação (fragmentação)
  Mina de aproximação (plasma)
  Mina de aproximação (radiação)
  Mina de controle remoto (antigravitacional)
  Mina de controle remoto (atordoamento)
  Mina de controle remoto (eletromagnética)
  Mina de controle remoto (fragmentação)
  Mina de controle remoto (plasma)
  Mina de controle remoto (radiação)
  Mina temporalizada (antigravitacional)
  Mina temporalizada (atordoamento)
  Mina temporalizada (eletromagnética)
  Mina temporalizada (fragmentação)
  Mina temporalizada (plasma)
  Mina temporalizada (radiação)
  Nunchaku
  Nunchaku de energia
  Pistola laser
  Pistola de plasma
  Pistola (projéteis)
  Pistola tranquilizante
  Pistola laser com silenciador
  Pistola de plasma com silenciador
  Pistola (projéteis) com silenciador
  Pistola tranquilizante com silenciador
  Pistola de pregos
  Pé de cabra
  Revólver (projéteis)
  Revólver (projéteis) com silenciador
  Rifle de fusão nuclear
  Rifle sniper laser
  Rifle sniper de plasma
  Rifle sniper (projéteis)
  Rifle sniper laser com silenciador
  Rifle sniper de plasma com silenciador
  Rifle sniper (projéteis) com silenciador
  Shotgun de plasma
  Shotgun (projéteis)
  Shotgun de radiação
  Shotgun de fusão nuclear
  Shuriken
  Shuriken de energia
  Soco-inglês
  Soco-inglês de energia
  Soco-inglês elétrico
  Soldador de mão (chama)
  Taco de beisebol
  Taco de beisebol com pregos
  Wakizashi
  Wakizashi de energia
};

const ARMADURAS = {
  Armorion Blindado
Armorion Espacial
Campo de força defletor
Colete balístico
EVA (atividade extraveicular)
EVA Militar (atividade extraveicular militar)
Exoesqueleto
IVA (atividade intraveicular)
Nano-Block
Traje anti-radiação
};


const EQUIPAMENTOS = {
  'Adrenalina injetável': {},
  'Algemas': {},
  'Alicate de manutenção': {},
  'Antibiótico antibacteriano': {},
  'Antídoto contra venenos': {},
  'Aspirador de resíduos': {},
  'Balança digital portátil': {},
  'Bastão Sinalizador (consumível)': {},
  'Bateria portátil': {},
  'Broche militar': {},
  'Brânquias artificiais': {},
  'Cabo de aço': {},
  'Cabo de fibra': {},
  'Cabo de rede': {},
  'Cadeira de rodas': {},
  'Cartão de identificação': {},
  'Cantil sintetizador de água': {},
  'Cobertor térmico': {},
  'Cola industrial': {},
  'Computador portátil': {},
  'Comunicador interestelar': {},
  'Comunicador portátil': {},
  'Contador geiger': {},
  'Cortador de metal': {},
  'Cápsula contentora de matéria escura': {},
  'Densitômetro': {},
  'Detector de patógenos': {},
  'Detector de toxinas': {},
  'Diário eletrônico': {},
  'Extintor de incêndio': {},
  'Fita adesiva militar': {},
  'Folha verde quadriculda': {},
  'Grampeador industrial': {},
  'HD externo de armazenamento': {},
  'Imã de alta potência': {},
  'Injetável de proteção à hipertermia': {},
  'Injetável de proteção à hipotermia': {},
  'Interponder de matéria escura': {},
  'Kit de análise química': {},
  'Kit de arqueologia': {},
  'Kit de ciência forense': {},
  'Kit de escalada': {},
  'Kit de primeiros socorros': {},
  'Kit de reparo cibernético': {},
  'Kit de reparo de armas': {},
  'Kit de reparo de máquinas': {},
  'Kit de reparo de naves': {},
  'Lanterna incandescente': {},
  'Lanterna neon': {},
  'Linha de fibra': {},
  'Livro científico': {},
  'Luvas resistentes de fibra': {},
  'Maçarico a gás': {},
  'Maçarico a laser': {},
  'Maço de cigarros': {},
  'Mochila militar': {},
  'Muleta de alumínio': {},
  'Munição de fusão nuclear': {},
  'Munição de fuzil': {},
  'Munição de Lança-granadas': {},
  'Munição de laser': {},
  'Munição de pistola': {},
  'Munição de plasma': {},
  'Munição de radiação': {},
  'Munição de revólver': {},
  'Munição de rifle': {},
  'Máscara respiratória': {},
  'Míssil': {},
  'Óculos de proteção UV': {},
  'Óleo incinerador (lança-chamas)': {},
  'Painel portátil de acesso a computadores': {},
  'Pasta de microfibra': {},
  'Pasta térmica': {},
  'Peças sobressalentes do motor de dobra': {},
  'Peças sobressalentes do motor subluz': {},
  'Pipetas para laboratório': {},
  'Pó de fibra de vidro': {},
  'Rádio comunicador analógico': {},
  'Scanner biológico': {},
  'Sensor de emissão eletromagnética': {},
  'Sensor de inteligência artificial': {},
  'Sensor de minas e explosivos': {},
  'Sensor de movimento': {},
  'Sensor de ondas sonoras': {},
  'Sensor de qualidade de oxigênio': {},
  'Sensor de temperatura': {},
  'Silenciador de fuzil': {},
  'Silenciador de pistola ou revólver': {},
  'Sinalizador de rifle': {},
  'Sintetizador de Alimentos': {},
  'Termostato': {},
  'Termômetro de precisão': {},
  'Tesoura industrial': {},
  'Tradutor universal alienígena': {},
  'Tradutor universal terráqueo': {},
  'Tranquilizantes (munição)': {},
  'Visor de infravisão': {},
  'Visor intensificador de luz ': {},
  'Voltímetro': {},
  'Walkie-talkie analógico': {},
};

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
      document.getElementById('arquetipo-info').innerHTML = `Nenhum Arquétipo selecionado.\nCom a opção "[todos]" marcada o gerador irá sorteá-lo.`;
      renderDetalhesDoutrina('');
      console.log(`Nenhum arquétipo selecionado`);
    });
  } else {
    preencherSelectEncadeado([],'doutrina',ARQUETIPOS[arquetipo]['Doutrinas'],()=>{
      document.getElementById('arquetipo-info').innerHTML = ARQUETIPOS[arquetipo].detalhes;
      renderDetalhesDoutrina('');
      console.log(`Arquétipo selecionado: ${arquetipo}`);
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
    document.getElementById('doutrina-info').innerHTML = DOUTRINAS[doutrina]['Descrição'];
  }
}

document.getElementById('doutrina').addEventListener('input',(event)=>{
  event.preventDefault();
  let doutrina = event.target.value;
  renderDetalhesDoutrina(doutrina);
});

document.getElementById('verbete1').addEventListener('input',(event)=>{
  event.preventDefault();
  let verbete1 = event.target.value;
  preencherSelectEncadeado([verbete1],'verbete2',Object.keys(VERBETES),()=>{
    console.log(`Verbete 1 selecionado: ${verbete1}`);
  });
});

document.getElementById('verbete2').addEventListener('input',(event)=>{
  event.preventDefault();
  let verbete1 = obterValorSelect('verbete1');
  let verbete2 = event.target.value;
  preencherSelectEncadeado([verbete1,verbete2],'verbete3',Object.keys(VERBETES),()=>{
    console.log(`Verbete 2 selecionado: ${verbete2}`);
  });
});

document.getElementById('verbete3').addEventListener('input',(event)=>{
  event.preventDefault();
  let verbete3 = event.target.value;
  console.log(`Verbete 3 selecionado: ${verbete3}`);
});

function iniciar() {
  preencherSelect('arquetipo',Object.keys(ARQUETIPOS),()=>{
    preencherSelect('verbete1',Object.keys(VERBETES),()=>{
      preencherSelect('armamento',Object.keys(ARMAMENTOS),()=>{
        renderDetalhesEspecie('');
        renderDetalhesArquetipo('');
        renderDetalhesDoutrina('');
        console.log(`Página carregada: v${VERSAO}`);
      });
    });
  });
}

iniciar();

//--------------------------

function rolar(elemento,callback) {
  if (elemento.includes('#')) {
    let tipo = elemento.split('#')[1];
    sortearLugar(tipo,callback);
  } else if (elemento == 'itens') {
    let quantidade = Math.floor(Math.random() * 3) + 1;
    let vetor = [...Array(quantidade).keys()];
    let retorno = '';

    let itens = SCAVENGING.concat(ELEMENTOS[elemento]);

    vetor.forEach((item, i) => {
      let index = Math.floor(Math.random() * itens.length);
      retorno += `${itens[index]}\n`;

      if (i == (vetor.length - 1)) {
        callback(retorno);
      }
    });
  } else if (elemento == 'walkers') {
    let index_walkers_past = Math.floor(Math.random() * WALKERS_PAST.length);
    let index_walkers_wounds = Math.floor(Math.random() * WALKERS_WOUNDS.length);
    callback(`${WALKERS_PAST[index_walkers_past]}\n${WALKERS_WOUNDS[index_walkers_wounds]}`);
  } else if (elemento == 'scavenging') {
    let index = Math.floor(Math.random() * SCAVENGING.length);
    callback(SCAVENGING[index]);
  } else if (elemento == 'npc') {
    rolarNPC(callback);
  } else if (elemento == 'personagens') {
    rolarPersonagem(callback);
  } else if (elemento == 'issues') {
    let issues = NPC_SECRET_ISSUES.concat(NPC_ISSUES);
    let index = Math.floor(Math.random() * issues.length);
    callback(issues[index]);
  } else {
    if (elemento == 'orla') {
      let chance = Math.floor(Math.random() * 10);
      if (chance >= 8) {
          elemento = 'lugares';
      }
    }
    let index = Math.floor(Math.random() * ELEMENTOS[elemento].length);
    callback(ELEMENTOS[elemento][index]);
  }
}

function selecionarSkills(skills,quantidade,callback) {
  if (quantidade == 0) {
    callback(skills,'');
  } else {
    let vetor = [...Array(quantidade).keys()];
    skills = JSON.parse(JSON.stringify(skills));
    let retorno = '';

    vetor.forEach((item, i) => {
      let index = Math.floor(Math.random() * skills.length);
      retorno += (retorno == '') ? skills[index] : `, ${skills[index]}`;
      skills.splice(index, 1);

      if (i == (vetor.length - 1)) {
        callback(skills,retorno);
      }
    });
  }
}

function rolarNPC(callback) {
  let dado = Math.floor(Math.random() * 6) + 1;
  let trained = 0;
  let expert = 0;

  if (dado == 1) {
    // zerado
  } else if (dado == 2) {
    trained = 1;
  } else if (dado == 3) {
    trained = 2;
  } else if (dado == 4) {
    trained = 1;
    expert = 1;
  } else if (dado == 5) {
    trained = 2;
    expert = 1;
  } else {
    trained = 3;
    expert = 2;
  }

  let nome = NOMES[Math.floor(Math.random() * NOMES.length)];
  let idade = Math.floor(Math.random() * 60) + 10;
  let caracteristicas = CARACTERISTICAS[Math.floor(Math.random() * CARACTERISTICAS.length)];
  let npc_issues = NPC_ISSUES[Math.floor(Math.random() * NPC_ISSUES.length)];
  let npc_secret_issues = NPC_SECRET_ISSUES[Math.floor(Math.random() * NPC_SECRET_ISSUES.length)];
  let npc_gear = NPC_GEAR[Math.floor(Math.random() * NPC_GEAR.length)];

  selecionarSkills(SKILLS,trained,(skills,trained_skills)=>{
    selecionarSkills(skills,expert,(skills,expert_skills)=>{
      let npc = `Nome: ${nome}\nIdade: ${idade}\n`;
      npc += `skills (4 dados): ${skills.join(', ')}\nTrained skills (5 dados): ${(trained_skills == '') ? 'Nenhuma' : trained_skills}\nExpert skills (8 dados): ${(expert_skills == '') ? 'Nenhuma' : expert_skills}\n`;
      npc += `Caracteristicas: ${caracteristicas}\n`;
      npc += `Issues: ${npc_issues}\n`;
      npc += `Secret Issues: ${npc_secret_issues}\n`;
      npc += `Gear:\n${npc_gear}\n`;

      rolar('itens',valor=>{
        npc += valor;

        callback(npc);
      });
    });
  });
}
