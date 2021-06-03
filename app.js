// declara um conjunto inicial de contatos
var db_Aulas_Assistidas_inicial = {
    "data": [
        {
            "Número": 1,
            "Professor": "Felipe",
            "Curso": "Aeds",
            "Views": "20",
            "Email": "felipe@email.com",
            "Horario_Aula": "8:40 as 10:30",
            "Link_da_Aula": "Link da Aula"
        },
        {
            "Número": 2,
            "Professor": "Jõao Bosco",
            "Curso": "Cálculo",
            "Views": "10",
            "Email": "joaob@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Link_da_Aula": "Link da Aula"
        },
        {
            "Número": 3,
            "Professor": "Rommel",
            "Curso": "Tiaw",
            "Views": "5",
            "Email": "rommel@email.com",
            "Horario_Aula": "10:40 as 12:20",
            "Link_da_Aula": "Link da Aula"
        },
        {
            "Número": 4,
            "Professor": "Fátima",
            "Curso": "IC",
            "Views": "5",
            "Email": "fátima@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Link_da_Aula": "Link da Aula"
        },
        {
            "Número": 5,
            "Professor": "Carlos",
            "Curso": "IC",
            "Views": "6",
            "Email": "carlos@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Link_da_Aula": "Link da Aula"
        },
        {
            "Número": 6,
            "Professor": "Luis",
            "Curso": "Aeds",
            "Views": "8",
            "Email": "luis@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Link_da_Aula": "Link da Aula"
        },
        {
            "Número": 7,
            "Professor": "Larissa",
            "Curso": "devweb",
            "Views": "7",
            "Email": "larissa@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Link_da_Aula": "Link da Aula"
        },
        {
            "Número": 8,
            "Professor": "Nicolas",
            "Curso": "Banco de Dados",
            "Views": "25",
            "Email": "nicolas@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Link_da_Aula": "Link da Aula"
        },
        {
            "Número": 9,
            "Professor": "Roberto",
            "Curso": "Banco de Dados II",
            "Views": "10",
            "Email": "roberto@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Link_da_Aula": "Link da Aula"
        },
        {
            "Número": 10,
            "Professor": "cláudio",
            "Curso": "IC",
            "Views": "5",
            "Email": "claudio@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Link_da_Aula": "Link da Aula"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_Aulas_Assistidas'));
if (!db) {
    db = db_Aulas_Assistidas_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertAulas_Assistidas(Aulas_Assistidas) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoAulas_Assistidas = {
        "id": novoId,
        "nome": Aulas_Assistidas.nome,
        "email" : Aulas_Assistidas.email,
        "telefone": Aulas_Assistidas.telefone,
        "cidade" : Aulas_Assistidas.cidade,
        "categoria": Aulas_Assistidas.categoria,
        "website": Aulas_Assistidas.website
    };

    // Insere o novo objeto no array
    db.data.push(novoAulas_Assistidas);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Aulas_Assistidas', JSON.stringify(db));
}

function updateAulas_Assistidas(id, Aulas_Assistidas) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = Aulas_Assistidas.nome,
    db.data[index].email = Aulas_Assistidas.email,
    db.data[index].telefone = Aulas_Assistidas.telefone,
    db.data[index].cidade = Aulas_Assistidas.cidade,
    db.data[index].categoria = Aulas_Assistidas.categoria,
    db.data[index].website = Aulas_Assistidas.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Aulas_Assistidas', JSON.stringify(db));
}
