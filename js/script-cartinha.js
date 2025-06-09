const escutarBtn = document.getElementById('escutarBtn');
const musica = document.getElementById('musica');

if (escutarBtn && musica) {
  escutarBtn.addEventListener('click', () => {
    if (musica.paused) {
      musica.play();
      escutarBtn.textContent = 'Pausar música';
    } else {
      musica.pause();
      escutarBtn.textContent = 'Clique para escutar';
    }
  });
}

// Criar corações animados caindo
function criarCoração() {
  const coracao = document.createElement('div');
  coracao.classList.add('heart');
  coracao.innerHTML = '❤️';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = (Math.random() * 2 + 3) + 's';

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

setInterval(criarCoração, 300);
