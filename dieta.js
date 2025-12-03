const dados = JSON.parse(localStorage.getItem('refeicoes'));

  if (!dados) {
    document.body.innerHTML = '<div style="text-align:center; padding:50px; color:#dc3545; font-size:1.2em;">Nenhuma refeição foi selecionada. <a href="index.html">Voltar</a></div>';
    throw new Error("Sem dados");
  }

  const refeicoes = ['cafe', 'almoco', 'lanche', 'jantar'];
  refeicoes.forEach(meal => {
    const ul = document.getElementById(meal);
    const slots = ul.querySelectorAll('.slot');
    [1, 2, 3].forEach((line, i) => {
      slots[i].textContent = dados[meal][line] || 'Nenhum item selecionado';
    });
  });

  const backToTopElement = document.getElementById("back-to-top-button");

const handleBackToTop = () => {
window.scrollTo({top: 0, left: 0, behavior: "smooth"});
};
backToTopElement.addEventListener("click", handleBackToTop);

function mostraEst(){
  window.location.href = 'informações.html';
}
