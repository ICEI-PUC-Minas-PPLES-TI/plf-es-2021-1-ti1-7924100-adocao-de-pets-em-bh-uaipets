var db_pets_inicial={
    pets:[
        {
            id:1,
            foto:'imagens_adote/cao1.jpg',
            nome:'Tico',
            tamanho:'P',
            idadeValor: '16',
            idade:'anos',
            sexo:'M',
            especie:'cão',
            endereco:'Barreiro',
            adotado: false,
            idDoador: 2
        },
        {
            id:2,
            foto:'imagens_adote/ave1.jfif',
            nome:'José',
            tamanho:'P',
            idadeValor: '8',
            idade:'meses',
            sexo:'M',
            especie:'ave',
            endereco:'Santa Inês',
            adotado: false,
            idDoador: 2
        },
        {
            id:3,
            foto:'imagens_adote/gato1.jfif',
            nome:'Lili',
            tamanho:'M',
            idadeValor: '3',
            idade:'anos',
            sexo:'F',
            especie:'gato',
            endereco:'Savassi',
            adotado: false,
            idDoador: 2
        },
        {
            id:4,
            foto:'imagens_adote/rato1.jpg',
            nome:'Gorgonzola',
            tamanho:'P',
            idadeValor: '7',
            idade:'meses',
            sexo:'M',
            especie:'outros',
            endereco:'Centro',
            adotado: false,
            idDoador: 2
        },
        {
            id:5,
            foto:'imagens_adote/rato2.jpg',
            nome:'Quinquin e Bolota',
            tamanho:'P',
            idadeValor: '10',
            idade:'meses',
            sexo:'MF',
            especie:'outros',
            endereco:'Cidade Jardim',
            adotado: false,
            idDoador: 2
        },
        {
            id:6,
            foto:'imagens_adote/gato2.jfif',
            nome:'Milka',
            tamanho:'P',
            idadeValor: '2',
            idade:'anos',
            sexo:'F',
            especie:'gato',
            endereco:'Prado',
            adotado: false,
            idDoador: 2
        },
        {
            id:7,
            foto:'imagens_adote/cao2.jfif',
            nome:'Pitucha',
            tamanho:'G',
            idadeValor: '7',
            idade:'meses',
            sexo:'F',
            especie:'cão',
            endereco:'Centro',
            adotado: false,
            idDoador: 2
        },
        {
            id:8,
            foto:'imagens_adote/ave2.jfif',
            nome:'Godofredo',
            tamanho:'P',
            idadeValor: '3',
            idade:'anos',
            sexo:'M',
            especie:'ave',
            endereco:'Salgado Filho',
            adotado: false,
            idDoador: 2
        },
        {
            id:9,
            foto:'imagens_adote/gato3.jfif',
            nome:'Thor',
            tamanho:'P',
            idadeValor: '1',
            idade:'anos',
            sexo:'M',
            especie:'gato',
            endereco:'Sion',
            adotado: false,
            idDoador: 2
        },
        {
            id:10,
            foto:'imagens_adote/ave3.jpg',
            nome:'Pintinhos',
            tamanho:'P',
            idadeValor: '15',
            idade:'dias',
            sexo:'Nao Informado',
            especie:'ave',
            endereco:'Gutierrez',
            adotado: false,
            idDoador: 2
        },
        {
            id:11,
            foto:'imagens_adote/cao4.jfif',
            nome:'Toddy',
            tamanho:'P',
            idadeValor: '4',
            idade:'anos',
            sexo:'M',
            especie:'cão',
            endereco:'Buritis',
            adotado: false,
            idDoador: 2
        },
        {
            id:12,
            foto:'imagens_adote/cao3.jfif',
            nome:'Amora',
            tamanho:'P',
            idadeValor: '10',
            idade:'anos',
            sexo:'F',
            especie:'cão',
            endereco:'Pampulha',
            adotado: false,
            idDoador: 2
        },
    ]
};

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db_pets = JSON.parse(localStorage.getItem('dbPets'));
if (!db_pets) {
    db_pets = db_pets_inicial;
};


