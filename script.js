const monsters = [
  {
    name: "Nergigante",
    category: "dragao",
    habitat: "Novo Mundo",
    weaknesses: "Gelo, Dragão",
    description: `Conhecido como o Flagelo dos Anciões, Nergigante é uma fera predadora e agressiva que domina o Novo Mundo com sua brutalidade. Seu corpo é coberto por espinhos rígidos que crescem e se regeneram rapidamente durante a batalha, tornando-o uma ameaça constante. Mede cerca de 8 metros e pesa aproximadamente 3500 kg. É territorial e extremamente agressivo, atacando qualquer coisa que invada seu espaço. Suas garras afiadas e ataques com espinhos causam danos devastadores, e seu rugido ecoa pelo campo de batalha, inspirando medo até nos caçadores mais experientes.`,
    size: "8 metros",
    weight: "3500 kg",
    image: "https://i.pinimg.com/736x/54/ba/9d/54ba9d35c68abb7c1f3128cb390b81a8.jpg"
  },
  {
    name: "Nergigante Ferrenho",
    category: "dragao",
    habitat: "Novo Mundo",
    weaknesses: "Gelo, Dragão",
    description: `Uma variante mais feroz do Nergigante, o Ruiner possui espinhos negros e uma força ainda maior. Este dragão ancião é uma força da natureza, destruindo tudo em seu caminho com ataques rápidos e poderosos. Seu temperamento é ainda mais violento, tornando-o um desafio extremo para qualquer caçador. A fúria e a selvageria desse monstro são lendárias, e ele é temido até mesmo pelos outros monstros do Novo Mundo.`,
    size: "8 metros",
    weight: "3500 kg",
    image: "https://i.pinimg.com/1200x/fe/99/e8/fe99e8c754b5c72b78a047d4bbb6a9e4.jpg"
  },
  {
    name: "Kirin",
    category: "dragao",
    habitat: "Montanhas Nevadas",
    weaknesses: "Fogo, Gelo",
    description: `Kirin é um dragão ancião elétrico que se assemelha a um unicórnio mitológico, com um corpo elegante e chifres que canalizam poderosas descargas elétricas. Raramente visto, ele prefere as regiões montanhosas cobertas de neve, onde se move com agilidade impressionante. Mede cerca de 4 metros e pesa 400 kg. Suas rajadas de eletricidade podem paralisar predadores e caçadores, e ele costuma evitar confrontos diretos, preferindo fugir ou usar sua velocidade e eletricidade para se proteger.`,
    size: "4 metros",
    weight: "400 kg",
    image: "https://i.pinimg.com/1200x/ff/67/08/ff67086cf0829cb72b0af61f1c3b567d.jpg"
  },
  {
    name: "Velkhana",
    category: "dragao",
    habitat: "Região de Gelo",
    weaknesses: "Fogo",
    description: `Velkhana é um majestoso dragão de gelo que domina a região congelada com sua habilidade de criar tempestades de neve e congelar o ambiente. Mede cerca de 9 metros e pesa 3200 kg. Seus ataques são precisos e elegantes, utilizando a manipulação do gelo para criar lâminas e explosões congelantes que desaceleram seus inimigos. Velkhana é territorial e demonstra um comportamento calmo, mas se torna letal quando ameaçado.`,
    size: "9 metros",
    weight: "3200 kg",
    image: "https://i.pinimg.com/1200x/a9/e6/33/a9e633c59ba30013ef602f77d28f3cfa.jpg"
  },
  {
    name: "Lunastra",
    category: "dragao",
    habitat: "Região Vulcânica",
    weaknesses: "Água, Dragão",
    description: `Companheira feroz do Teostra, Lunastra é conhecida por sua manipulação de fogo azul e lava. Mede aproximadamente 8 metros e pesa 2800 kg. É uma criatura extremamente agressiva que lança ataques em área, causando queimaduras severas com seu fogo intenso. Sua presença em uma região causa instabilidade vulcânica, e é conhecida por sua resistência e tenacidade em batalha.`,
    size: "8 metros",
    weight: "2800 kg",
    image: "https://i.pinimg.com/1200x/7b/e0/4e/7be04e3dc8542f9cf8d2b1c4ba7ed6f7.jpg"
  },
  {
    name: "Teostra",
    category: "dragao",
    habitat: "Região Vulcânica",
    weaknesses: "Água, Gelo",
    description: `Teostra é o dragão flamejante mestre das explosões, que usa suas chamas infernais para devastar qualquer inimigo. Com 8 metros de comprimento e 3000 kg, ele é extremamente territorial e conhecido por sua ferocidade. Seus ataques combinam fogo e explosões, que podem destruir até mesmo estruturas. Teostra é uma presença ameaçadora em regiões vulcânicas e seu rugido é suficiente para fazer o solo tremer.`,
    size: "8 metros",
    weight: "3000 kg",
    image: "https://i.pinimg.com/1200x/c3/b4/a3/c3b4a3c9fdabe105727940b531de3ebe.jpg"
  },
  {
    name: "Namielle",
    category: "dragao",
    habitat: "Regiões Aquáticas",
    weaknesses: "Raio, Dragão",
    description: `Namielle é um dragão ancião que controla tanto a água quanto a eletricidade, criando tempestades violentas para atacar seus adversários. Mede cerca de 10 metros e pesa 4000 kg. É capaz de formar correntes elétricas em corpos d’água para prender presas, além de invocar névoa para confundir os inimigos. Prefere regiões úmidas e aquáticas, onde sua habilidade elemental tem maior alcance e eficácia.`,
    size: "10 metros",
    weight: "4000 kg",
    image: "https://i.pinimg.com/1200x/e3/c2/82/e3c2823ab7294463be621672580c684e.jpg"
  },
  {
    name: "Shara Ishvalda",
    category: "dragao",
    habitat: "Subsolo",
    weaknesses: "Dragão",
    description: `Shara Ishvalda é um dragão ancião que manipula a areia e o terreno ao seu redor, criando tempestades e mudanças bruscas no campo de batalha. Com cerca de 12 metros, esse monstro é estratégico e extremamente perigoso. Pode formar barreiras de areia e utilizar ataques baseados em tremores e projéteis de pedra, alterando a geografia para ganhar vantagem. Sua presença é marcada por tempestades de areia e tremores constantes.`,
    size: "12 metros",
    weight: "Desconhecido",
    image: "https://i.pinimg.com/1200x/10/02/c0/1002c0dddc9a1e002ea6cd100047cdf2.jpg"
  },
  {
    name: "Kulve Taroth",
    category: "dragao",
    habitat: "Subsolo",
    weaknesses: "Água, Gelo",
    description: `Kulve Taroth é um dragão ancião imenso que acumula tesouros e ouro em sua carapaça, refletindo uma luz dourada intensa. Mede 10 metros e é conhecido por ataques explosivos que devastam grandes áreas do deserto. Altamente territorial, esse dragão é considerado um dos alvos mais cobiçados por caçadores em busca de riquezas. Sua carapaça dourada é difícil de penetrar, tornando a batalha um desafio estratégico.`,
    size: "10 metros",
    weight: "Desconhecido",
    image: "https://i.pinimg.com/1200x/c1/52/55/c152557a90dc1430ec9913f7450eebf0.jpg"
  },
  {
    name: "Alatreon",
    category: "dragao",
    habitat: "Diversas regiões",
    weaknesses: "Fogo, Gelo, Trovão, Dragão",
    description: `Alatreon é um dragão ancião elemental capaz de controlar fogo, gelo, trovão e dragão, alternando entre eles conforme o combate avança. Mede cerca de 13 metros. Sua versatilidade elemental o torna um adversário imprevisível e mortal, capaz de adaptar seus ataques para explorar as fraquezas do inimigo. Alatreon pode destruir vastas áreas com seu poder, e sua presença indica perigo extremo.`,
    size: "13 metros",
    weight: "Desconhecido",
    image: "https://i.pinimg.com/1200x/86/5e/a0/865ea0818da13f5d8ffcf69cc0dd571a.jpg"
  },
  {
    name: "Fatalis",
    category: "dragao",
    habitat: "Castelos e ruínas",
    weaknesses: "Dragão, Gelo",
    description: `Considerado o dragão mais temido e lendário do Novo Mundo, Fatalis é uma besta colossal com cerca de 20 metros de comprimento. Seu corpo robusto e escamoso pode causar destruição em larga escala com ataques de fogo e sua força física avassaladora. Vive em castelos antigos e ruínas, onde sua presença mantém caçadores afastados. Derrotá-lo é um feito para os caçadores mais habilidosos e corajosos.`,
    size: "20 metros",
    weight: "Desconhecido",
    image: "https://i.pinimg.com/736x/8f/a0/fd/8fa0fd062aecc26e5864189779d6c7e1.jpg"
  },
  {
    name: "Vaal Hazak",
    category: "dragao",
    habitat: "Vale Podre",
    weaknesses: "Fogo, Dragão",
    description: `Vaal Hazak habita áreas podres, usando seu hálito venenoso para enfraquecer e destruir suas presas lentamente. Mede 12 metros e é conhecido por criar ambientes tóxicos que dificultam o combate. Seus ataques drenam a vitalidade do inimigo, e sua resistência a ataques físicos o torna um oponente tenaz que exige preparo e estratégia dos caçadores.`,
    size: "12 metros",
    weight: "Desconhecido",
    image: "https://i.pinimg.com/1200x/f7/7b/5a/f77b5a27a1c04d793813ecd3a5acfec8.jpg"
  },
  {
    name: "Vaal Hazak Velado",
    category: "dragao",
    habitat: "Profundezas do Vale Podre",
    weaknesses: "Fogo, Dragão",
    description: `O Vaal Hazak Velado é uma forma mais poderosa e agressiva do Vaal Hazak tradicional, que habita as áreas mais profundas e perigosas do Vale Podre. Ele exala uma névoa tóxica ainda mais densa e mortal, capaz de drenar a vitalidade dos caçadores com maior rapidez. Seu corpo é coberto por escamas que parecem ainda mais sombrias e resistentes, tornando-o um oponente letal. Esse dragão ancião é um desafio extremo, exigindo estratégia e preparo para sobreviver à sua presença sufocante.`,
    size: "12 metros",
    weight: "Desconhecido",
    image: "https://i.pinimg.com/736x/4d/a8/39/4da8395518984bb63f6f88b1b62542cd.jpg"
  },
  {
    name: "Xeno'jiiva",
    category: "dragao",
    habitat: "Caverna secreta",
    weaknesses: "Fogo, Dragão",
    description: `Xeno'jiiva é um dragão ancião que absorve energia ambiental para fortalecer seus ataques. Mede cerca de 20 metros e possui uma aparência de outro mundo, com membros finos e uma carapaça translúcida. É extremamente perigoso e imprevisível, podendo causar ondas de choque poderosas e ataques devastadores em um curto espaço de tempo.`,
    size: "20 metros",
    weight: "Desconhecido",
    image: "https://i.pinimg.com/1200x/37/0b/c5/370bc5ad88ddcce21615b0605e11f786.jpg"
  },
  {
    name: "Safi'jiiva",
    category: "dragao",
    habitat: "Ninho especial",
    weaknesses: "Fogo, Dragão",
    description: `Forma adulta de Xeno'jiiva, Safi'jiiva mede cerca de 22 metros e é capaz de emitir ondas massivas de energia que alteram completamente o campo de batalha. Essa criatura testa os limites até dos caçadores mais experientes, com ataques que combinam força bruta, energia elemental e controle de campo. Sua carapaça é resistente e ele possui uma presença imponente e ameaçadora.`,
    size: "22 metros",
    weight: "Desconhecido",
    image: "https://i.pinimg.com/1200x/89/9a/38/899a381dadb24403d272c389107df4ff.jpg"
  },
  {
    name: "Behemoth",
    category: "dragao",
    habitat: "Área especial",
    weaknesses: "Gelo, Fogo",
    description: `Behemoth é um dragão colossal que desafia caçadores com sua combinação de força bruta e magia. Seu tamanho é quase indescritível, e ele pode usar uma variedade de ataques devastadores que incluem investidas físicas, magia de gelo e fogo. O combate contra Behemoth é uma batalha épica que exige trabalho em equipe e estratégia.`,
    size: "Extremamente grande",
    weight: "Desconhecido",
    image: "https://i.pinimg.com/1200x/1a/ea/b1/1aeab18dfff5222cbdbefd3a653c541f.jpg"
  }
];

function createMonsterCard(monster) {
  const card = document.createElement("article");
  card.className = "monster";

  const img = document.createElement("img");
  img.src = monster.image || "https://via.placeholder.com/250x180?text=Imagem+Indisponível";
  img.alt = monster.name;

  const info = document.createElement("div");
  info.className = "monster-info";

  info.innerHTML = `
    <h2>${monster.name}</h2>
    <p>${monster.description}</p>
    <table>
      <tr><th>Habitat</th><td>${monster.habitat}</td></tr>
      <tr><th>Fraquezas</th><td>${monster.weaknesses}</td></tr>
      <tr><th>Tamanho</th><td>${monster.size}</td></tr>
      <tr><th>Peso</th><td>${monster.weight}</td></tr>
    </table>
  `;

  card.appendChild(img);
  card.appendChild(info);

  return card;
}

function loadMonsters() {
  const list = document.getElementById("monster-list");
  monsters.forEach(monster => {
    const card = createMonsterCard(monster);
    list.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadMonsters);


