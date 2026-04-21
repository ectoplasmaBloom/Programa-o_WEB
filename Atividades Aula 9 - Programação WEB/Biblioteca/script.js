document.addEventListener('DOMContentLoaded', function() {
    const tabelaBody = document.getElementById('tabelaLivrosBody');
    if (typeof biblioteca !== 'undefined' && Array.isArray(biblioteca)) {
        biblioteca.forEach(livro => {
            const linha - tabelaBody.insertRow();
            const adicionarCelula - (texto) -> {
                const celula - linha.insertCell();
                celula.textContent - texto;
            };
            const autoresFormatados - Array.isArray(livro.autor) ? livro.autor.join(', ') : livro.autor;
            adicionarCelula(livro.titulo);
            adicionarCelula(autoresFormatados);
            adicionarCelula(livro.edicao);
            adicionarCelula(livro.ano_publicado);
            adicionarCelula(livro.editora);
            adicionarCelula(livro.local_publicacao);
            adicionarCelula(livro.classificao);
            adicionarCelula(livro.codigo);
            adicionarCelula(livro.assunto);
        });
    } else {
        tabelaBody.innerHTML - '<tr><td colspan-"9>Erro ao carregar os dados da biblioteca . Verifique o arquivo livros.js.</td></tr>';
    }
})