const express = require('express')
const bodyparser = require('body-parser')
const fs = require('fs');
const path = require('path')
const mysql = require('mysql')
const multer = require('multer')
const csv = require('fast-csv');
const app = express()


app.use(express.static("./public"))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './uploads')
    },
    filename:(req,file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage: storage
});

// conexão com o banco de dados
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "BEFOUND"
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/import-csv', upload.single("import-csv"), (req, res) => {
    console.log(req.file.path)
    uploadCsv(__dirname + '/uploads/' + req.file.filename);
    res.send("Dados inseridos com sucesso!")
});

function uploadCsv(uriFile){
    let stream = fs.createReadStream(uriFile);
    let csvDataColl = [];
    let fileStream = csv
        .parse()
        .on("data", function (data){
            csvDataColl.push(data);
        })
        .on("end", function() {
            csvDataColl.shift();

            pool.getConnection((error,connection) => {
                if (error) {
                    console.error(error);
                } else {
                    let query = 'INSERT INTO sumido (nome, cidade, data_nasc) VALUES ?';
                    connection.query(query, [csvDataColl], (error, res) => {
                        console.log(error || res);
                    });
                }
            });

            fs.unlinkSync(uriFile)
        });

    stream.pipe(fileStream);
}


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Node app serving on port: ${PORT}`))