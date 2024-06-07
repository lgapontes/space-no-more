const VERSAO = '1.0';

const ESPECIES = {
  'Humano': {},
  'Projeção': {},
  'Sintético': {},
};

const ARQUETIPOS = {
  'Alquimancer': {
    'Doutrinas': ['Perceber matéria escura','Criar combustão','Criar área anti-vácuo','Teletransportar','Criar oxigênio'],
  },
  'Armipotente': {
    'Doutrinas': ['Dois ataques por rodada','+1 Vida','+1 Armadura','+1 Dano','+1 Atacar'],
  },
  'Psionista': {
    'Doutrinas': ['Telecinesia (mover objetos)','Psicocinese (provocar atordoamento)','Desviar projéteis','Destruir objetos','Ataque psíquico'],
  },
  'Restauralista': {
    'Doutrinas': ['Curar vida biológica','Curar vida sintética','Reviver criatura senciente','Remover radiação ou doença','Retardar dextinto'],
  },
  'Sociomancer': {
    'Doutrinas': ['Ler mentes','Causar esquecimento','Comandar indivíduo','Amistosidade forçada','Perceber intenção'],
  },
  'Tempomaker': {
    'Doutrinas': ['Voltar no tempo','Paralizar tempo','Visão do passado','Prever o futuro','Combate antecipado'],
  },
};

