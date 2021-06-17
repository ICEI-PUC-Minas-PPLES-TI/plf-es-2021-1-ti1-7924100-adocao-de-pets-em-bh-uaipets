console.log("akwlqdew");

const cep = document.querySelector("#cep");

cep.addEventListener("blur", () => {
  const monteCep = (result) => {
    for (const campo in result) {
      if (document.querySelector("#" + campo)) {
        let space = document.querySelector("#" + campo);
        space.value = result[campo];
      }
    }
  };

  let pesquisa = cep.value.replace("-", "");
  const opt = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${pesquisa}/json/`, opt)
    .then((res) => {
      res.json().then((data) => monteCep(data));
    })
    .catch((e) => console.log("Deu Erro: " + e, message));
});

//fetch()  https://viacep.com.br/ws/01001000/json/





var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

//Nightmode

var timesClicked = 0;
function nightMode() {
    timesClicked++;
    if (timesClicked % 2 == 0) {
        document.body.style.background = 'white';
    } else {
        document.body.style.background = 'black';
    }
   
}

//Local Storage

function leDados () {
  let strDados = localStorage.getItem('db');
  let objDados = {infopessoal};

  if (strDados) {
      objDados = JSON.parse (strDados);
  }
  else {
      objDados = { infopessoal: [  
                  ]}
  }

  return objDados;
}

function salvaDados (dados) {
  localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirDados (){
  // Ler os dados do localStorage
  let objDados = leDados();

  // Incluir novos dados
  let strNome = document.getElementById ('exampleInputNome1').value;
  let strEmail = document.getElementById ('exampleInputEmail1').value;
  let strcep = document.getElementById ('cep').value;
  let strEndereço = document.getElementById ('logradouro').value;
  let strBairro = document.getElementById ('bairro').value;
  let strComplemento = document.getElementById ('exampleInputcomplemento1').value;
  let strCidade = document.getElementById ('localidade').value;
  let strEstado = document.getElementById ('uf').value;

  let novosdados = {
      nome: strNome,
      Email: strEmail,
      CódigoPostal: strcep,
      Endereço: strEndereço,
      Bairro: strBairro,
      Complemento: strComplemento,
      Cidade: strCidade,
      Estado: strEstado
  };
  objDados.infopessoal.push (novosdados);

  // Salvar os dados no localStorage novamente
  salvaDados (objDados);

  // Atualiza os dados da tela
  imprimeDados ();
}
// Configura os botões
document.getElementById ('btnEnviar').addEventListener ('click', incluirDados);

//compartilhar
gatoshare.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'WebShare API Demo',
      url: 'http://127.0.0.1:5500/UAIPET/index.html#'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    // fallback
  }
});
passaroshare.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'WebShare API Demo',
      url: 'http://127.0.0.1:5500/UAIPET/index.html#'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    // fallback
  }
});
hamstershare.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'WebShare API Demo',
      url: 'http://127.0.0.1:5500/UAIPET/index.html#'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    // fallback
  }
});
caoshare.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'WebShare API Demo',
      url: 'http://127.0.0.1:5500/UAIPET/index.html#'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    // fallback
  }
});