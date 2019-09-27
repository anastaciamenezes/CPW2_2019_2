/**
 * Nosso BD (Banco de Dados) fake!
 * (in memory DB)
 */
var contatos = [];

/**
 * Criar função salvar contatos
 */

 function salvarContato(event) {
     // Inibe a recarga da página
     // Previne o comportamento Default 
    event.preventDefault();
    /**
     * $ -> 
     */

     // let nome = document.querySelector('#nome').value;
     // Recupera os valores do formulário
     let nome = $('#nome').val();
     let telefone = $('#telefone').val();
     let email = $('#email').val();
     let dataNascimento = $('#dataNascimento').val();

     //Criar um objeto de contato
     //Pode ser colocados em linhas, quando houver vários valores a ser colocado
     let contato = {
         nome, 
         telefone,
         email, 
         dataNascimento
    };

    //Adiciona o contato no nosso BD (no final do vetor)
    contatos.push(contato);

    console.log(contatos);

 }