const DOUTRINAS = {
  'Perceber matéria escura': {
    'Descrição': 'Percebe a presença de Matéria Escura a 20 metros a partir do personagem.',
  },
  'Criar combustão': {
    'Descrição': 'Cria uma chama autoinflamável no ponto visível a no máximo 20 metros a partir do personagem. Esta chama provoca 2 de Dano por 1 Rodada.',
  },
  'Criar área anti-vácuo': {
    'Descrição': 'Cria uma esfera de 3 metros de diâmetro (comporta até 5 indivíduos) que protege contra o vácuo. Duração de 1 minuto. Caso a esfera seja recriada após a duração, será necessário abastecê-la com oxigênio.',
  },
  'Teletransportar': {
    'Descrição': 'Teletransporta um objeto ou indivíduo para uma posição a no máximo 20 metros de distância a partir do personagem.',
  },
  'Criar oxigênio': {
    'Descrição': 'Cria oxigênio em uma área de 10 metros cúbicos para no máximo 10 indivíduos por 1 hora. Se a área for maior, até 30 metros quadrados, a duração é de 30 minutos. Se a área for aberta o período é 10 minutos.',
  },
  'Dois ataques por rodada': {
    'Descrição': 'Com esta doutrina o personagem pode executar dois ataques com uma única Ação Principal.',
  },
  '+1 Vida': {
    'Descrição': 'Adiciona um ponto de vida ao total do personagem.',
  },
  '+1 Armadura': {
    'Descrição': 'Adiciona um ponto de Armadura ao total do personagem.',
  },
  '+1 Dano': {
    'Descrição': 'Adiciona +1 em todo tipo de Dano provocado pelo personagem.',
  },
  '+1 Atacar': {
    'Descrição': 'Adiciona um bônus de +1 em todas jogadas de ataque do personagem.',
  },
  'Telecinesia (mover objetos)': {
    'Descrição': 'Pode mover ou sustentar objetos a uma distância máxima de 20 metros. O peso máximo do objeto é de 50 quilos.',
  },
  'Psicocinese (provocar atordoamento)': {
    'Descrição': 'Atordoa um indivíduo por 1 rodada a uma distância máxima de 20 metros.',
  },
  'Desviar projéteis': {
    'Descrição': 'Como uma Ação Reativa, um personagem pode declarar interceptar projéteis disparados contra um alvo. O alvo deve estar a no máximo 20 metros de distância e os projéteis devem ser conduzidos para alguma direção. Funciona com qualquer tipo de projétil, seja físico, de plasma, laser ou energia. Disparos de radiação ou fusão nuclear não são afetados.',
  },
  'Destruir objetos': {
    'Descrição': 'Destrói objetos pequenos a uma distância máxima de 20 metros. A massa total do objeto não pode ultrapassar 5 quilos. Armas comuns se enquadram nesta métrica, mas Armas Pesadas, Escudos ou Armaduras não.',
  },
  'Ataque psíquico': {
    'Descrição': 'Afeta um alvo senciente com uma onda psíquica que provoca 2 de Dano. Pode alcançar um indivíduo visível a até 20 metros.',
  },
  'Curar vida biológica': {
    'Descrição': 'Cura 3 pontos de Vida de um indivíduo da espécie Humana. O indivíduo deve estar a 3 metros. Também se aplica a animais ou alienígenas biológicos.',
  },
  'Curar vida sintética': {
    'Descrição': 'Cura 2 pontos de Vida de um indivíduo da espécie Sintético ou Projeção. O indivíduo deve estar a 3 metros.',
  },
  'Reviver criatura senciente': {
    'Descrição': 'Revive uma criatura senciente (Humano, Sintético, Projeção, IA, Alienígena, Animais, entre outros) que tenha morrido a no máximo 1 hora. A criatura deve estar a 3 metros.',
  },
  'Remover radiação ou doença': {
    'Descrição': 'É capaz de remover todos os pontos de radiação ou doença de um indivíduo (qualquer espécie). O indivíduo deve estar a 3 metros.',
  },
  'Retardar dextinto': {
    'Descrição': 'Quando um personagem esgota seu marcador de Matéria Escura, ficando com zero pontos, ele é afetado pelo Dextinto, morrendo em 1 rodada. Com uma Ação Reativa o personagem pode retardar esse feito por 10 minutos.',
  },
  'Ler mentes': {
    'Descrição': 'Com essa doutrina o jogador pode perguntar ao narrador uma pergunta a respeito do pensamento de uma criatura controlada por ele, sendo que a resposta deve compor apenas as opções "sim", "não", ou "indiferente". Caso o personagem seja de outro jogador, quem responderá será o jogador. Em ambos os casos a resposta deve ser sincera.',
  },
  'Causar esquecimento': {
    'Descrição': 'Com essa doutrina o personagem pode fazer com que um outro personagem do jogo esqueça de um fato. O objeto de esquecimento deve ser pontual a uma ideia ou fato. Esquecer o nome é possível, porém esquecer todo o conhecimento de um assunto, não. O narrador tem a última palavra.',
  },
  'Comandar indivíduo': {
    'Descrição': 'Com essa doutrina o jogador pode conduzir uma cena narrativa para um personagem do narrador. Nesta cena o personagem não pode se ferir ou algo parecido. Atacar um aliado é possível, atear fogo em um local onde o próprio será ferido, não. Em combate a cena dura 1 rodada. Fora de combate dura 1 minuto.',
  },
  'Amistosidade forçada': {
    'Descrição': 'Com essa doutrina um personagem do narrador assumirá uma postura amistosa em relação ao personagem do jogador, com duração de 10 minutos. Essa amistosidade é branda. Pedir ao personagem para atacar um aliado ou se ferir fará com que o efeito termine.',
  },
  'Perceber sensação': {
    'Descrição': 'Com essa doutrina um jogador pode fazer uma pergunta ao narrador a respeito da sensação de um personagem. A resposta deve ser sincera, mas restrita a casos brandos como "ele vai atacar" ou "ele está com medo".',
  },
  'Voltar no tempo': {
    'Descrição': 'Esta doutrina permite ao jogador voltar a narrativa em uma cena ou, em combate, uma rodada. Neste caso ele pode por exemplo narrar outra ação ou até mesmo rerolar dados. Não pode ser utilizada com Ação Reativa - ou seja, em combates, deve estar na vez do personagem. O retorno da cena envolve todos os elementos envolvidos a até 3 metros cúbicos a partir da posição do personagem. Não funciona em caso de morte ou dextinto - a criatura continua morta.',
  },
  'Paralizar tempo': {
    'Descrição': 'Esta doutrina paraliza uma criatura ou objeto por 1 rodada a uma distância máxima de até 20 metros a partir do personagem. A criatura ou objeto não pode ter peso superior a 200 quilos.',
  },
  'Visão do passado': {
    'Descrição': 'O jogador pode fazer uma pergunta ao narrador e o mesmo deve responder com sinceridade. O alcance máximo no passado é de 1 dia. Se houver indivíduos que o personagem não conheça, eles vão aparecer como sombras. A cena será restrita no local atual do personagem.',
  },
  'Prever o futuro': {
    'Descrição': 'O jogador pode fazer uma pergunta ao narrador e o mesmo deve responder com sinceridade. O alcance máximo no futuro é de 1 hora. Se houver indivíduos que o personagem não conheça, eles vão aparecer como sombras. A cena será restrita no local atual do personagem. Obviamente a cena pode não se concretizar se os personagens envolvidos agirem de forma diferente para tentar alterá-la. Tentativas de responder dúvidas como "eu vou morrer?" ou "a nave vai explodir?" não são efetivas.',
  },
  'Combate antecipado': {
    'Descrição': 'Esta doutrina permite ao personagem executar 1 Ação de Movimento e 1 Ação Principal antes de todos na ordem de iniciativa - ou seja, antes do início do combate. Após executá-las, ele age normalmente quando chegar sua vez na iniciativa.',
  },
};

