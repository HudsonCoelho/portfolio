const NOME = "Hudson Coelho";

let tituloProfissional = "Analista e Desenvolvedor de Sistemas";

let minhaBio =
    "Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis. Com habilidades em HTML, CSS e JavaScript, estou sempre buscando aprender e aprimorar minhas habilidades para entregar projetos de alta qualidade.";

let minhaNarrativa =
    "Comecei a programar como um jovem ninja curioso: cada desafio era uma missão que me ensinava algo novo. Hoje, uso minha disciplina em análise de sistemas e meu foco em design para construir soluções que ajudam pessoas reais, como se cada projeto fosse uma vila a proteger."
    + " Meu objetivo é transformar ideias em experiências que surpreendam e conectem, mantendo sempre a determinação de evoluir e a vontade de aprender mais a cada passo.";

let dataFormaturaTexto = "Data da formatura: 31/12/2026";

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;
let segundosFormatura = 60;

let anoIngresso = 2025;
let mesIngresso = 2;
let diaIngresso = 1;

let indefinido;
let nulo = null;

let curso = {
    nome: "Análise e Desenvolvimento de Sistemas",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário",
};

// ───────────────── QUIZ ─────────────────

const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");
const btnHyuga = document.getElementById("btn-hyuga");
const btnUzumaki = document.getElementById("btn-uzumaki");
const resultadoQuiz = document.getElementById("resultado-quiz");
const botaoMudaTexto = document.getElementById("mudaTexto");
const inputNome = document.getElementById("nome");
const botaoEnviar = document.getElementById("enviar");
const caixa = document.getElementById("caixa");

let pontosFront = 0;
let pontosBack = 0;
let pontosHyuga = 0;
let pontosUzumaki = 0;

// ───────────────── SKILLS ─────────────────

let minhasSkills = [
    { emoji: "🐍", label: "Python", chakra: "jutsu-fuuton" },
    { emoji: "🌐", label: "Desenvolvimento Web/Fullstack", chakra: "jutsu-suiton" },
    { emoji: "⚡", label: "JavaScript", chakra: "jutsu-raito" },
    { emoji: "⚛️", label: "React", chakra: "jutsu-katon" },
    { emoji: "🟢", label: "Node.js", chakra: "jutsu-fuuton" },
    { emoji: "💾", label: "Banco de Dados", chakra: "jutsu-doton" },
    { emoji: "🌿", label: "Git", chakra: "jutsu-doton" },
    { emoji: "🎨", label: "Design focado no usuário", chakra: "jutsu-katon" },
];

// ───────────────── PROJETOS ─────────────────

let projetos = [
    {
        nome: "Missão de Estoque",
        rank: "Chuunin",
        status: "Concluída",

        tecnologias: ["HTML/CSS/JavaScript", "Node.js", "Express", "MySQL"],

        conhecimentosAplicados: [
            "Desenvolvimento Web",
            "Banco de Dados",
            "Design focado no usuário",
        ],

        descricao: "Gerenciar um sistema de estoque online para a vila, garantindo suprimentos e logs seguros.",
    },

    {
        nome: "Operação Loja Digital",
        rank: "Jounin",
        status: "Concluída",

        tecnologias: ["Python", "Flask", "HTML/CSS/JavaScript", "SQLite"],

        conhecimentosAplicados: ["Desenvolvimento Web", "Banco de Dados", "Git"],

        descricao: "Construir uma loja digital ninja para vendas de equipamentos e recursos da vila.",
    },

    {
        nome: "Patrulha de Estacionamento",
        rank: "Genin",
        status: "Concluída",

        tecnologias: ["Python", "Tkinter", "SQLite"],

        conhecimentosAplicados: ["POO", "Desenvolvimento Desktop"],

        descricao: "Criar um sistema desktop para controlar locais de estacionamento e otimizar as rotas dos shinobi.",
    },

    {
        nome: "Operação FarmaFácil",
        rank: "Genin",
        status: "Concluída",

        tecnologias: ["HTML/CSS/JavaScript"],

        conhecimentosAplicados: ["Desenvolvimento Web", "Design Responsivo", "Manipulação de DOM"],

        descricao: "Desenvolver um portal farmacêutico estático completo com 9 páginas integradas (cadastro, login, estoques, telemedicina e acompanhamento de pedidos).",
    },
];

