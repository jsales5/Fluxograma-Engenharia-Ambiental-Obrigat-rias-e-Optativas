/**
 * Lógica de Automação de Progresso
 * Baseada na carga horária (CH) total de 4410h
 */

const CH_TOTAL_CURSO = 4410;

function atualizarPainelProgresso() {
    let chConcluida = 0;
    
    // Seleciona apenas as matérias que estão marcadas (checkadas)
    const materiasCheckadas = document.querySelectorAll('.materia input:checked');

    materiasCheckadas.forEach(input => {
        // Busca o valor de CH no atributo data-ch da div pai
        const chMateria = parseInt(input.parentElement.getAttribute('data-ch')) || 0;
        chConcluida += chMateria;
    });

    // Cálculos
    const percentual = ((chConcluida / CH_TOTAL_CURSO) * 100).toFixed(1);

    // Atualização do DOM (Elementos que devem existir no seu HTML)
    const progFill = document.getElementById('progress-fill');
    const percentTxt = document.getElementById('percent-val');
    const hoursTxt = document.getElementById('hours-val');

    if (progFill) progFill.style.width = `${percentual}%`;
    if (percentTxt) percentTxt.innerText = `${percentual}%`;
    if (hoursTxt) hoursTxt.innerText = `${chConcluida}`;
}

// Inicializador para observar mudanças nos checkboxes
document.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox' && e.target.closest('.materia')) {
        atualizarPainelProgresso();
    }
});

// Executa ao carregar a página para ler o LocalStorage
window.addEventListener('load', atualizarPainelProgresso);