function exibeCards(){
    let nome;
    let foto;
    let bairro;
    let tamanho;
    let sexo;
    let txthtml='';
    let adotado;

    let font_tamanho;
    let font_sexo;
    let j=0;

    
    for (let i=0; i<db_pets.pets.length; i++) {
        
        nome = db_pets.pets[i].nome;
        foto = db_pets.pets[i].foto;
        bairro = db_pets.pets[i].endereco;
        tamanho = db_pets.pets[i].tamanho;
        sexo = db_pets.pets[i].sexo;
        adotado = db_pets.pets[i].adotado;
        
        if (sexo=='M'){
            font_sexo='<i class="fas fa-mars"></i>';
            //console.log(sexo, i);
        }
        else if (sexo=='F'){
            font_sexo='<i class="fas fa-venus"></i>';
            //console.log(sexo, i);
        }
        else if (sexo=='MF'){
            font_sexo='<i class="fas fa-mars"> <i class="fas fa-venus"></i></i>';
            //console.log(sexo, i);
        }
        else{
            font_sexo='';
            //console.log(sexo, i);
        };

        if (tamanho=='P'){
            font_tamanho=`<span class="badge bg-warning">P</span>
            <span class="badge bg-light text-dark">M</span>
            <span class="badge bg-light text-dark">G</span>`;
        }
        else if (tamanho=='M'){
            font_tamanho=`<span class="badge bg-light text-dark ">P</span>
            <span class="badge bg-warning ">M</span>
            <span class="badge bg-light text-dark">G</span>`;
        }
        else{
            font_tamanho=`<span class="badge bg-light text-dark ">P</span>
            <span class="badge bg-light text-dark ">M</span>
            <span class="badge bg-warning ">G</span>`;
        }
       
        if(!adotado){

            if(j==0 || j%4==0){
                txthtml +=`<div class="row">`
            }
            
            txthtml += `<div class="col-12 col-sm-12 col-md-6 col-lg-3 margem-bottom-10px">
                        <div class="card">
                            <img src="${foto}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h3 class="roxo hover-white" data-bs-toggle="modal" data-bs-target="#exampleModal">${nome}</h3>
                                <p class="card-text"><i class="fas fa-map-pin"></i> ${bairro}</p>
                                <div class="row">
                                    <div class="col-10">
                                        ${font_tamanho}
                                        <span class="roxo hover-white" data-bs-toggle="modal" data-bs-target="#modaldog" >Marcar encontro</span>
                                        <span class="text-right">

                                    </div>
                                    <div class="col-2">${font_sexo}</div>
                                </div>
                                <div><button type="submit" class="btn btn-light centro bg-roxo" onclick="adotar(${i})">Adotar</button></div>
                            </div>
                        </div>
                    </div>`;

            if(j%4==3 || j==db_pets.pets.length-1){
                txthtml +=`</div>`
            }
            j++;
            //console.log('j =', j);
        }
    }

    //console.log('html =', txthtml);
    document.getElementById('telaCards').innerHTML = txthtml;

}

exibeCards();

function adotar(i){
    let nome = db_pets.pets[i].nome;
    db_pets.pets[i].adotado=true;
    alert("Parabéns, você adotou "+ nome + "!");

    // Filtra o array removendo o elemento com o id passado
    db_pets.pets = db_pets.pets.filter(function (element) { return element.id != i });

    // Atualiza os dados no Local Storage
    localStorage.setItem('dbPets', JSON.stringify(db_pets));

    exibeCards();

}


function colocarAdocao(){
   
    nome=document.getElementById('idnome').value;
    porte=document.getElementById('idporte').value.toUpperCase();
    idadeval=document.getElementById('ididadeval').value;
    idade=document.getElementById('ididade').value.toLowerCase();
    sexo=document.getElementById('idsexo').value.toUpperCase();
    especie=document.getElementById('idespecie').value.toLowerCase();
    bairro=document.getElementById('idbairro').value;
    foto=document.getElementById('idfoto').value;

    if(porte !='P' && porte !='M' && porte !='G')
        alert("ERRO: Favor preencher o porte com os dados: P, M ou G");
    else if (isNaN(idadeval))
        alert("ERRO: Favor preencher o valor da idade com um número");
    else if(idade!='dias' && idade!='meses' && idade!='anos')
        alert("ERRO: Favor inserir idade como: dias, meses ou anos");
    else if(sexo!='M' && sexo!='F' && sexo!='MF' && sexo!='')
        alert("ERRO: Favor inserir o sexo como =: M, F, MF ou deixe vazio");
    else if(especie!='cão' && especie!='gato' && especie!='ave' && especie!='outros')
        alert("ERRO: Favor inserir o especie como =: cão, gato, ave ou outros");
    else if(nome=='')
        alert('ERRO: Favor preencher o nome');
    else if (bairro=='')
        alert('ERRO: Favor preencher o bairro');
    else{
        
        let Pet={
            id: db_pets.pets.length+1,
            foto: foto, 
            nome: nome,
            tamanho: porte,
            IdadeValor: idadeval,
            idade: idade,
            sexo: sexo,
            especie: especie,
            endereco: bairro,
            adotado: false,
            idDoador:2


        };
        
        
       
        db_pets.pets.push (Pet);
       
        localStorage.setItem ('dbPets', JSON.stringify(db_pets));

        exibeCards();

       
    }   
    

}
//document.getElementById('btnInserir').addEventListener ('click', colocarAdocao);


