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
