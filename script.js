document.addEventListener("DOMContentLoaded", () => {

    const matriz = {

        // -----------------------------------------
        // OBRIGATÓRIAS POR SEMESTRE / NÍVEL
        // -----------------------------------------

        "1º Nível": [
            { codigo: "CEL0088", nome: "BIOLOGIA GERAL", prereq: [] },
            { codigo: "ENC0263", nome: "INTRODUÇÃO À ENGENHARIA AMBIENTAL", prereq: [] },
            { codigo: "IFD0171", nome: "FISICA 1", prereq: [] },
            { codigo: "IFD0173", nome: "FISICA 1 EXPERIMENTAL", prereq: [] },
            { codigo: "IGD0173", nome: "GEOLOGIA BÁSICA", prereq: [] },
            { codigo: "IQD0125", nome: "QUIMICA GERAL TEORICA", prereq: [] },
            { codigo: "MAT0025", nome: "CÁLCULO 1", prereq: [] }
        ],

        "2º Nível": [
            { codigo: "ECL0033", nome: "ECOLOGIA 1", prereq: ["CEL0088"] },
            { codigo: "ENC0053", nome: "DESENHO TECNICO", prereq: [] },
            { codigo: "IFD0175", nome: "FISICA 2", prereq: ["IFD0171","IFD0173","MAT0025"] },
            { codigo: "IFD0177", nome: "FISICA 2 EXPERIMENTAL", prereq: ["IFD0171","IFD0173","MAT0025"] },
            { codigo: "MAT0026", nome: "CÁLCULO 2", prereq: ["MAT0025"] },
            { codigo: "MAT0031", nome: "INTRODUCAO A ALGEBRA LINEAR", prereq: [] }
        ],

        "3º Nível": [
            { codigo: "ENC0035", nome: "INTRODUÇÃO À MECÂNICA DOS SÓLIDOS", prereq: ["IFD0171"] },
            { codigo: "ENC0240", nome: "LABORATÓRIO DE GEOTECNIA 1", prereq: ["IGD0173"] },
            { codigo: "ENC0241", nome: "GEOTECNIA 1", prereq: ["IGD0173"] },
            { codigo: "ENC0266", nome: "CLIMATOLOGIA APLICADA", prereq: [] },
            { codigo: "ENC0267", nome: "CARTOGRAFIA E GEOPROCESSAMENTO APLICADO", prereq: [] },
            { codigo: "ENC0268", nome: "CIÊNCIA DOS MATERIAIS", prereq: [] },
            { codigo: "MAT0027", nome: "CÁLCULO 3", prereq: ["MAT0026"] }
        ],

        "4º Nível": [
            { codigo: "ENC0037", nome: "TRANSFERÊNCIA DE ENERGIA E MASSA", prereq: ["MAT0027"] },
            { codigo: "ENC0235", nome: "GEOTECNIA 2", prereq: ["ENC0241"] },
            { codigo: "ENC0269", nome: "MICROBIOLOGIA AMBIENTAL", prereq: [] },
            { codigo: "ENC0270", nome: "MICROBIOLOGIA AMBIENTAL E EXPERIMENTAL", prereq: ["ENC0269"] },
            { codigo: "ENC0272", nome: "ASPECTOS QUÍMICOS DE QUALIDADE DA ÁGUA", prereq: [] },
            { codigo: "ENC0273", nome: "ASPECTOS QUÍMICOS DE QUALIDADE DE ÁGUA - EXPERIMENTAL", prereq: ["ENC0272"] }
        ],

        "5º Nível": [
            { codigo: "ENC0183", nome: "GEOTECNIA AMBIENTAL", prereq: ["ENC0241"] },
            { codigo: "ENC0251", nome: "HIDRAULICA - TEORIA", prereq: [] },
            { codigo: "ENC0252", nome: "HIDRAULICA EXPERIMENTAL", prereq: ["ENC0251"] },
            { codigo: "ENC0274", nome: "ESTATÍSTICA APLICADA À ENGENHARIA AMBIENTAL", prereq: [] },
            { codigo: "ENC0275", nome: "MÉTODOS COMPUTACIONAIS EM ENGENHARIA AMBIENTAL", prereq: [] },
            { codigo: "SOL0042", nome: "INTRODUÇÃO À SOCIOLOGIA", prereq: [] }
        ],

        "6º Nível": [
            { codigo: "ENC0001", nome: "CINÉTICA, PROCESSOS E OPERAÇÕES UNITÁRIAS", prereq: [] },
            { codigo: "ENC0002", nome: "ASPECTOS ECONÔMICOS DA ENGENHARIA AMBIENTAL", prereq: [] },
            { codigo: "ENC0166", nome: "HIDROLOGIA APLICADA", prereq: [] },
            { codigo: "ENE0001", nome: "ELETRICIDADE BÁSICA", prereq: [] },
            { codigo: "EPR0068", nome: "ORGANIZAÇÃO INDUSTRIAL", prereq: [] }
        ],

        "7º Nível": [
            { codigo: "ENC0004", nome: "SANEAMENTO, MEIO AMBIENTE E PLANEJAMENTO URBANO", prereq: [] },
            { codigo: "ENC0007", nome: "TRATAMENTO DE ÁGUAS RESIDUÁRIAS URBANAS", prereq: [] },
            { codigo: "ENC0010", nome: "TRATAMENTO DE ÁGUA PARA CONSUMO HUMANO", prereq: [] },
            { codigo: "ENC0052", nome: "RESÍDUOS SÓLIDOS URBANOS", prereq: [] },
            { codigo: "EPR0059", nome: "HIGIENE E SEGURANÇA DO TRABALHO", prereq: [] },
            { codigo: "FDD0282", nome: "FUNDAMENTOS DO DIREITO AMBIENTAL", prereq: [] }
        ],

        "8º Nível": [
            { codigo: "ENC0013", nome: "INTRODUÇÃO À ANÁLISE DE SISTEMAS AMBIENTAIS", prereq: [] },
            { codigo: "ENC0015", nome: "AVALIAÇÃO E CONTROLE DE POLUIÇÃO DA ÁGUA", prereq: [] },
            { codigo: "ENC0016", nome: "AVALIAÇÃO E CONTROLE DE POLUIÇÃO DO SOLO", prereq: [] },
            { codigo: "ENC0025", nome: "ESTÁGIO CURRICULAR EM ENGENHARIA AMBIENTAL", prereq: [] }
        ],

        "9º Nível": [
            { codigo: "ENC0026", nome: "AVALIAÇÃO DE IMPACTOS E RISCOS AMBIENTAIS", prereq: [] },
            { codigo: "ENC0028", nome: "PROJETO FINAL EM ENGENHARIA AMBIENTAL 1", prereq: [] }
        ],

        "10º Nível": [
            { codigo: "ENC0030", nome: "PROJETO FINAL EM ENGENHARIA AMBIENTAL 2", prereq: [] },
            { codigo: "ENC0031", nome: "PLANEJAMENTO E GESTÃO AMBIENTAL", prereq: [] }
        ],

        // -----------------------------------------
        // TODAS AS OPTATIVAS EM UM BLOCO ÚNICO
        // -----------------------------------------

        "OPTATIVAS": [

            { codigo: "CDS0007", nome: "INTRODUÇÃO AO DESENVOLVIMENTO SUSTENTÁVEL", prereq: [] },
            { codigo: "CDS0008", nome: "MEIO AMBIENTE, CULTURA E SOCIEDADE", prereq: [] },

            { codigo: "CEL0019", nome: "BIOQUIMICA E BIOFISICA", prereq: [] },
            { codigo: "CEL0054", nome: "BIOQUIMICA FUNDAMENTAL", prereq: [] },

            { codigo: "CET0039", nome: "SUSTENTABILIDADE ÉTICA E TURISMO", prereq: [] },

            { codigo: "CIC0007", nome: "INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO", prereq: [] },

            { codigo: "DEG0200", nome: "ATIVIDADE COMPLEMENTAR (15h)", prereq: [] },
            { codigo: "DEG0201", nome: "ATIVIDADE COMPLEMENTAR (30h)", prereq: [] },
            { codigo: "DEG0202", nome: "ATIVIDADE COMPLEMENTAR (45h)", prereq: [] },
            { codigo: "DEG0203", nome: "ATIVIDADE COMPLEMENTAR (60h)", prereq: [] },
            { codigo: "DEG0205", nome: "ATIVIDADE COMPLEMENTAR (90h)", prereq: [] },
            { codigo: "DEG0206", nome: "ATIVIDADE COMPLEMENTAR (120h)", prereq: [] },

            { codigo: "DEX0196", nome: "ATIVIDADE DE EXTENSÃO (15h)", prereq: [] },
            { codigo: "DEX0197", nome: "ATIVIDADE DE EXTENSÃO (30h)", prereq: [] },
            { codigo: "DEX0198", nome: "ATIVIDADE DE EXTENSÃO (45h)", prereq: [] },
            { codigo: "DEX0199", nome: "ATIVIDADE DE EXTENSÃO (60h)", prereq: [] },
            { codigo: "DEX0200", nome: "ATIVIDADE DE EXTENSÃO (90h)", prereq: [] },
            { codigo: "DEX0201", nome: "ATIVIDADE DE EXTENSÃO (120h)", prereq: [] },

            { codigo: "DSC0050", nome: "POLÍTICAS PÚBLICAS EM SAÚDE", prereq: [] },
            { codigo: "DSC0063", nome: "DIREITO SANITÁRIO E LEGISLAÇÃO", prereq: [] },

            { codigo: "ECL0030", nome: "FUNDAMENTOS DE ECOLOGIA E EVOLUÇÃO", prereq: [] },
            { codigo: "ECL0036", nome: "EDUCAÇÃO AMBIENTAL", prereq: [] },

            { codigo: "EFL0010", nome: "INICIACAO A ENGENHARIA FLORESTAL", prereq: [] },

            { codigo: "ENC0003", nome: "SAÚDE, SANEAMENTO E MEIO AMBIENTE", prereq: [] },
            { codigo: "ENC0011", nome: "MODELOS E SIMULAÇÃO DE SISTEMAS AMBIENTAIS", prereq: [] },
            { codigo: "ENC0012", nome: "ECOSSISTEMAS AQUÁTICOS CONTINENTAIS", prereq: [] },
            { codigo: "ENC0014", nome: "AVALIAÇÃO E CONTROLE DE POLUIÇÃO DO AR E SONORA", prereq: [] },
            { codigo: "ENC0017", nome: "SOLOS TROPICAIS", prereq: [] },
            { codigo: "ENC0018", nome: "BIOQUÍMICA APLICADA À ENGENHARIA AMBIENTAL", prereq: [] },
            { codigo: "ENC0019", nome: "TRATAMENTO AVANÇADO DE ÁGUAS PARA CONSUMO HUMANO", prereq: [] },
            { codigo: "ENC0020", nome: "TRATAMENTO AVANÇADO DE ÁGUAS RESIDUÁRIAS", prereq: [] },
            { codigo: "ENC0021", nome: "TÓPICOS EM TRANSPORTE DE CONTAMINANTES", prereq: [] },
            { codigo: "ENC0022", nome: "MODELOS DE POLUIÇÃO DIFUSA", prereq: [] },
            { codigo: "ENC0023", nome: "AVALIAÇÃO AMBIENTAL ESTRATÉGICA", prereq: [] },
            { codigo: "ENC0032", nome: "GESTÃO DE RECURSOS HÍDRICOS", prereq: [] },
            { codigo: "ENC0033", nome: "RECUPERAÇÃO DE ÁREAS DEGRADADAS POR MINERAÇÃO", prereq: [] },
            { codigo: "ENC0034", nome: "ENGENHARIA TERRITORIAL", prereq: [] },
            { codigo: "ENC0044", nome: "SIG APLICADO AOS TRANSPORTES", prereq: [] },
            { codigo: "ENC0046", nome: "TÓPICOS EM ENGENHARIA AMBIENTAL", prereq: [] },
            { codigo: "ENC0050", nome: "GEOSSINTÉTICOS", prereq: [] },
            { codigo: "ENC0051", nome: "SISTEMAS DE ESGOTO SANITÁRIO", prereq: [] },
            { codigo: "ENC0064", nome: "TÓPICOS DE ENGENHARIA HIDRAULICA", prereq: [] },
            { codigo: "ENC0162", nome: "HIDRAULICA - TÓPICOS ESPECIAIS", prereq: [] },
            { codigo: "ENC0165", nome: "IRRIGAÇÃO E DRENAGEM", prereq: [] },
            { codigo: "ENC0169", nome: "SISTEMAS HIDRAULICOS DE SANEAMENTO", prereq: [] },
            { codigo: "ENC0172", nome: "AGUAS SUBTERRANEAS", prereq: [] },
            { codigo: "ENC0180", nome: "SISTEMAS DE DRENAGEM URBANA", prereq: [] },
            { codigo: "ENC0182", nome: "SISTEMAS HIDROVIÁRIOS", prereq: [] },
            { codigo: "ENC0187", nome: "SISTEMA DE ABASTECIMENTO DE ÁGUA", prereq: [] },
            { codigo: "ENC0188", nome: "INVESTIGAÇÕES GEOTÉCNICAS", prereq: [] },

            { codigo: "ENC0208", nome: "DESENVOLVIMENTO URBANO", prereq: [] },
            { codigo: "ENC0237", nome: "TÓPICOS EM GEOTECNIA 1", prereq: [] },
            { codigo: "ENC0238", nome: "LAB GEOTECNIA 2", prereq: [] },
            { codigo: "ENC0239", nome: "MÉTODOS COMPUTACIONAIS EM GEOTECNIA", prereq: [] },
            { codigo: "ENC0245", nome: "MÉTODOS NUMERICOS EM HIDROLOGIA", prereq: [] },

            { codigo: "ENC0253", nome: "GESTÃO DA ÁGUA", prereq: [] },
            { codigo: "ENC0256", nome: "REALIDADE VIRTUAL APLICADA", prereq: [] },
            { codigo: "ENC0261", nome: "GESTÃO DE PROJETOS", prereq: [] },

            { codigo: "ENC0264", nome: "TRANSPORTE E MEIO AMBIENTE", prereq: [] },
            { codigo: "ENC0271", nome: "MATERIAIS PARA CONSTRUÇÃO 1", prereq: [] },
            { codigo: "ENC0279", nome: "ESTACAS TROCADORAS DE CALOR", prereq: [] },

            { codigo: "ENC0282", nome: "PLANEJAMENTO E GESTÃO DE SISTEMAS HÍDRICOS", prereq: [] },

            { codigo: "ENE0002", nome: "LABORATÓRIO DE ELETRICIDADE", prereq: [] },
            { codigo: "ENE0273", nome: "PLANEJAMENTO ENERGETICO", prereq: [] },

            { codigo: "ENM0174", nome: "SISTEMAS ENERGETICOS", prereq: [] },
            { codigo: "ENM0176", nome: "ECOLOGIA INDUSTRIAL", prereq: [] },

            { codigo: "FAV0215", nome: "ENERGIA RENOVAVEL", prereq: [] },

            { codigo: "FCE0187", nome: "EPIDEMIOLOGIA DESCRITIVA", prereq: [] },

            { codigo: "FGA0107", nome: "ONDULATÓRIA E TÉRMICA", prereq: [] },

            { codigo: "FTD0007", nome: "INTRODUÇÃO À ATIVIDADE EMPRESARIAL", prereq: [] },

            { codigo: "GEA0068", nome: "POLÍTICA PUBLICA E MEIO AMBIENTE", prereq: [] },
            { codigo: "GEA0075", nome: "GEOGRAFIA ECONOMICA DA ENERGIA", prereq: [] },

            { codigo: "IQD0051", nome: "QUÍMICA GERAL", prereq: [] },
            { codigo: "IQD0063", nome: "QUIMICA ANALITICA 1", prereq: [] },
            { codigo: "IQD0118", nome: "QUIMICA ANALITICA QUALITATIVA", prereq: [] },
            { codigo: "IQD0282", nome: "REAÇÕES QUÍMICAS E O AMBIENTE", prereq: [] },

            { codigo: "LIP0096", nome: "LEITURA E PRODUÇÃO DE TEXTOS", prereq: [] },
            { codigo: "LIP0174", nome: "LÍNGUA DE SINAIS BRASILEIRA - BÁSICO", prereq: [] },

            { codigo: "MAT0028", nome: "VARIAVEL COMPLEXA 1", prereq: [] },
            { codigo: "MAT0048", nome: "EQUACOES DIFERENCIAIS 1", prereq: [] },

            { codigo: "TAU0013", nome: "PLANEJAMENTO URBANO", prereq: [] }

        ]
    };

    const container = document.getElementById("container");

    function criarTitulo(titulo) {
        const div = document.createElement("div");
        div.className = titulo === "OPTATIVAS" ? "grupo-titulo" : "semestre-titulo";
        div.textContent = titulo;
        div.addEventListener("click", () => {
            const lista = div.nextSibling;
            lista.style.display = lista.style.display === "block" ? "none" : "block";
        });
        return div;
    }

    function criarCard(d) {
        const card = document.createElement("div");
        card.className = "card " + (d.optativa ? "optativa" : "");

        card.innerHTML = `
            <h3>${d.codigo} – ${d.nome}</h3>
            <small>Pré-requisitos: ${d.prereq.length ? d.prereq.join(", ") : "Nenhum"}</small>
        `;

        return card;
    }

    for (const bloco in matriz) {
        container.appendChild(criarTitulo(bloco));

        const lista = document.createElement("div");
        lista.className = "disciplinas";

        matriz[bloco].forEach(d => {
            d.optativa = bloco === "OPTATIVAS";
            lista.appendChild(criarCard(d));
        });

        container.appendChild(lista);
    }
});
