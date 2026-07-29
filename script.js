// =========================================
// DADOS DOS PROJETOS
// Edite aqui para adicionar/alterar projetos.
// A ordem deve bater com o data-index dos cards no HTML.
// =========================================

const projetos = [
    {
        titulo: "Bússola CRM",
        descricao: "CRM completo usado no dia a dia da Bússola Criativa, desenvolvido em PHP e MySQL: pipeline de vendas visual, atendimento automático com IA via WhatsApp (Evolution API), integração com Meta Ads através do Make, calendário de tarefas e relatórios de conversão em tempo real.",
        tags: ["PHP", "MySQL", "WhatsApp API", "IA"],
        demoUrl: "https://crm.bussolacriativa.com",
        codeUrl: "https://github.com/Arezende7",
        imagens: [
            // Prints locais:
            "imagens/projetos/crm/1.png",
            "imagens/projetos/crm/2.png",
            "imagens/projetos/crm/3.png",
            // Prints hospedados no site da Bússola:
            "https://bussolacriativa.com/wp-content/uploads/2026/06/Clientes.png",
            "https://bussolacriativa.com/wp-content/uploads/2026/06/tarefas.png",
            "https://bussolacriativa.com/wp-content/uploads/2026/06/relatorios.png"
        ]
    },
    {
        titulo: "Dashboard Financeiro",
        descricao: "Painel financeiro completo desenvolvido em PHP e MySQL, com gráficos em Chart.js: controle mensal e anual de receitas e despesas, relatórios por categoria, investimentos e previsão dos próximos 12 meses.",
        tags: ["PHP", "MySQL", "Chart.js"],
        demoUrl: "https://financeiro.bussolacriativa.com",
        codeUrl: "https://github.com/Arezende7",
        imagens: [
            "imagens/projetos/financeiro/1.png",
            "imagens/projetos/financeiro/2.png",
            "imagens/projetos/financeiro/3.png"
        ]
    },
    {
        titulo: "Site da Bússola Criativa",
        descricao: "Site institucional da agência, com foco em SEO, performance e conversão — integrado ao WhatsApp e ao Bússola CRM. Desenvolvido com WordPress e Elementor.",
        tags: ["WordPress", "Elementor", "SEO"],
        demoUrl: "https://bussolacriativa.com",
        codeUrl: "https://github.com/Arezende7",
        imagens: [
            "imagens/projetos/site/1.png",
            "imagens/projetos/site/2.png",
            "imagens/projetos/site/3.png",
            "imagens/projetos/site/4.png",
            "imagens/projetos/site/5.png",
            "imagens/projetos/site/6.png",
            "imagens/projetos/site/7.png",
            "imagens/projetos/site/8.png"
        ]
    },
    {
        titulo: "Nostalgia Orkut",
        descricao: "Recriação da clássica rede social dos anos 2000, com página de perfil, scraps e o visual nostálgico original. Projeto de estudo desenvolvido com HTML e CSS puro, sem frameworks.",
        tags: ["HTML", "CSS"],
        demoUrl: "orkut/index.html", // cópia do projeto dentro do portfólio
        codeUrl: "https://github.com/Arezende7",
        imagens: [
            "imagens/projetos/orkut/1.png"
        ]
    }
];


// =========================================
// CONTADOR DE PROJETOS
// =========================================

let totalProjetos = 0;

function aumentarProjetos() {
    totalProjetos++;
    document.getElementById("counter").innerText = totalProjetos;
}


// =========================================
// ALTERNAR TEMA (CLARO/ESCURO)
// =========================================

function alternarTema() {
    document.body.classList.toggle("light-mode");
}


// =========================================
// MENSAGEM DINÂMICA
// =========================================

const mensagens = [
    "A programação transforma ideias em realidade.",
    "Cada linha de código é um novo aprendizado.",
    "Criatividade e tecnologia andam juntas.",
    "Grandes projetos começam com pequenos passos.",
    "Seu próximo código pode mudar tudo."
];

let mensagemAtual = 0;

function mostrarMensagem() {
    document.getElementById("mensagem").innerText = mensagens[mensagemAtual];
    mensagemAtual = (mensagemAtual + 1) % mensagens.length;
}


// =========================================
// TEXTO AUTOMÁTICO (BADGE DO HERO)
// =========================================