function mostrarTexto(id, texto) {
    document.getElementById(id).innerText = texto;
}

// Pegar data atual
function pegarDataAtual() {
    return new Date();
}

function carregarInformacoes() {
    mostrarTexto("meuNome", NOME);

    mostrarTexto("tituloProfissional", tituloProfissional);

    atualizarDatabookCard();
}

// ───────────────── DATABOOK NINJA CARD ─────────────────

const ninjaStats = {
    ninjutsu: 4.6, // Lógica & Back-End
    speed: 4.2,    // Velocidade de entrega / Git
    taijutsu: 4.0,  // Habilidades de design / Front-End
    genjutsu: 3.8,  // Experiência do usuário (UI/UX)
    stamina: 4.5    // Banco de dados & Infraestrutura
};

function calcularCoordenadasRadar(stats) {
    const cx = 100;
    const cy = 100;
    const rMax = 75; // Raio máximo do pentágono nível 4

    // Fórmulas para calcular os pontos de um pentágono regular em SVG
    const rNin = (stats.ninjutsu / 5) * rMax;
    const rSpe = (stats.speed / 5) * rMax;
    const rTai = (stats.taijutsu / 5) * rMax;
    const rGen = (stats.genjutsu / 5) * rMax;
    const rSta = (stats.stamina / 5) * rMax;

    const p1 = { x: cx, y: cy - rNin };
    const p2 = { x: cx + rSpe * Math.cos(-Math.PI / 10), y: cy + rSpe * Math.sin(-Math.PI / 10) };
    const p3 = { x: cx + rTai * Math.cos(3 * Math.PI / 10), y: cy + rTai * Math.sin(3 * Math.PI / 10) };
    const p4 = { x: cx - rGen * Math.cos(3 * Math.PI / 10), y: cy + rGen * Math.sin(3 * Math.PI / 10) }; // Espelhado à esquerda
    const p5 = { x: cx - rSta * Math.cos(-Math.PI / 10), y: cy + rSta * Math.sin(-Math.PI / 10) }; // Espelhado à esquerda

    return `${p1.x.toFixed(1)},${p1.y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)} ${p3.x.toFixed(1)},${p3.y.toFixed(1)} ${p4.x.toFixed(1)},${p4.y.toFixed(1)} ${p5.x.toFixed(1)},${p5.y.toFixed(1)}`;
}

function atualizarDatabookCard() {
    // 1. Renderizar o radar de habilidades dinamicamente
    const radarPoly = document.getElementById("radar-value-poly");
    if (radarPoly) {
        const pointsString = calcularCoordenadasRadar(ninjaStats);
        radarPoly.setAttribute("points", pointsString);
    }

    // 2. Preencher a tabela de missões dinamicamente
    let sRank = 0;
    let aRank = 0; // Jounin
    let bRank = 0; // Chuunin
    let cRank = 0; // Genin
    let dRank = typeof minhasSkills !== "undefined" ? minhasSkills.length : 0; // Skills totais

    if (typeof projetos !== "undefined") {
        projetos.forEach(projeto => {
            if (projeto.status === "Concluída") {
                if (projeto.rank === "Jounin") {
                    aRank++;
                } else if (projeto.rank === "Chuunin") {
                    bRank++;
                } else if (projeto.rank === "Genin") {
                    cRank++;
                }
            }
        });
    }

    mostrarTexto("m-s-count", sRank);
    mostrarTexto("m-a-count", aRank);
    mostrarTexto("m-b-count", bRank);
    mostrarTexto("m-c-count", cRank);
    mostrarTexto("m-d-count", dRank);
}

function mostrarTipos() {
    console.log(typeof nulo);
    console.log(typeof indefinido);
    console.log(typeof anoFormatura);
    console.log(typeof minhaBio);
    console.log(typeof tituloProfissional);
    console.log(typeof NOME);
    console.log(typeof curso);
}

