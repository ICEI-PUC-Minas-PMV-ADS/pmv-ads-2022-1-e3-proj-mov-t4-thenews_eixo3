const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer')
const path = require('path')
require ('dorenv').config()

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads') // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

// Configurar o multar para trabalhar com o storage
// Defini as configurações de storage
var upload = multer({ storage: storage })


//DB CONNECTION
const conn = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
});

const conn2 = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'the_news',
    multipleStatements: true
});

// Starting our app.
const app = express();
app.use(express.json())


// Permission do enable CORS
app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,PATCH');
    app.use(cors());
    next();
});

// GET from the first page, to check if NODE.js server is ON and runing
app.get('/', function(req, res) {
    res.send('Hello World!');
});

// Creating a GET route that returns data from the 'messages' table.
app.get('/messages', function(req, res) {
    // Connecting to the database.
    // Executing the MySQL query (select all data from the 'Messages' table).
    conn.query('SELECT * FROM Messages ORDER BY id DESC', function(error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
    });
});

// Creating a POST route that insert data into the 'Messages' table.
app.post('/submitmessage', function(req, res) {

    let { titleMessage, messageField, imgField } = req.body;
    if (!req.body) {
        console.log("Sem requisição");
    } else {
        console.log("Corpo requisição enviada")
        conn.query(`INSERT INTO Messages (titleMessage, messageField, imgField) VALUES (?, ?, ?)`, [titleMessage, messageField, imgField], function(err, res) {
            if (err)
                console.log(err)
        });
        res.send();

    }

});


// Upload of images and title e messages.
app.post("/submit", upload.single('avatar'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var imgsrc = '/uploads' + req.file.filename
        var insertData = "INSERT INTO Messages(imgField)VALUES(?)"
        conn.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
        })
        res.send();
    }
});

// Adicionar essa linha em package.json caso não tenha criado a pasta uploads, pois esse vai ser o diretorio onde as imagens vão ser salvas.
// Heroku não guarde imagens no memoria, portanto, o codigo não funciona para API com upload de imagens. Testei somente localhost e funcionou.

// "scripts": {
//     "start": "node index.js",
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "heroku-postbuild": "mkdir uploads"
// },


// Creating a DELETE route that delete data from the 'Messages' table.
app.delete('/:id?', function(req, res) {
    let { id } = req.body;
    conn.query(`DELETE FROM Messages WHERE id = (?)`, [id], function(err, res) {
        if (err)
            console.log(err)
    });
    res.send("DELETE OK");
});


// Creating a PUT route that update data from the 'Messages' table.
app.put('/update/:id?', function(req, res) {
    let { titleMessage, messageField, imgField, idBairro, id } = req.body;
    let usuario = 1;
    conn.query(`UPDATE mensagens SET titulo = ?, mensagem = ?,  imagem = ?, Usuario_idUsuario = ?, Bairro_idBairro = ? WHERE idMensagens = ?`, [titleMessage, messageField, imgField, usuario, idBairro, id], function(err, res) {
        if (err)
            console.log(err)
    });
    res.send();

});


// Function to call a MYSQL query, can add in a class/layer
// Função para pegar a query do MYSQL, pode adicionar em uma classe/camada.
function getMessageByIdAntigo(Id, callbackRetorno) {
    return conn.query('SELECT * from Messages WHERE id=?', Id, callbackRetorno);
}

// Creating a GETbyID route that returns data from the 'Messages' table from a specific specific MESSAGE ID.
app.get('/messages/:id', function(req, res) {

    //Essa função recebe 2 parametros o ID e o CALLBACKRETORNO
    getMessageByIdAntigo(req.params.id, function(err, row) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(row);
        }
    });
});



//*********************************************************************************************//


////////////////////////////////////////////BAIRROS


//REFATORANDO CODIGO
// GET em todos os bairros listados e cadastrados no banco.
app.get('/bairros', function(req, res) {
    // Connecting to the database.
    // Executing the MySQL query (select all data from the 'Messages' table).
    conn.query('SELECT * FROM bairro ORDER BY nomeBairro ASC', function(error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results)
    });
});


//REFATORANDO CODIGO
// POST de mensagens com um id de bairro e uma mensagem especifica.
app.post('/enviarmensagembairro', function(req, res) {

    let { titleMessage, messageField, imgField, idBairro } = req.body;
    let Usuario_idUsuario = 1;
    if (!req.body) {
        console.log("Sem requisição");
    } else {
        console.log("Corpo requisição enviada")
        conn.query(`INSERT INTO Mensagens (titulo, mensagem, imagem, Usuario_idUsuario, Bairro_idBairro) VALUES (?, ?, ?, ?, ?)`, [titleMessage, messageField, imgField, Usuario_idUsuario, idBairro], function(err, res) {
            if (err)
                console.log(err)
        });
        res.send();

    }

});