function textoAutomatico() {
    const titulo = document.querySelector(".mini-title");

    const frases = [
        "Front-End Developer 🚀",
        "HTML • CSS • JavaScript ⚡",
        "UI em constante evolução 🎨",
        "Criando experiências digitais 💻"
    ];

    let index = 0;

    setInterval(() => {
        titulo.innerText = frases[index];
        index = (index + 1) % frases.length;
    }, 3000);
}


// =========================================
// TERMINAL DO HERO
// Digita a apresentação em loop.
// Para mudar o texto, edite as linhas abaixo.
// =========================================

function iniciarTerminal() {
    const alvo = document.getElementById("terminal");
    if (!alvo) return;

    const linhas = [
        { txt: "> ola, eu sou o",   cor: "#38bdf8" },
        { txt: "  anderson",        cor: "#38bdf8" },
        { txt: "",                  cor: "#ffffff" },
        { txt: "> sites, sistemas",  cor: "#e2e8f0" },
        { txt: "  e automações",    cor: "#e2e8f0" },
        { txt: "",                  cor: "#ffffff" },
        { txt: "> movido a café",   cor: "#94a3b8" },
        { txt: "",                  cor: "#ffffff" },
        { txt: "> seja bem-vindo",  cor: "#86efac" }
    ];

    let linha = 0;
    let letra = 0;
    let atual = null;

    function digitar() {
        // Terminou: limpa e recomeça
        if (linha >= linhas.length) {
            setTimeout(() => {
                alvo.innerHTML = "";
                linha = 0;
                letra = 0;
                digitar();
            }, 3500);
            return;
        }

        if (letra === 0) {
            atual = document.createElement("div");
            atual.style.color = linhas[linha].cor;
            alvo.appendChild(atual);
        }

        const texto = linhas[linha].txt;

        if (letra < texto.length) {
            atual.textContent = texto.slice(0, ++letra);
            setTimeout(digitar, 50);
        } else {
            linha++;
            letra = 0;
            setTimeout(digitar, texto === "" ? 70 : 450);
        }
    }

    digitar();
}


// =========================================
// EFEITO DE DIGITAÇÃO NO TÍTULO
// =========================================

function efeitoDigitacao() {
    const elemento = document.querySelector(".content h1");
    const texto = elemento.textContent.trim().replace(/\s+/g, " ");

    let parcial = "";
    let i = 0;

    elemento.textContent = "";

    (function digitar() {
        if (i < texto.length) {
            parcial += texto.charAt(i);
            elemento.textContent = parcial;
            i++;
            setTimeout(digitar, 50);
        }
    })();
}


// =========================================
// BOTÃO VOLTAR AO TOPO
// =========================================

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
    const botao = document.getElementById("topButton");
    const visivel = window.scrollY > 300;

    botao.style.opacity = visivel ? "1" : "0";
    botao.style.pointerEvents = visivel ? "all" : "none";
});


// =========================================
// FILTROS DO PORTFÓLIO
// =========================================