function calcularTempoRestante() {
    const DATAATUAL = pegarDataAtual();

    let anoAtual = DATAATUAL.getFullYear();
    let mesAtual = DATAATUAL.getMonth() + 1;
    let diaAtual = DATAATUAL.getDate();
    let segundosAtuais = DATAATUAL.getSeconds();

    return {
        anos: anoFormatura - anoAtual,

        meses: mesFormatura - mesAtual,

        dias: diaFormatura - diaAtual,

        segundos: segundosFormatura - segundosAtuais,
    };
}

function gerarTextoFormatura() {
    let tempo = calcularTempoRestante();

    if (tempo.anos <= 0 && tempo.meses <= 0 && tempo.dias <= 0) {
        return "🎓 Curso Concluído!";
    }

    let texto = "Tempo restante para formatura: ";

    // Ano
    if (tempo.anos > 0) {
        if (tempo.anos === 1) {
            texto += `${tempo.anos} ano, `;
        } else {
            texto += `${tempo.anos} anos, `;
        }
    }

    // Mês
    if (tempo.meses > 0) {
        if (tempo.meses === 1) {
            texto += `${tempo.meses} mês, `;
        } else {
            texto += `${tempo.meses} meses, `;
        }
    }

    // Dia
    if (tempo.dias > 0) {
        if (tempo.dias === 1) {
            texto += `${tempo.dias} dia `;
        } else {
            texto += `${tempo.dias} dias `;
        }
    }

    // Segundo
    if (tempo.segundos > 0) {
        texto += `e ${tempo.segundos} segundos`;
    }

    return texto;
}

function atualizarTempo() {
    const textoCompleto = `${minhaBio}\n\n${dataFormaturaTexto}\n\nTempo restante para formatura: ${gerarTextoFormatura()}\n\nMinha Jornada Ninja\n${minhaNarrativa}`;
    mostrarTexto("textoBioCompleto", textoCompleto);
}

function verificarAprovacao(nota) {
    return nota >= 6 ? "Aprovado" : "Reprovado";
}

function mostrarNota(nota) {
    let resultado = verificarAprovacao(nota);
    criarAlerta(`
        <strong>📜 Relatório da Academia</strong><br>
        Nota: <span class="destaque-nota">${nota}</span> — Status: <span class="destaque-status">${resultado}</span>
    `, 'relatorio');
}

function mostrarDiaSemana() {
    const DATAATUAL = pegarDataAtual();
    let diaNumero = DATAATUAL.getDay() + 1;
    let diaTexto = obterDiaSemana(diaNumero);
    criarAlerta(`
        <strong>📅 Data Ninja</strong><br>
        Hoje é: <span class="destaque-data">${diaTexto}</span>
    `, 'data');
}

function criarAlerta(conteudo, tipo) {
    // Remove alertas antigos do mesmo tipo (opcional)
    const antigos = document.querySelectorAll(`.alerta-ninja-${tipo}`);
    antigos.forEach(el => el.remove());

    const div = document.createElement('div');
    div.className = `alerta-ninja alerta-ninja-${tipo}`;
    div.innerHTML = conteudo;
    document.body.appendChild(div);
}

function obterDiaSemana(numero) {
    switch (numero) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Dia inválido";
    }
}

function mostrarDiaSemana() {
    const DATAATUAL = pegarDataAtual();
    let diaNumero = DATAATUAL.getDay() + 1;
    let diaTexto = obterDiaSemana(diaNumero);

    document.write(`
        <div class="alerta-ninja" style="margin-top: 110px !important;">
            <strong>📅 Data Ninja</strong>
            Hoje é: <span class="destaque-data">${diaTexto}</span>
        </div>
    `);
}

function estilizarResultadoQuiz() {
    resultadoQuiz.style.backgroundColor = "#FF8C00";

    resultadoQuiz.style.padding = "12px";

    resultadoQuiz.style.borderRadius = "8px";

    resultadoQuiz.style.marginTop = "10px";

    resultadoQuiz.style.color = "#fff";
}

function mostrarClaUchiha() {
    resultadoQuiz.innerHTML = `
        <strong>🔴 Clã Uchiha!</strong><br>
        Você tem um perfil Front-End: criativo, preciso e focado em interfaces incríveis. Como os Uchiha, você busca aperfeiçoar seus poderes visuais.
    `;

    estilizarResultadoQuiz();
}

