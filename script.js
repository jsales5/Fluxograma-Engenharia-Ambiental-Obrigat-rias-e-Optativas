// ======================================================
// AGRUPAMENTO POR TEMAS
// ======================================================

const temas = {
    "Sustentabilidade": [
        "CDS0007", "CDS0008", "CET0039", "GEA0068",
        "ENC0281"
    ],
    "Biologia e Bioquímica": [
        "CEL0019", "CEL0054", "ENC0018"
    ],
    "Computação e Modelagem": [
        "CIC0007", "ENC0011", "ENC0022", "ENC0039",
        "ENC0162"
    ],
    "Ecologia / Recursos Naturais": [
        "ECL0030", "ECL0036", "ENC0012", "ENC0033",
        "ENC0253"
    ],
    "Hidráulica / Recursos Hídricos": [
        "ENC0017", "ENC0021", "ENC0032", "ENC0064",
        "ENC0165", "ENC0169", "ENC0172", "ENC0180",
        "ENC0182", "ENC0187", "ENC0245", "ENC0282"
    ],
    "Saneamento e Poluição": [
        "ENC0003", "ENC0014", "ENC0019", "ENC0020",
        "ENC0051"
    ],
    "Geotecnia e Solos": [
        "ENC0188", "ENC0237", "ENC0238", "ENC0279",
        "ENC0050"
    ],
    "Urbanismo / Território": [
        "ENC0034", "ENC0208", "TAU0013"
    ],
    "Energia": [
        "FAV0215", "ENM0174", "ENE0273"
    ],
    "Matemática / Química": [
        "MAT0028", "MAT0048", "IQD0051", "IQD0063",
        "IQD0118", "IQD0282"
    ],
    "Extensão e Atividades Complementares": [
        "DEG0200", "DEG0201", "DEG0202", "DEG0203",
        "DEG0205", "DEG0206",
        "DEX0196", "DEX0197", "DEX0198", "DEX0199",
        "DEX0200", "DEX0201"
    ],
    "Comunicação e Libras": [
        "LIP0096", "LIP0174"
    ]
};

// ======================================================
// PRÉ-REQUISITOS
// ======================================================

const prerequisitos = {
    "CDS0007": [],
    "CDS0008": ["CDS0007"],

    "CEL0019": ["IQD0051"],
    "CEL0054": ["IQD0072","IQD0095","IQD0209","IQD0252","IQD0245","IQD0131","IQD0051","CEL0067","IQD0153","IQD0058","IQD0061","IQD0125"],

    "CIC0007": [],

    "CET0039": [],
    "DEG0200": [], "DEG0201": [], "DEG0202": [], "DEG0203": [],
    "DEG0205": [], "DEG0206": [],

    "DEX0196": [], "DEX0197": [], "DEX0198": [], "DEX0199": [],
    "DEX0200": [], "DEX0201": [],

    "ECL0030": [],
    "ECL0036": [],

    "EFL0010": [],

    "ENC0003": ["ENC0269","SOL0042"],
    "ENC0011": ["ENC0166","ENC0275"],
    "ENC0012": ["ENC0269"],
    "ENC0014": ["ENC0266","ENM0080","ENM0140","ENC0037"],
    "ENC0017": ["ENC0235"],
    "ENC0018": ["ENC0269","IQD0125"],
    "ENC0019": ["ENC0251","ENC0001","ENC0168"],
    "ENC0020": ["ENC0251","ENC0001","ENC0168"],
    "ENC0021": ["ENC0016"],
    "ENC0022": ["ENC0166","ENC0016","ENC0015"],
    "ENC0023": ["ENC0026","ENC0267"],
    "ENC0032": ["ENC0016"],
    "ENC0033": ["ENC0183"],
    "ENC0034": [],
    "ENC0044": [],
    "ENC0046": [],
    "ENC0050": ["ENC0235"],
    "ENC0051": ["ENC0169","ENC0251","ENC0252"],
    "ENC0064": ["ENC0251","ENC0252"],
    "ENC0162": ["ENC0166","ENC0167","ENC0251","ENC0252"],
    "ENC0165": ["ENC0166","ENC0167","ENC0251","ENC0252"],
    "ENC0169": ["ENC0166","ENC0167","ENC0251","ENC0252"],
    "ENC0172": ["ENC0166","ENC0167","ENC0251","ENC0252"],
    "ENC0180": [],
    "ENC0182": ["ENC0167","ENC0251","ENC0252"],
    "ENC0187": ["ENC0166","ENC0167","ENC0251","ENC0252"],
    "ENC0188": ["ENC0195","ENC0249","ENC0250","ENC0241","ENC0240"],
    "ENC0208": [],
    "ENC0237": ["ENC0235"],
    "ENC0238": ["ENC0240","ENC0241"],
    "ENC0239": ["ENC0197","ENC0235","ENC0121"],
    "ENC0245": ["ENC0166","ENC0167","ENC0251","ENC0252"],
    "ENC0253": ["ECL0014","ECL0033","ECL0030"],
    "ENC0256": [],
    "ENC0261": ["ENC0246","ENM0143","ENE0155","EFL0010","ENE0274","ENM0133","ENC0263"],
    "ENC0264": ["ENC0227","ENC0267"],
    "ENC0271": ["TEC0026","ENC0268"],
    "ENC0279": ["ENM0080","ENC0235","ENC0037"],
    "ENC0281": ["ENC0268","ENC0052"],
    "ENC0282": ["ENC0166"],

    "ENE0002": ["MAT0027","MAT0031"],
    "ENE0273": [],
    "ENM0174": ["ENE0243","ENE0172","IFD0179","ENE0001"],

    "FAV0215": ["IFD0067","IFD0192","CEL0019","CEL0054"],

    "FCE0187": [],
    "FGA0107": ["IFD0171","IFD0173"],

    "FTD0007": [],

    "GEA0075": [],

    "IQD0051": [],
    "IQD0063": ["IQD0058","IQD0061","IQD0051","IQD0262","IQD0263","IQD0259"],
    "IQD0118": ["IQD0058","IQD0061","IQD0125"],
    "IQD0282": ["IQD0257"],

    "LIP0096": [],
    "LIP0174": [],

    "MAT0028": ["MAT0027"],
    "MAT0048": ["MAT0026"],

    "TAU0013": []
};

// ======================================================
// CONSTRUÇÃO DA INTERFACE
// ======================================================

function temTodosRequisitos(code) {
    if (!prerequisitos[code] || prerequisitos[code].length === 0) return true;
    return false; // por enquanto: ninguém está "cumprido"
}

function criarCard(codigo) {
    const card = document.createElement("div");
    const bloqueado = !temTodosRequisitos(codigo);

    card.classList.add("course-card");
    if (bloqueado) card.classList.add("locked");

    const title = document.createElement("div");
    title.classList.add("course-code");
    title.innerText = codigo;

    card.appendChild(title);

    if (prerequisitos[codigo].length > 0) {
        const p = document.createElement("div");
        p.classList.add("prereq");
        p.innerText = "Pré-requisitos: " + prerequisitos[codigo].join(", ");
        card.appendChild(p);
    }

    return card;
}

function montarTela() {
    const container = document.getElementById("container");

    Object.keys(temas).forEach(theme => {
        const bloco = document.createElement("div");
        bloco.classList.add("theme-block");

        const titulo = document.createElement("div");
        titulo.classList.add("theme-title");
        titulo.innerText = theme;

        bloco.appendChild(titulo);

        temas[theme].forEach(cod => {
            bloco.appendChild(criarCard(cod));
        });

        container.appendChild(bloco);
    });
}

montarTela();
