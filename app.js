function buscarScript() {
    // Obtém a seção HTML onde os resultados da busca serão exibidos.
    let section = document.getElementById("resultados");
  
    // Obtém o valor digitado pelo usuário no campo de pesquisa.
    let campoPesquisa = document.getElementById("busca").value;
  
    // Verifica se o campo de pesquisa está vazio.
    if (campoPesquisa === "") {
      // Se estiver vazio, exibe uma mensagem de erro e um GIF.
      section.innerHTML = `<img src="giphy.gif" alt="Nenhum resultado encontrado">
                             <p style="display: none;">Nada foi encontrado</p>`;
      return; // Interrompe a função.
    }
  
    // Converte o termo de pesquisa para minúsculas para facilitar a comparação.
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa variáveis para armazenar os resultados da busca.
    let resultados = "";
    let titulo = "";
    let tags = "";
  
    // Função para escapar caracteres especiais em HTML para evitar injeção de código.
    function escaparHtml(texto) {
      return texto
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  
    // Itera sobre cada item de dado (provavelmente um array de objetos).
    for (let dado of dados) {
      // Converte o título e as tags para minúsculas para facilitar a comparação.
      titulo = dado.titulo.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      // Verifica se o título ou as tags contêm o termo de pesquisa.
      if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se encontrar uma correspondência, adiciona o resultado à string de resultados.
        resultados += `
          <div class="item-resultado">
            <h2>
              <a>${dado.titulo}</a>
            </h2>
            <pre><code>${escaparHtml(dado.descricao)}</code></pre>
            <a href="https://gemini.google.com/" target="_blank">Caso não encontrou o que desejava</a>
          </div>
        `;
      }
    }
  
    // Se nenhum resultado foi encontrado, exibe uma mensagem de erro e um GIF.
    if (!resultados) {
      section.innerHTML = `<img src="giphy.gif" alt="Nenhum resultado encontrado">
                             <p style="display: none;">Nada foi encontrado</p>`;
    } else {
      // Se houver resultados, atualiza a seção com os resultados formatados.
      section.innerHTML = resultados;
    }
  }