function mostrarClanSenju() {
    resultadoQuiz.innerHTML = `
        <strong>🌳 Clã Senju!</strong><br>
        Você tem um perfil Back-End: estratégico, lógico e focado em sistemas robustos. Como os Senju, você traz força e profundidade para os fundamentos.
    `;

    estilizarResultadoQuiz();
}

function mostrarClanHyuga() {
    resultadoQuiz.innerHTML = `
        <strong>👁️ Clã Hyuga!</strong><br>
        Você tem um perfil analítico: preciso, detalhista e focado em debugging e testes. Como os Hyuga, você enxerga cada detalhe e elimina erros.
    `;

    estilizarResultadoQuiz();
}

function mostrarClanUzumaki() {
    resultadoQuiz.innerHTML = `
        <strong>⚡ Clã Uzumaki!</strong><br>
        Você tem um perfil inovador: criativo, persistente e focado em soluções disruptivas. Como os Uzumaki, você traz energia e determinação a cada desafio.
    `;

    estilizarResultadoQuiz();
}

function exibirCla() {
    let scores = {
        uchiha: pontosFront,
        senju: pontosBack,
        hyuga: pontosHyuga,
        uzumaki: pontosUzumaki
    };

    let clanMax = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    if (clanMax === "uchiha") {
        resultadoQuiz.innerHTML = "<strong>🔴 Seu Clã: Uchiha (Front-End - Criatividade Visual)</strong>";
    } else if (clanMax === "senju") {
        resultadoQuiz.innerHTML = "<strong>🌳 Seu Clã: Senju (Back-End - Força e Lógica)</strong>";
    } else if (clanMax === "hyuga") {
        resultadoQuiz.innerHTML = "<strong>👁️ Seu Clã: Hyuga (QA/Testes - Precisão Absoluta)</strong>";
    } else if (clanMax === "uzumaki") {
        resultadoQuiz.innerHTML = "<strong>⚡ Seu Clã: Uzumaki (DevOps/Inovação - Energia Disruptiva)</strong>";
    }
}

// Eventos do quiz
btnVisual.addEventListener("click", function () {
    pontosFront++;

    mostrarClaUchiha();

    exibirCla();
});

btnLogica.addEventListener("click", function () {
    pontosBack++;

    mostrarClanSenju();

    exibirCla();
});

btnHyuga.addEventListener("click", function () {
    pontosHyuga++;

    mostrarClanHyuga();

    exibirCla();
});

btnUzumaki.addEventListener("click", function () {
    pontosUzumaki++;

    mostrarClanUzumaki();

    exibirCla();
});

if (caixa) {
    caixa.innerText = "Esse texto foi mudado pelo JS";
}

if (botaoMudaTexto) {
    botaoMudaTexto.addEventListener("click", function () {
        caixa.innerText = "Você mudou o texto clicando no botão!";
        caixa.style.backgroundColor = "#f0a";
    });
}

if (botaoEnviar) {
    botaoEnviar.addEventListener("click", function () {
        let texto = inputNome.value.trim();

        if (texto === "") {
            caixa.innerText = "Digite seu nome antes de enviar!";
            caixa.style.backgroundColor = "#ff4";
            return;
        }

        console.log(texto);
        caixa.innerText = `Olá, ${texto}! Bem-vindo ao meu portfólio!`;
        caixa.style.backgroundColor = "#0af";
        inputNome.value = "";
    });
}

const paragrafos = document.querySelectorAll(".paragrafo");
let contadorParagrafo3 = 0;

paragrafos.forEach((paragrafo, index) => {
    paragrafo.addEventListener("click", function () {
        paragrafos.forEach((item) => item.classList.remove("ativo"));
        paragrafo.classList.add("ativo");

        if (index === 0) {
            paragrafo.innerText = "Chakra em alerta!";
            paragrafo.style.backgroundColor = "rgba(255, 102, 0, 0.35)";
        } else if (index === 1) {
            paragrafo.innerText = "Ativado: missão aceita!";
            paragrafo.style.color = "#fff";
            paragrafo.style.backgroundColor = "rgba(60, 138, 198, 0.35)";
        } else if (index === 2) {
            contadorParagrafo3 += 1;
            paragrafo.innerText = ` Clicado ${contadorParagrafo3} vezes.`;
            paragrafo.style.backgroundColor = "rgba(102, 0, 255, 0.25)";
        }
    });
});

