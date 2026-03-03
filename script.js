// Objeto de Dependências (Matriz Curricular UnB - Ambiental)
const dependencias = {
    // 2º Nível
    'IFD0175': ['IFD0171', 'IFD0173', 'MAT0025'], // Física 2
    'IFD0177': ['IFD0171', 'IFD0173', 'MAT0025'], // Física 2 Exp
    'MAT0026': ['MAT0025'], // Cálculo 2
    'ECL0033': ['CEL0088'], // Ecologia 1

    // 3º Nível
    'ENC0035': ['IFD0171', 'MAT0026', 'MAT0031'], // Mec. Sólidos
    'ENC0241': ['IFD0171', 'MAT0025', 'IGD0173'], // Geotecnia 1
    'ENC0240': ['IGD0173'], // Lab. Geotecnia 1
    'ENC0266': ['IFD0175'], // Climatologia
    'ENC0267': ['IGD0173', 'ENC0053'], // Cartografia
    'ENC0268': ['IQD0125'], // Ciência Materiais
    'MAT0027': ['MAT0025', 'MAT0026'], // Cálculo 3

    // 4º Nível
    'ENC0037': ['MAT0027', 'ENC0035'], // Transf. Energia
    'ENC0235': ['ENC0241', 'ENC0240', 'MAT0027'], // Geotecnia 2
    'ENC0269': ['CEL0088'], // Microb. Amb
    'ENC0270': ['CEL0088'], // Microb. Exp
    'ENC0272': ['IQD0125'], // Qualidade Água
    'ENC0273': ['IQD0125'], // Qualidade Água Exp

    // 5º Nível
    'ENC0183': ['ENC0235'], // Geotecnia Amb
    'ENC0251': ['ENC0267', 'ENC0037'], // Hidráulica
    'ENC0252': ['ENC0267', 'ENC0037'], // Hidráulica Exp
    'ENC0274': ['MAT0027'], // Estatística
    'ENC0275': ['MAT0027'], // Métodos Comput.

    // 6º Nível
    'ENC0001': ['ENC0037', 'IQD0125'], // Cinética
    'ENC0002': ['SOL0042', 'MAT0025'], // Econômicos
    'ENC0166': ['ENC0037', 'ENC0267', 'ENC0274'], // Hidrologia
    'ENE0001': ['MAT0027', 'MAT0031'], // Eletricidade
    'EPR0068': ['ENC0274'], // Org. Industrial

    // 7º Nível
    'ENC0004': ['ECL0033', 'ENC0251', 'ENC0166'], // Saneamento
    'ENC0007': ['ENC0251', 'ENC0001'], // Águas Residuárias
    'ENC0010': ['ENC0251', 'ENC0001'], // Água Consumo
    'ENC0052': ['ENC0183', 'ENC0001'], // Resíduos Sólidos
    'EPR0059': ['EPR0068'], // Higiene/Segurança
    'FDD0282': ['ENC0002'], // Direito Amb.

    // 8º Nível
    'ENC0013': ['ENC0275'], // Sist. Ambientais
    'ENC0015': ['ENC0166', 'ENC0001'], // Poluição Água
    'ENC0016': ['ENC0183', 'ENC0037'], // Poluição Solo
    'ENC0025': ['EPR0059'], // Estágio

    // 9º Nível
    'ENC0026': ['FDD0282', 'EPR0059'], // Impactos/Riscos
    'ENC0028': ['ENC0025'], // Projeto 1

    // 10º Nível
    'ENC0030': ['ENC0028'], // Projeto 2
    'ENC0031': ['FDD0282', 'ENC0016', 'ENC0015'], // Planejamento/Gestão

    // --- OPTATIVAS (Dependências Adicionadas) ---
    'CDS0008': ['CDS0007'],
    'CEL0019': ['IQD0051'],
    'CEL0054': ['IQD0125'],
    'ENC0003': ['ENC0269', 'SOL0042'],
    'ENC0011': ['ENC0166', 'ENC0275'],
    'ENC0017': ['ENC0235'],
    'ENC0019': ['ENC0251', 'ENC0001'],
    'ENC0020': ['ENC0251', 'ENC0001'],
    'ENC0271': ['ENC0268'],
    'ENE0002': ['MAT0027', 'MAT0031'],
    'MAT0048': ['MAT0026']
};

function verificarGrade() {
    let mudancaDetectada = false;
    const saveState = {};
    const todosInputs = document.querySelectorAll('input[type="checkbox"]');

    todosInputs.forEach(input => {
        const idMateria = input.parentElement.id;
        const listaReqs = dependencias[idMateria];

        // Se a matéria não tiver requisitos cadastrados, ela fica sempre habilitada
        if (!listaReqs) {
            input.disabled = false;
            saveState[idMateria] = input.checked;
            return; 
        }

        // Lógica: habilitar se TODOS os requisitos estiverem marcados
        const habilitada = listaReqs.every(reqId => {
            const reqInput = document.querySelector(`#${reqId} input`);
            return reqInput && reqInput.checked;
        });

        if (habilitada) {
            input.disabled = false;
        } else {
            // Se estava marcada mas foi bloqueada por dependência desmarcada
            if (!input.disabled || input.checked) {
                input.disabled = true;
                input.checked = false;
                input.parentElement.classList.remove('concluida');
                mudancaDetectada = true; // Força re-verificação (cascata)
            }
        }
        saveState[idMateria] = input.checked;
    });

    // Salvar no navegador
    localStorage.setItem('unb_ambiental_data', JSON.stringify(saveState));
    
    // Se houve mudança (cascata), roda de novo para propagar
    if (mudancaDetectada) verificarGrade();
}

function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('unb_ambiental_data') || '{}');
    
    // Primeiro aplica todos os checks salvos
    Object.keys(dados).forEach(id => {
        const div = document.getElementById(id);
        if (div) {
            const input = div.querySelector('input');
            input.checked = dados[id];
            if (dados[id]) div.classList.add('concluida');
        }
    });

    // Depois roda a verificação para bloquear o que for inconsistente
    verificarGrade();
}

// listener para os checks
document.querySelectorAll('input').forEach(chk => {
    chk.addEventListener('change', function() {
        this.parentElement.classList.toggle('concluida', this.checked);
        verificarGrade();
    });
});

window.onload = carregarDados;
