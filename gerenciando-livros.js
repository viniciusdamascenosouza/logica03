class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }
}

class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
  }

  listarLivros() {
    console.log("Lista de Livros na Biblioteca:");
    this.livros.forEach((livro) => {
      console.log(`${livro.titulo} - ${livro.autor} (${livro.anoPublicacao})`);
    });
  }

  buscarLivroPorAutor(autor) {
    const livrosDoAutor = this.livros.filter((livro) => livro.autor === autor);
    if (livrosDoAutor.length > 0) {
      console.log(`Livros de ${autor}:`);
      livrosDoAutor.forEach((livro) => {
        console.log(`${livro.titulo} (${livro.anoPublicacao})`);
      });
    } else {
      console.log(`Nenhum livro encontrado para o autor ${autor}.`);
    }
  }
}

const biblioteca = new Biblioteca();

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
const livro2 = new Livro("1984", "George Orwell", 1949);
const livro3 = new Livro(
  "Harry Potter e a Pedra Filosofal",
  "J.K. Rowling",
  1997
);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

biblioteca.listarLivros();

biblioteca.buscarLivroPorAutor("J.R.R. Tolkien");
