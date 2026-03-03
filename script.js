// Objeto de Dependências (Matriz Curricular UnB - Ambiental + Optativas)
const dependencias = {
    // --- 2º Nível ---
    'IFD0175': ['IFD0171', 'IFD0173', 'MAT0025'],
    'IFD0177': ['IFD0171', 'IFD0173', 'MAT0025'],
    'MAT0026': ['MAT0025'],
    'ECL0033': ['CEL0088'],

    // --- 3º Nível ---
    'ENC0035': ['IFD0171', 'MAT0026', 'MAT0031'],
    'ENC0241': ['IFD0171', 'MAT0025', 'IGD0173'],
    'ENC0240': ['IGD0173'],
    'ENC0266': ['IFD0175'],
    'ENC0267': ['IGD0173', 'ENC0053'],
    'ENC0268': ['IQD0125'],
    'MAT0027': ['MAT0025', 'MAT0026'],

    // --- 4º Nível ---
    'ENC0037': ['MAT0027', 'ENC0035'],
    'ENC0235': ['ENC0241', 'ENC0240', 'MAT0027'],
    'ENC0269': ['CEL0088'],
    'ENC0270': ['CEL0088'],
    'ENC0272': ['IQD0125'],
    'ENC0273': ['IQD0125'],

    // --- 5º Nível ---
    'ENC0183': ['ENC0235'],
    'ENC0251': ['ENC0267', 'ENC0037'],
    'ENC0252': ['ENC0267', 'ENC0037'],
    'ENC0274': ['MAT0027'],
    'ENC0275': ['MAT0027'],

    // --- 6º Nível ---
    'ENC0001': ['ENC0037', 'IQD0125'],
    'ENC0002': ['SOL0042', 'MAT0025'],
    'ENC0166': ['ENC0037', 'ENC0267', 'ENC0274'],
    'ENE0001': ['MAT0027', 'MAT0031'],
    'EPR0068': ['ENC0274'],

    // --- 7º Nível ---
    'ENC0004': ['ECL0033', 'ENC0251', 'ENC0166'],
    'ENC0007': ['ENC0251', 'ENC0001'],
    'ENC0010': ['ENC0251', 'ENC0001'],
    'ENC0052': ['ENC0183', 'ENC0001'],
    'EPR0059': ['EPR0068'],
    'FDD0282': ['ENC0002'],

    // --- 8º Nível ---
    'ENC0013': ['ENC0275'],
    'ENC0015': ['ENC0166', 'ENC0001'],
    'ENC0016': ['ENC0183', 'ENC0037'],
    'ENC0025': ['EPR0059'],

    // --- 9º Nível ---
    'ENC0026': ['FDD0282', 'EPR0059'],
    'ENC0028': ['ENC0025'],

    // --- 10º Nível ---
    'ENC0030': ['ENC0028'],
    'ENC0031': ['FDD0282', 'ENC0016', 'ENC0015'],

    // --- DEPENDÊNCIAS DAS OPTATIVAS ---
    'CDS0008': ['CDS0007'],
    'ENC0011': ['ENC0166', 'ENC0275'],
    'ENC0019': ['ENC0251', 'ENC0001'],
    'ENC0020': ['ENC0251', 'ENC0001'],
    'ENC0169': ['ENC0251', 'ENC0252'],
    'ENC0282': ['ENC0166'],
    'CEL0019': ['IQD0125'],
    'CEL0054': ['IQD0125'],
    'ENE0002': ['ENE0001'],
    'MAT0048': ['MAT0026'],
    'TAU0013': ['SOL0042'],
    'FCE0187': ['ENC0274']
};

function verificarGrade() {
    let mudancaDetectada = false;
    const saveState = {};
    const todosInputs = document.querySelectorAll('input[type="checkbox"]');

    todosInputs.forEach(input => {
        const divMateria = input.parentElement;
        const idMateria = divMateria.id;
        const listaReqs = dependencias[idMateria];

        // Lógica de Habilitação
        let habilitada = true;
        if (listaReqs) {
            habilitada = listaReqs.every(reqId => {
                const reqInput = document.querySelector(`#${reqId} input`);
                return reqInput && reqInput.checked;
            });
        }

        if (habilitada) {
            input.disabled = false;
            divMateria.style.opacity = "1";
            divMateria.style.filter = "none";
        } else {
            // Se a matéria for bloqueada, desmarca e aplica estilo de "travado"
            input.disabled = true;
            if (input.checked) {
                input.checked = false;
                divMateria.classList.remove('concluida');
                mudancaDetectada = true;
            }
            divMateria.style.opacity = "0.2";
            divMateria.style.filter = "grayscale(1)";
        }

        saveState[idMateria] = input.checked;
    });

    localStorage.setItem('unb_ambiental_data', JSON.stringify(saveState));
    
    // Cascata: se uma mudança afetou outras, verifica novamente
    if (mudancaDetectada) verificarGrade();
}

function carregarDados() {
    const dados = JSON.parse(localStorage.getItem('unb_ambiental_data') || '{}');
    
    Object.keys(dados).forEach(id => {
        const div = document.getElementById(id);
        if (div) {
            const input = div.querySelector('input');
            input.checked = dados[id];
            if (dados[id]) div.classList.add('concluida');
        }
    });

    verificarGrade();
}

// Inicialização e Event Listeners
document.querySelectorAll('input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.classList.add('concluida');
        } else {
            this.parentElement.classList.remove('concluida');
        }
        verificarGrade();
    });
});

window.onload = carregarDados;
