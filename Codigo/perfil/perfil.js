


const changeProfile = () => {

    

    var nameinput = document.getElementById("nameInput")
    var emailinput = document.getElementById("emailInput")
    var phoneinput = document.getElementById("phoneInput")
   var  enderecoinput = document.getElementById("addressInput")

    
    nameinput.innerHTML = `<input type="text" id="namevalue" value="a"  placeholder="digite seu nome"> `
   emailinput.innerHTML = `<input type="text" id="emailvalue"  placeholder="digite seu email"> `
    phoneinput.innerHTML = `<input type="text" id="phonevalue"  placeholder="digite seu telefone"> `
    enderecoinput.innerHTML = `<input type="text" id="enderecovalue"  placeholder="digite seu endereço"> `


   

    
    

    var but = document.getElementById("changesave")
    but.innerHTML=`Salvar`
    but.addEventListener('click', ()=>{

        console.log(nameinput)
      
        // nameinput.innerHTML=`${namevalue}`

    })


   function changeName(){
        console.log('a')
    }

}