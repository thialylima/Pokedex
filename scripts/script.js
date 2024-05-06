// função para ativar popup
function toggle(popupID){

    var popup = document.getElementById(popupID);
    popup.classList.toggle('active'); 
    
    var overlay = document.getElementById('overlay');
    overlay.classList.toggle('active');

}


// Função para carregar mais cards
function loadMore() {
    const cards = document.querySelectorAll('.cards-box.hidden');

    const batchSize = 8; // Número de cards a serem mostrados em cada lote
  const endIndex = Math.min(cards.length, batchSize); // Calcula o índice final do lote
  for (let i = 0; i < endIndex; i++) {
    const card = cards[i];
    // Adiciona a classe para mostrar o card
    card.classList.remove('hidden');
  }

    // Esconde o botão "Carregar mais" se todos os cards estiverem visíveis
    if (document.querySelectorAll('.cards-box.hidden').length === 0) {
      document.getElementById('load-more').style.display = 'none';
    }
  }
  
  // Inicialização: esconder todos os cards exceto os primeiros 4
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cards-box');
    for (let i = 8; i < cards.length; i++) {
      cards[i].classList.add('hidden');
    }
  });
  