const PROFISSAO = {
  'Biologia': {},
  'Computadores': {},
  'Geologia': {},
  'Hiperespaço': {},
  'Maquinário': {},
  'Medicina': {},
  'Militar': {},
  'Pilotagem': {},
  'Psicologia': {},
  'Química': {},
  'Robótica': {},
  'Xenobiologia': {},
};

const VERBETES = {
  'Analisar quimicamente': {},
  'Arremessar objetos': {},
  'Atacar corpo-a-corpo': {},
  'Caminhar no espaço': {},
  'Convencer indivíduos': {},
  'Enganar indivíduos': {},
  'Esconder rapidamente': {},
  'Estudar alienígenas': {},
  'Exercer força bruta': {},
  'Forjar e reparar armas': {},
  'Hackear computadores': {},
  'Intimidar indivíduos': {},
  'Investigar pistas': {},
  'Liderar indivíduos': {},
  'Mover furtivamente': {},
  'Operar e reparar máquinas': {},
  'Perceber ambiente': {},
  'Pesquisar física quântica': {},
  'Pilotar nave': {},
  'Praticar acrobacia': {},
  'Realizar primeiros socorros': {},
  'Reparar sintéticos e projeções': {},
  'Usar armas de fogo': {},
  'Usar explosivos': {},
};