function criarSkill(skill) {
    // Suporte a objetos estruturados (novo) ou strings simples (retrocompat)
    let emoji = "📜";
    let label = skill;
    let chakraClass = "";

    if (typeof skill === "object" && skill !== null) {
        emoji = skill.emoji || "📜";
        label = skill.label || "";
        chakraClass = skill.chakra || "";
    }

    let elemento = document.createElement("div");
    elemento.className = `jutsu-badge ${chakraClass}`;
    elemento.innerHTML = `<span class="jutsu-emoji">${emoji}</span><span class="jutsu-label">${label}</span>`;
    return elemento;
}

function mostrarSkills(lista) {
    let container = document.getElementById("minhasSkills");

    for (let i = 0; i < lista.length; i++) {
        let skillElemento = criarSkill(lista[i]);

        container.appendChild(skillElemento);
    }
}

function criarCardProjeto(projeto) {
    let card = document.createElement("div");
    card.className = "missao-card";

    let statusClass = projeto.status.toLowerCase().replace(/\s+/g, "-");

    card.innerHTML = `
        <div class="missao-header">
            <h3>${projeto.nome}</h3>
            <div class="missao-badges">
                <span class="badge badge-rank">Rank: ${projeto.rank}</span>
                <span class="badge badge-status ${statusClass}">${projeto.status}</span>
            </div>
        </div>

        <div class="missao-detalhes">
            <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
            <p><strong>Conhecimentos:</strong> ${projeto.conhecimentosAplicados.join(", ")}</p>
            <p>${projeto.descricao}</p>
        </div>
    `;

    return card;
}

function mostrarProjetos(listaProjetos) {
    let container = document.getElementById("containerProjetos");
    container.innerHTML = "";

    for (let i = 0; i < listaProjetos.length; i++) {
        let card = criarCardProjeto(listaProjetos[i]);

        container.appendChild(card);
    }
}

function filtrarProjetos() {
    const statusSelecionado = document.getElementById("filtroStatus").value;
    const rankSelecionado = document.getElementById("filtroRank").value;

    return projetos.filter((projeto) => {
        const statusCombina =
            statusSelecionado === "Todos" || projeto.status === statusSelecionado;
        const rankCombina =
            rankSelecionado === "Todos" || projeto.rank === rankSelecionado;

        return statusCombina && rankCombina;
    });
}

function atualizarProjetosFiltrados() {
    mostrarProjetos(filtrarProjetos());
}

function popularFiltros() {
    const statusSelect = document.getElementById("filtroStatus");
    const rankSelect = document.getElementById("filtroRank");

    const statusUnicos = ["Todos", ...new Set(projetos.map((projeto) => projeto.status))];
    const rankUnicos = ["Todos", ...new Set(projetos.map((projeto) => projeto.rank))];

    statusUnicos.forEach((status) => {
        const option = document.createElement("option");
        option.value = status;
        option.textContent = status;
        statusSelect.appendChild(option);
    });

    rankUnicos.forEach((rank) => {
        const option = document.createElement("option");
        option.value = rank;
        option.textContent = rank;
        rankSelect.appendChild(option);
    });

    statusSelect.addEventListener("change", atualizarProjetosFiltrados);
    rankSelect.addEventListener("change", atualizarProjetosFiltrados);
}

carregarInformacoes();

mostrarTipos();

mostrarNota(8);

mostrarDiaSemana();

mostrarSkills(minhasSkills);

popularFiltros();

atualizarProjetosFiltrados();

// ───────────────── PONTUAÇÃO NINJA ─────────────────

function calcularPontuacaoNinja() {
    let pontosTotal = 0;

    // Contar pontos por missão completada
    projetos.forEach(projeto => {
        if (projeto.status === "Concluída") {
            if (projeto.rank === "Genin") {
                pontosTotal += 1;
            } else if (projeto.rank === "Chuunin") {
                pontosTotal += 2;
            } else if (projeto.rank === "Jounin") {
                pontosTotal += 3;
            }
        }
    });

    return pontosTotal;
}

