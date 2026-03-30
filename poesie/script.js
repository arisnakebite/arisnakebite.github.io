fetch('content.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('content-list');
    container.innerHTML = ""; // Clear "Caricamento..."

    data.articles.forEach(item => {
      const articleHTML = `
        <div class="card">
          <span class="meta">Di ${item.author} - ${item.date}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a href="${item.link}" target="_blank">Leggi di più →</a>
        </div>
      `;
      container.innerHTML += articleHTML;
    });
  })
  .catch(error => console.error('Error loading content:', error));
