document.getElementById('criarCarona').addEventListener('click', () => {
  const partida = document.getElementById('partida').value;
  const destino = document.getElementById('destino').value;
  const horario = document.getElementById('horario').value;

  const dadosCarona = {
    partida,
    destino,
    horario
  };

  localStorage.setItem('carona', JSON.stringify(dadosCarona));
  window.location.href = 'carona.html';
});

fetch('motorista.json')
  .then(response => response.json())
  .then(data => {
    const infoSection = document.getElementById('dados-motorista');
    infoSection.innerHTML = `
      <h2>Motorista: ${data.nome}</h2>
      <h2>Carro: ${data.carro}</h2>
      <h2>Avaliação: ${data.avaliacao}</h2>
    `;
  })
  .catch(error => {
    console.error('Erro ao carregar dados do motorista:', error);
  });