//REFATORANDO CODIGO
// Function to call a MYSQL query, can add in a class/layer
// Função para pegar a query do MYSQL, pode adicionar em uma classe/camada.
function getMessageById(Id, callbackRetorno) {
    return conn.query('SELECT * from mensagens WHERE Bairro_idBairro = ? ORDER BY idMensagens DESC', Id, callbackRetorno);
}
// Creating a GETbyID route that returns data from the 'Messages' table from a specific specific MESSAGE ID.
app.get('/getmensagembairro/:id', function(req, res) {

    //Essa função recebe 2 parametros o ID e o CALLBACKRETORNO
    getMessageById(req.params.id, function(err, row) {
        if (!req.params.id) {
            return res.status(500).end()
        }
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(row);
        }
    });
});


///////////////////////////////////////MENSAGENS

//REFATORANDO CODIGO
// Creating a DELETE route that delete data from the 'Messages' table.
app.delete('/deletarmensagens/:id?', function(req, res) {
    let { id } = req.body;
    conn.query(`DELETE FROM mensagens WHERE idMensagens = (?)`, [id], function(err, res) {
        if (err)
            console.log(err)
    });
    res.send("DELETE OK");
});


// Function to call a MYSQL query, can add in a class/layer
// Função para pegar a query do MYSQL, pode adicionar em uma classe/camada.
function getMessageByIdUpdate(Id, callbackRetorno) {
    return conn.query('SELECT * from mensagens WHERE idMensagens=?', Id, callbackRetorno);
}

// Creating a GETbyID route that returns data from the 'Messages' table from a specific specific MESSAGE ID.
app.get('/menssagensbyidupdate/:id', function(req, res) {

    //Essa função recebe 2 parametros o ID e o CALLBACKRETORNO
    getMessageByIdUpdate(req.params.id, function(err, row) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(row);
        }
    });
});


///////////////////////////////////COMENTARIOS

//REFATORANDO CODIGO
// Function to call a MYSQL query, can add in a class/layer
// Função para pegar a query do MYSQL, pode adicionar em uma classe/camada.
function getCommentsById(Id, callbackRetorno) {
    return conn.query('SELECT * from comentarios WHERE Mensagens_idMensagens=?', Id, callbackRetorno);
}
// Creating a GETbyID route that returns data from the 'Messages' table from a specific specific MESSAGE ID.
app.get('/comentariosmensagem/:id', function(req, res) {

    //Essa função recebe 2 parametros o ID e o CALLBACKRETORNO
    getCommentsById(req.params.id, function(err, row) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(row);
        }
    });
});

//REFATORANDO CODIGO
// POST de mensagens com um id de bairro e uma mensagem especifica.
app.post('/comentarmensagem', function(req, res) {

    let { commentField, idMensagens } = req.body;
    let Usuario_idUsuario = 1;
    if (!req.body) {
        console.log("Sem requisição");
    } else {
        console.log("Corpo requisição enviada")
        conn.query(`INSERT INTO comentarios (Usuario_idUsuario, Mensagens_idMensagens, comentariosMensagens) VALUES (?, ?, ?)`, [Usuario_idUsuario, idMensagens, commentField], function(err, res) {
            if (err)
                console.log(err)
        });
        res.send();

    }

});


//REFATORANDO CODIGO
// POST de mensagens com um id de bairro e uma mensagem especifica.
app.post('/user/register', function(req, res) {

    let { nome, email, senha } = req.body;

    if (!req.body) {
        console.log("Sem requisição");
    } else {
        console.log("Corpo requisição enviada")
        conn.query(`INSERT INTO usuario ( nome, email, senha) VALUES ( ?, ?, ?)`, [nome, email, senha], function(err, res) {
            if (err)
                console.log(err)
        });
        res.send();

    }

});

function getUser(email, callbackRetorno) {
    return conn.query('SELECT * from usuario WHERE email=?', email, callbackRetorno);
}

// Creating a GETbyID route that returns data from the 'Messages' table from a specific specific MESSAGE ID.
app.get('/user/email/:email', function(req, res) {

    //Essa função recebe 2 parametros o ID e o CALLBACKRETORNO
    getUser(req.params.email, function(err, row) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(row);
        }
    });
});

// Starting our server.
// In local host the server uses port: "3000", if we deploy the aplication, server will use port: "process.env.PORT"
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});