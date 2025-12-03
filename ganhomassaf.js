const selecoes = { cafe: {}, almoco: {}, lanche: {}, jantar: {} };
let totalSelecionados = 0;
const totalLinhas = 12;


const contador = document.getElementById('contador');


document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', function() {
    const linha = this.parentElement;
    const meal = linha.getAttribute('data-meal');
    const line = linha.getAttribute('data-line');
    const value = this.getAttribute('data-value');

    
    linha.querySelectorAll('.button').forEach(b => b.classList.remove('selected'));

    
    this.classList.add('selected');

    
    if (!selecoes[meal][line]) totalSelecionados++;
    selecoes[meal][line] = value;

    contador.textContent = totalSelecionados;
  });
});


document.getElementById('enviar').addEventListener('click', () => {
  if (totalSelecionados < totalLinhas) {
    alert(`Faltam ${totalLinhas - totalSelecionados} itens! Selecione 1 por linha.`);
    return;
  }

  localStorage.setItem('refeicoes', JSON.stringify(selecoes));
  window.location.href = 'dieta.html';
});

const backToTopElement = document.getElementById("back-to-top-button");

const handleBackToTop = () => {
window.scrollTo({top: 0, left: 0, behavior: "smooth"});
};
backToTopElement.addEventListener("click", handleBackToTop);