function obterNivelNinja(pontos) {
    if (pontos < 4) {
        return "Genin";
    } else if (pontos < 10) {
        return "Chuunin";
    } else {
        return "Jounin";
    }
}

function contarMissoesCompletas() {
    return projetos.filter(projeto => projeto.status === "Concluída").length;
}

function atualizarPontuacaoNinja() {
    const pontos = calcularPontuacaoNinja();
    const nivel = obterNivelNinja(pontos);
    const missoesCompletas = contarMissoesCompletas();
    const maxPontos = 12; // 3 missões * 3 pontos máximo = 9, mas colocamos 12 para margem
    const percentual = Math.min((pontos / maxPontos) * 100, 100);

    document.getElementById("pontosTotais").textContent = pontos;
    document.getElementById("nivelNinja").textContent = nivel;
    document.getElementById("missoesCompletas").textContent = missoesCompletas;
    document.getElementById("barraProgresso").style.width = percentual + "%";

    let textoProgresso = "";
    if (pontos < 4) {
        textoProgresso = `${pontos}/4 pontos para Chuunin`;
    } else if (pontos < 10) {
        textoProgresso = `${pontos}/10 pontos para Jounin`;
    } else {
        textoProgresso = `Parabéns! Você alcançou o nível máximo! 🎉`;
    }

    document.getElementById("textoProgresso").textContent = textoProgresso;
}

atualizarPontuacaoNinja();

atualizarTempo();


setInterval(atualizarTempo, 1000);

//api Naruto
// Lista de 100 personagens famosos
const ninjasFamosos = [
    "Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake",
    "Itachi Uchiha", "Minato Namikaze", "Jiraiya", "Orochimaru",
    "Tsunade", "Gaara", "Hinata Hyuga", "Rock Lee",
    "Neji Hyuga", "Shikamaru Nara", "Madara Uchiha", "Obito Uchiha",
    "Pain", "Konan", "Killer Bee", "Hashirama Senju",
    "Tobirama Senju", "Hiruzen Sarutobi", "Sai", "Yamato",
    "Temari", "Kankurō", "Might Guy", "Asuma Sarutobi",
    "Kurenai Yūhi", "Shino Aburame", "Kiba Inuzuka", "Chōji Akimichi",
    "Ino Yamanaka", "Tenten", "Hidan", "Kakuzu",
    "Deidara", "Sasori", "Kisame Hoshigaki", "Zetsu",
    "Nagato", "Konohamaru Sarutobi", "Mitsuki", "Boruto Uzumaki",
    "Sarada Uchiha", "Himawari Uzumaki", "Kawaki", "Shikadai Nara",
    "Inojin Yamanaka", "Chōchō Akimichi", "Metal Lee", "Toneri Ōtsutsuki",
    "Momoshiki Ōtsutsuki", "Kinshiki Ōtsutsuki", "Urashiki Ōtsutsuki", "Kaguya Ōtsutsuki",
    "Hagoromo Ōtsutsuki", "Hamura Ōtsutsuki", "Indra Ōtsutsuki", "Ashura Ōtsutsuki",
    "Dan Katō", "Shisui Uchiha", "Fugaku Uchiha", "Mikoto Uchiha",
    "Izuna Uchiha", "Rin Nohara", "Yahiko", "Jūgo",
    "Suigetsu Hōzuki", "Karin", "Kushina Uzumaki", "Mito Uzumaki",
    "Haku", "Zabuza Momochi", "Kimimaro", "Kabuto Yakushi",
    "Third Raikage", "Fourth Raikage (A)", "Darui", "Kurotsuchi",
    "Onoki", "Mū", "Pakura", "Rasa",
    "Chiyo", "Anko Mitarashi", "Ibiki Morino", "Iruka Umino",
    "Mizuki", "Kotetsu Hagane", "Izumo Kamizuke", "Aoba Yamashiro",
    "Shizune", "Tonbo Tobitake", "Might Duy", "Akamaru"
];

