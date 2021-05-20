var objDados = [];

function leDados() {
    let strDados = localStorage.getItem('db');

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            cadastros: [
            ]
        }
    }
    console.log(objDados);
    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirCadastro() {
    // Ler os dados do localStorage    
    let objDados = leDados();

    // Incluir um novo cadastro
    let strNome = document.getElementById('exampleInputname').value;
    let strSenha = document.getElementById('exampleInputPassword').value;
    let strTelefone = document.getElementById('exampleInputphone').value;
    let strEmail = document.getElementById('exampleInputEmail').value;
    let novoCadastro = {
        nome: strNome,
        telefone: strTelefone,
        Email: strEmail,
        Senha: strSenha,
    };
    objDados.cadastros.push(novoCadastro);
    // Salvar os dados no localStorage novamente
    salvaDados(objDados);
}
// Configura os botões
//document.getElementById('btnIncluirCadastro').addEventListener('click', incluirCadastro());