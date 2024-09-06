function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    console.log(campoPesquisa)

    // se campoPesquisa for uma string sem nada
    if(campoPesquisa == "" ) {
         section.innerHTML = "<p>Nada Foi Encontrado!</p>"
         sec
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
   
    // Inicializa uma string vazia para armazenar os resultados
    
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let link = "";
  
    // Itera sobre cada item de dado e cria o HTML para cada resultado
    for (let dado of dados) {
          titulo = dado.titulo.toLowerCase()
          descricao = dado.descricao.toLowerCase()
          link = dado.link.toLowerCase()
          tags = dado.tags.toLowerCase()

      // se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || link.includes(campoPesquisa)) {
        
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a href=${dado.link} target="_blank">Explorar</a>
        </div>
      `;
      }
      
    }
    if(!resultados) {
      resultados = "<p>Nada Foi Encontrado!</p>"
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados;
  }





