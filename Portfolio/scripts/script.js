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
    "Python",
    "Desenvolvimento Web/Fullstack",
    "JavaScript",
    "React",
    "Node.js",
    "Banco de Dados",
    "Git",
    "Design focado no usuário",
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

    document.write(`
        <p>Nota: ${nota} - ${resultado}</p>
    `);
}

function obterDiaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";

        case 2:
            return "Segunda-feira";

        case 3:
            return "Terça-feira";

        case 4:
            return "Quarta-feira";

        case 5:
            return "Quinta-feira";

        case 6:
            return "Sexta-feira";

        case 7:
            return "Sábado";

        default:
            return "Dia inválido";
    }
}

function mostrarDiaSemana() {
    const DATAATUAL = pegarDataAtual();

    let diaNumero = DATAATUAL.getDay() + 1;

    let diaTexto = obterDiaSemana(diaNumero);

    document.write(`
        <p>Hoje é: ${diaTexto}</p>
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
    let elemento = document.createElement("div");

    elemento.textContent = skill;

    elemento.style.padding = "8px";
    elemento.style.margin = "4px";
    elemento.style.backgroundColor = "#3c8ac6";
    elemento.style.color = "#fff";
    elemento.style.borderRadius = "4px";

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
async function carregarNinja() {
    try {
        // Gera ID aleatório
        let id = Math.floor(Math.random() * 1431) + 1;

        // Busca personagem
        const resposta = await fetch(
            `https://dattebayo-api.onrender.com/characters/${id}`,
        );

        // Converte JSON
        const dados = await resposta.json();

        console.log(dados);

        // Nome do personagem
        let nome = dados.name ? dados.name : "Ninja desconhecido";

        // Imagem
        let imagem =
            dados.images && dados.images.length > 0
                ? dados.images[0]
                : "https://via.placeholder.com/300";

        // Clã
        let clan = dados.personal?.clan ? dados.personal.clan : "Desconhecido";

        // Vila
        let vila = dados.personal?.affiliation
            ? dados.personal.affiliation
            : "Desconhecida";

        let rank = dados.rank ? dados.rank : "Desconhecido";
        let jutsus = dados.jutsus && dados.jutsus.length > 0
            ? dados.jutsus.join(", ")
            : "Não informado";

        // Exibe card
        document.getElementById("ninja").innerHTML = `

<div class="cardNaruto">

    <img
        src="${imagem}"
        alt="${dados.name}"
    >

    <div class="infoNaruto">

        <h2>${dados.name}</h2>

        <p>
            <strong>Clã:</strong>
            ${clan}
        </p>

        <p>
            <strong>Vila:</strong>
            ${vila}
        </p>

        <p>
            <strong>Rank:</strong>
            ${rank}
        </p>

        <p>
            <strong>Jutsus:</strong>
            ${jutsus}
        </p>

    </div>

</div>
`;

    } catch (erro) {
        console.log("Erro ao carregar ninja:", erro);
    }
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