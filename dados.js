let dados = [
    {
        titulo : "Médico",
        descricao: `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Médicos por perto</title>
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <header>
        <h1>⛑ Procure por um médico perto de você</h1>
        <h2>Digite no campo de busca o especialista que você quer encontrar</h2>
    </header>
    <main>
        <section>
            <input type="text" id="busca" placeholder="Digite o que você busca">
            <button onclick="buscarScript()">Gerar</button>
        </section>
        <section class="resultados-pesquisa" id="resultados"></section>
    </main>
    <footer>
        <p>2024 - LaurenTinoDev. Todos os direitos reservados</p>
        <p>Entre em contato pelo email: pedrolaurentino3@gmail.com</p>
    </footer>
    <script src="dados.js"></script>
    <script src="app.js"></script>
    </body>
    </html>`,
        tags: "medico médico ortopedista clinico clínico dentista nutricionista"
    },
    {
        titulo : "Times de Futebol",
        descricao: `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encontre seu time do coração</title>
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <header>
        <h1>⚽ Encontre seu time do coração</h1>
        <h2>Digite o nome do time ou a cidade</h2>
    </header>
    <main>
        <section>
            <input type="text" id="busca" placeholder="Digite o que você busca">
            <button onclick="buscarScript()">Gerar</button>
        </section>
        <section class="resultados-pesquisa" id="resultados"></section>
    </main>
    <footer>
        <p>2024 - LaurenTinoDev. Todos os direitos reservados</p>
        <p>Entre em contato pelo email: pedrolaurentino3@gmail.com</p>
    </footer>
    <script src="dados.js"></script>
    <script src="app.js"></script>
    </body>
    </html>`,
        tags: "time futebol bola neymar"
    },
    {
        titulo : "Filmes famosos",
        descricao: `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Descubra o próximo filme para assistir</title>
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <header>
        <h1>🎬 Descubra o próximo filme para assistir</h1>
        <h2>Digite o gênero, diretor ou ator</h2>
    </header>
    <main>
        <section>
            <input type="text" id="busca" placeholder="Digite o que você busca">
            <button onclick="buscarScript()">Gerar</button>
        </section>
        <section class="resultados-pesquisa" id="resultados"></section>
    </main>
    <footer>
        <p>2024 - LaurenTinoDev. Todos os direitos reservados</p>
        <p>Entre em contato pelo email: pedrolaurentino3@gmail.com</p>
    </footer>
    <script src="dados.js"></script>
    <script src="app.js"></script>
    </body>
    </html>`,
        tags: "filme filmes cinema arte"
    },
    {
        titulo: "Hospitais Renomados",
        descricao: `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encontre o melhor hospital para você</title>
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <header>
        <h1>🏨 Encontre o melhor hospital para você</h1>
        <h2>Digite a especialidade médica ou a cidade</h2>
    </header>
    <main>
        <section>
            <input type="text" id="busca" placeholder="Digite o que você busca">
            <button onclick="buscarScript()">Gerar</button>
        </section>
        <section class="resultados-pesquisa" id="resultados"></section>
    </main>
    <footer>
        <p>2024 - LaurenTinoDev. Todos os direitos reservados</p>
        <p>Entre em contato pelo email: pedrolaurentino3@gmail.com</p>
    </footer>
    <script src="dados.js"></script>
    <script src="app.js"></script>
    </body>
    </html>`,
        tags: "hospital hospitais uti"
    },
    {
        titulo: "Empresários Brasileiros",
        descricao: `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conheça os maiores empresários brasileiros</title>
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <header>
        <h1>👨🏻‍💼 Conheça os maiores empresários brasileiros</h1>
        <h2>Digite o nome do empresário ou o setor</h2>
    </header>
    <main>
        <section>
            <input type="text" id="busca" placeholder="Digite o que você busca">
            <button onclick="buscarScript()">Gerar</button>
        </section>
        <section class="resultados-pesquisa" id="resultados"></section>
    </main>
    <footer>
        <p>2024 - LaurenTinoDev. Todos os direitos reservados</p>
        <p>Entre em contato pelo email: pedrolaurentino3@gmail.com</p>
    </footer>
    <script src="dados.js"></script>
    <script src="app.js"></script>
    </body>
    </html>`,
        tags: "empresário empresários empreendedorismo"
    },
    {
        titulo: "Livros de Programação",
        descricao: `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encontre o livro de programação ideal</title>
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <header>
        <h1>👨‍💻 Encontre o livro de programação ideal</h1>
        <h2>Digite a linguagem de programação ou o tema</h2>
    </header>
    <main>
        <section>
            <input type="text" id="busca" placeholder="Digite o que você busca">
            <button onclick="buscarScript()">Gerar</button>
        </section>
        <section class="resultados-pesquisa" id="resultados"></section>
    </main>
    <footer>
        <p>2024 - LaurenTinoDev. Todos os direitos reservados</p>
        <p>Entre em contato pelo email: pedrolaurentino3@gmail.com</p>
    </footer>
    <script src="dados.js"></script>
    <script src="app.js"></script>
    </body>
    </html>`,
        tags: "dev prog programação"
    },
    {
        titulo: "Suplemento Alimentar",
        descricao: `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encontre o suplemento ideal para você</title>
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <header>
        <h1>💪 Encontre o suplemento ideal para você</h1>
        <h2>Digite o benefício desejado ou o tipo de suplemento</h2>
    </header>
    <main>
        <section>
            <input type="text" id="busca" placeholder="Digite o que você busca">
            <button onclick="buscarScript()">Gerar</button>
        </section>
        <section class="resultados-pesquisa" id="resultados"></section>
    </main>
    <footer>
        <p>2024 - LaurenTinoDev. Todos os direitos reservados</p>
        <p>Entre em contato pelo email: pedrolaurentino3@gmail.com</p>
    </footer>
    <script src="dados.js"></script>
    <script src="app.js"></script>
    </body>
    </html> ` ,
        tags: "suplemento whey creatina"
    }
];