async function carregarNinja() {
    const statusElement = document.getElementById("statusNinja");
    if (statusElement) statusElement.innerText = "🔄 Buscando ninja lendário...";

    try {
        const resposta = await fetch('https://dattebayo-api.onrender.com/characters?limit=150');
        const dados = await resposta.json();

        const personagensEncontrados = dados.characters.filter(character =>
            ninjasFamosos.includes(character.name)
        );

        if (personagensEncontrados.length === 0) {
            const randomIndex = Math.floor(Math.random() * dados.characters.length);
            exibirPersonagem(dados.characters[randomIndex]);
            if (statusElement) statusElement.innerText = "⚠️ Nenhum famoso encontrado, exibindo ninja aleatório.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * personagensEncontrados.length);
        const personagem = personagensEncontrados[randomIndex];
        exibirPersonagem(personagem);
        if (statusElement) statusElement.innerText = "✅ Ninja lendário invocado!";
    } catch (erro) {
        console.error("Erro na invocação:", erro);
        if (statusElement) statusElement.innerText = "❌ Falha na invocação. Tente novamente!";
        document.getElementById("ninja").innerHTML = "<p style='color: red; text-align: center;'>Falha ao carregar o perfil do ninja.</p>";
    }
}

function exibirPersonagem(dados) {
    let imagem = dados.images && dados.images.length > 0 ? dados.images[0] : "https://via.placeholder.com/300";
    let clan = dados.personal?.clan ? dados.personal.clan : "Desconhecido";
    let vila = dados.personal?.affiliation ? dados.personal.affiliation : "Desconhecida";
    let rank = dados.rank?.ninjaRank ? (typeof dados.rank.ninjaRank === 'object' ? Object.values(dados.rank.ninjaRank)[0] : dados.rank.ninjaRank) : "Desconhecido";
    let jutsus = dados.jutsu && dados.jutsu.length > 0 ? dados.jutsu.slice(0, 3).join(", ") : "Não informado";

    document.getElementById("ninja").innerHTML = `
        <div class="cardNaruto">
            <img src="${imagem}" alt="${dados.name}">
            <div class="infoNaruto">
                <h2>${dados.name}</h2>
                <p><strong>Clã:</strong> ${clan}</p>
                <p><strong>Vila:</strong> ${vila}</p>
                <p><strong>Rank:</strong> ${rank}</p>
                <p><strong>Jutsus:</strong> ${jutsus}</p>
            </div>
        </div>
    `;
}

const btnNinja = document.getElementById("btnNinja");
btnNinja.addEventListener("click", carregarNinja);

/*---------------------- SHARINGAN -----------------*/
const sharingans = document.querySelectorAll(".sharingan");

sharingans.forEach((sharinganOlho) => {
    const pupila = sharinganOlho.querySelector(".pupila");

    if (pupila && sharinganOlho) {
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const maxDistance = 10;

        document.addEventListener("mousemove", function (event) {
            const rect = sharinganOlho.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = event.clientX - centerX;
            const deltaY = event.clientY - centerY;
            const distance = Math.hypot(deltaX, deltaY);
            const clampedDistance = Math.min(distance, maxDistance);

            targetX = distance === 0 ? 0 : (deltaX / distance) * clampedDistance;
            targetY = distance === 0 ? 0 : (deltaY / distance) * clampedDistance;
        });

        function animatePupila() {
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;

            pupila.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`;
            requestAnimationFrame(animatePupila);
        }

        animatePupila();
    }
});

// ───────────────── MÚSICA DE FUNDO ─────────────────
const btnMusic = document.getElementById("btnMusic");
const bgMusic = document.getElementById("bgMusic");

if (btnMusic && bgMusic) {
    // Configura o volume inicial da música (opcional, 0.5 = 50%)
    bgMusic.volume = 0.4;

    btnMusic.addEventListener("click", () => {
        const musicText = btnMusic.querySelector(".music-text");

        if (bgMusic.paused) {
            bgMusic.play();
            btnMusic.classList.add("playing");
            musicText.textContent = "Pause";
        } else {
            bgMusic.pause();
            btnMusic.classList.remove("playing");
            musicText.textContent = "Play";
        }
    });
}