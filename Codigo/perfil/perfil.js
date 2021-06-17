const changeProfile = () => {

   
    var nameinput = document.getElementById("nameInput")
    
    nameinput.innerHTML = `<input type="text" id="namevalue" placeholder="insira seu nome"> 
    <button onclick="changeName()"> ok </button>`

    function changeName(){

        console.log(document.getElementById("namevalue").value)

    }
}

changeProfile() 