function initFiltros() {
    const btns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".portfolio-card");

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filtro = btn.dataset.filter;

            cards.forEach(card => {
                if (filtro === "all" || card.dataset.category === filtro) {
                    card.classList.remove("hidden");
                    card.style.animation = "none";
                    requestAnimationFrame(() => {
                        card.style.animation = "cardEntrada 0.35s ease forwards";
                    });
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
}

// Animação de entrada dos cards (injetada via JS)
const estiloAnimacao = document.createElement("style");
estiloAnimacao.textContent = `
    @keyframes cardEntrada {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(estiloAnimacao);


// =========================================
// CARROSSEL DE IMAGENS
// Cria um álbum de prints do projeto.
// opcoes.auto  = passa os slides sozinho (usado nos cards)
// opcoes.setas = mostra botões de navegação (usado no modal)
// =========================================

function criarCarrossel(imagens, titulo, opcoes = {}) {
    const wrap = document.createElement("div");
    wrap.className = "carousel";

    const track = document.createElement("div");
    track.className = "carousel-track";

    imagens.forEach(src => {
        const slide = document.createElement("div");
        slide.className = "carousel-slide";

        const img = document.createElement("img");
        img.src = src;
        img.alt = titulo;
        img.loading = "lazy";

        // Se a imagem não existir, remove o slide
        img.onerror = () => {
            slide.remove();
            atualizar();
        };

        slide.appendChild(img);
        track.appendChild(slide);
    });

    wrap.appendChild(track);

    const dots = document.createElement("div");
    dots.className = "carousel-dots";
    wrap.appendChild(dots);

    let atual = 0;
    let timer = null;

    function atualizar() {
        const total = track.children.length;

        // Sem nenhuma imagem válida: remove o carrossel
        // (o preview ilustrativo original volta a aparecer)
        if (total === 0) {
            clearInterval(timer);
            wrap.remove();
            return;
        }

        if (atual >= total) atual = 0;
        track.style.transform = `translateX(-${atual * 100}%)`;

        dots.innerHTML = "";
        for (let i = 0; i < total; i++) {
            const dot = document.createElement("span");
            dot.className = "carousel-dot" + (i === atual ? " active" : "");
            dot.onclick = (e) => {
                e.stopPropagation();
                atual = i;
                atualizar();
            };
            dots.appendChild(dot);
        }
        dots.style.display = total > 1 ? "" : "none";
    }

    function irPara(delta) {
        const total = track.children.length;
        if (total === 0) return;
        atual = (atual + delta + total) % total;
        atualizar();
    }

    if (opcoes.setas) {
        const prev = document.createElement("button");
        prev.className = "carousel-arrow prev";
        prev.innerHTML = "‹";
        prev.onclick = (e) => { e.stopPropagation(); irPara(-1); };

        const next = document.createElement("button");
        next.className = "carousel-arrow next";
        next.innerHTML = "›";
        next.onclick = (e) => { e.stopPropagation(); irPara(1); };

        wrap.append(prev, next);
    }

    if (opcoes.auto) {
        timer = setInterval(() => irPara(1), 3000);
    }

    atualizar();
    return wrap;
}

// Insere um carrossel automático no thumb de cada card
function initCarrosseisDosCards() {
    document.querySelectorAll(".portfolio-card").forEach(card => {
        const projeto = projetos[card.dataset.index];
        if (!projeto || !projeto.imagens || projeto.imagens.length === 0) return;

        const preview = card.querySelector(".thumb-preview");
        const carrossel = criarCarrossel(projeto.imagens, projeto.titulo, { auto: true });
        carrossel.classList.add("carousel-thumb");
        preview.appendChild(carrossel);
    });
}


// =========================================
// MODAL DE PROJETO
// =========================================

function abrirModal(index) {
    const projeto = projetos[index];
    const modal = document.getElementById("projectModal");

    document.getElementById("modalTitle").textContent = projeto.titulo;
    document.getElementById("modalDesc").textContent = projeto.descricao;
    document.getElementById("modalCode").href = projeto.codeUrl;

    // Esconde o botão de demo em projetos offline
    const modalDemo = document.getElementById("modalDemo");
    if (projeto.demoUrl) {
        modalDemo.href = projeto.demoUrl;
        modalDemo.style.display = "";
    } else {
        modalDemo.style.display = "none";
    }

    // Tags
    const tagsContainer = document.getElementById("modalTags");
    tagsContainer.innerHTML = "";
    projeto.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Preview: carrossel com os prints do projeto
    // (se não houver imagens, clona o thumb ilustrativo do card)
    const previewArea = document.getElementById("modalPreview");
    previewArea.innerHTML = "";

    if (projeto.imagens && projeto.imagens.length > 0) {
        const carrossel = criarCarrossel(projeto.imagens, projeto.titulo, { setas: true });
        carrossel.classList.add("carousel-modal");
        previewArea.appendChild(carrossel);
    } else {
        const originalCard = document.querySelector(`.portfolio-card[data-index="${index}"]`);
        const thumbClone = originalCard.querySelector(".thumb-browser").cloneNode(true);
        const overlayClone = thumbClone.querySelector(".card-overlay");
        if (overlayClone) overlayClone.remove();
        thumbClone.style.height = "100%";
        previewArea.appendChild(thumbClone);
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function fecharModal(event) {
    if (event.target === document.getElementById("projectModal")) {
        fecharModalBtn();
    }
}

function fecharModalBtn() {
    document.getElementById("projectModal").classList.remove("open");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharModalBtn();
});


// =========================================
// ANIMAÇÃO DE ENTRADA COM SCROLL
// =========================================

function initScrollReveal() {
    const cards = document.querySelectorAll(".portfolio-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(card);
    });
}


// =========================================
// INICIALIZAÇÃO
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    textoAutomatico();
    efeitoDigitacao();
    iniciarTerminal();
    initFiltros();
    initScrollReveal();
    initCarrosseisDosCards();
});
