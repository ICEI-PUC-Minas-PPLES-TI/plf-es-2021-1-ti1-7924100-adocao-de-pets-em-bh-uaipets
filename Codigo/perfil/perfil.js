
onload = () => {
    if (localStorage.getItem("user") === null)
        setData('Alberto Silva', 'albertosilva@email.com', '(31) 91234-5678', 'Rua Sapucaí, 33 - Floresta', 'Estudante de veterinária e amante de gatos nas horas vagas.');
    updateProfile();
}

const changeProfile = () =>{
    var nameInput = document.getElementById("nameValue");
    var emailInput = document.getElementById("emailValue");
    var phoneInput = document.getElementById("phoneValue");
    var enderecoInput = document.getElementById("addressValue");
    var aboutInput = document.getElementById("aboutValue");
    var dataObj = getData(); 

    nameInput.value = dataObj.name;
    emailInput.value = dataObj.email;
    phoneInput.value = dataObj.phone;
    enderecoInput.value = dataObj.address;
    aboutInput.value = dataObj.about;
    $('.info-text').hide();
    $('.info-input').show();
}

function saveProfile(){
    var nameInput = document.getElementById("nameValue").value;
    var emailInput = document.getElementById("emailValue").value;
    var phoneInput = document.getElementById("phoneValue").value;
    var enderecoInput = document.getElementById("addressValue").value;
    var aboutInput = document.getElementById("aboutValue").value;

    setData(nameInput, emailInput, phoneInput, enderecoInput, aboutInput);
    $('.info-text').show();
    $('.info-input').hide();
    updateProfile();
}

function updateProfile(){
    var dataObj = getData();
    var allName = document.querySelectorAll('.name-text');
    allName.forEach(name => {
        name.innerHTML = dataObj.name;
    });
    document.getElementById("email").innerHTML = dataObj.email;
    document.getElementById("phone").innerHTML = dataObj.phone;
    document.getElementById("address").innerHTML = dataObj.address;
    document.getElementById("about").innerHTML = dataObj.about;
}

function setData(name, email, phone, address, about = ''){
    localStorage.setItem('user', JSON.stringify({ name: name, email: email, phone: phone, address: address, about: about,}));

}

function getData(){
    console.log(JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user'));
}