function filtrarProdutos() {
    // 1. Pega o valor digitado e converte para minúsculas
    let input = document.getElementById('barra_busca').value.toLowerCase();
    
    // 2. Pega todos os itens que você quer filtrar (ex: itens com classe 'produto-item')
    let listaProdutos = document.getElementsByClassName('produto-item');

    // 3. Loop por todos os itens
    for (let i = 0; i < listaProdutos.length; i++) {
        // Pega o texto do item (pode ser o título do produto)
        let titulo = listaProdutos[i].textContent || listaProdutos[i].innerText;
        
        // 4. Verifica se o texto do item contém o que foi digitado
        if (titulo.toLowerCase().indexOf(input) > -1) {
            // Se sim, mostra o item
            listaProdutos[i].style.display = "";
        } else {
            // Se não, esconde o item
            listaProdutos[i].style.display = "none";
        }
    }
}