const ARMAMENTOS = {
  'Bastão de combate': {},
  'Bastão de energia': {},
  'Bisturi': {},
  'Blade de combate': {},
  'Blade de energia': {},
  'Blade de luz': {},
  'Blade elétrica': {},
  'Blade radioativa': {},
  'Cassetete elétrico': {},
  'Cassetete': {},
  'Corrente': {},
  'Cortador laser': {},
  'Faca de combate': {},
  'Faca laser': {},
  'Fuzil (laser)': {},
  'Fuzil (plasma)': {},
  'Fuzil (projéteis)': {},
  'Fuzil com silenciador (laser)': {},
  'Fuzil com silenciador (plasma)': {},
  'Fuzil com silenciador (projéteis)': {},
  'Granada antigravitacional': {},
  'Granada de atordoamento': {},
  'Granada de fragmentação': {},
  'Granada de plasma': {},
  'Granada de radiação': {},
  'Granada eletromagnética': {},
  'Granada fumígena (sinalização)': {},
  'Katana de energia': {},
  'Katana': {},
  'Kunai de energia': {},
  'Kunai': {},
  'Lança de combate': {},
  'Lança de energia': {},
  'Lança-chamas': {},
  'Lança-granadas': {},
  'Lança-míssil': {},
  'Metralhadora (laser)': {},
  'Metralhadora (plasma)': {},
  'Metralhadora (projéteis)': {},
  'Metralhadora com silenciador (laser)': {},
  'Metralhadora com silenciador (plasma)': {},
  'Metralhadora com silenciador (projéteis)': {},
  'Mina de aproximação (antigravitacional)': {},
  'Mina de aproximação (atordoamento)': {},
  'Mina de aproximação (eletromagnética)': {},
  'Mina de aproximação (fragmentação)': {},
  'Mina de aproximação (plasma)': {},
  'Mina de aproximação (radiação)': {},
  'Mina de controle remoto (antigravitacional)': {},
  'Mina de controle remoto (atordoamento)': {},
  'Mina de controle remoto (eletromagnética)': {},
  'Mina de controle remoto (fragmentação)': {},
  'Mina de controle remoto (plasma)': {},
  'Mina de controle remoto (radiação)': {},
  'Mina temporalizada (antigravitacional)': {},
  'Mina temporalizada (atordoamento)': {},
  'Mina temporalizada (eletromagnética)': {},
  'Mina temporalizada (fragmentação)': {},
  'Mina temporalizada (plasma)': {},
  'Mina temporalizada (radiação)': {},
  'Pistola (laser)': {},
  'Pistola (plasma)': {},
  'Pistola (projéteis)': {},
  'Pistola (tranquilizante)': {},
  'Pistola com silenciador (laser)': {},
  'Pistola com silenciador (plasma)': {},
  'Pistola com silenciador (projéteis)': {},
  'Pistola com silenciador (tranquilizante)': {},
  'Pistola de pregos': {},
  'Pé de cabra': {},
  'Revólver (projéteis)': {},
  'Revólver com silenciador (projéteis)': {},
  'Rifle de fusão nuclear': {},
  'Rifle sniper (laser)': {},
  'Rifle sniper (plasma)': {},
  'Rifle sniper (projéteis)': {},
  'Rifle sniper com silenciador (laser)': {},
  'Rifle sniper com silenciador (plasma)': {},
  'Rifle sniper com silenciador (projéteis)': {},
  'Shotgun (plasma)': {},
  'Shotgun (projéteis)': {},
  'Shotgun (radiação)': {},
  'Shotgun de fusão nuclear': {},
  'Shuriken de energia': {},
  'Shuriken': {},
  'Soco-inglês de energia': {},
  'Soco-inglês elétrico': {},
  'Soco-inglês': {},
  'Soldador de mão (chama)': {},
  'Taco de beisebol': {},
  'Wakizashi de energia': {},
  'Wakizashi': {},
};

const EQUIPAMENTOS = {
  'Silenciador de pistola ou revólver': {},
  'Silenciador de fuzil': {},
  'Sinalizador de rifle': {},
  'Munição de pistola': {},
  'Munição de revólver': {},
  'Munição de fuzil': {},
  'Munição de rifle': {},
  'Munição de plasma': {},
  'Munição de radiação': {},
  'Munição laser': {},
  'Munição de fusão nuclear': {},
  'Tranquilizantes (munição)': {},
  'Granadas (unidade, munição)': {},
  'Míssil (unidade, munição)': {},
  'Óleo incinerador (lança-chamas)': {},
  'Kit de reparar armas corpo-a-corpo': {},
  'Kit de reparar armas à distância': {},
  'Sinalizador': {},
  'Sinalizador': {},
  'Sinalizador': {},
  'Sinalizador': {},
  'Sinalizador': {},
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

document.getElementById('arquetipo').addEventListener('input',(event)=>{
  event.preventDefault();
  let arquetipo = event.target.value;
  if (arquetipo == '') {
    limparSelect('doutrina',()=>{
      console.log(`Nenhum arquétipo selecionado`);
    });
  } else {
    preencherSelectEncadeado([],'doutrina',ARQUETIPOS[arquetipo]['Doutrinas'],()=>{
      console.log(`Arquétipo selecionado: ${arquetipo}`);
    });
  }
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
      console.log(`Página carregada: v${VERSAO}`);
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
