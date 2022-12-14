const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');

//Configuração do HandleBars
app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout: 'main'
}));


app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

//rota inicial 
//rederiza o home.hbs para abra dentro da tag {{{body}}} no layout teste
app.get("/", (req, res)=>{
    res.render('home');
})

// rota renderiza para o cad_users
app.get("/cad_users", (req, res)=>{
    res.render('cad_users');
});

// rota renderizada
app.get("/exibir_users", (req, res)=>{
    res.render('exibir_users');
});


// rota renderizada
app.get("/editar_users", (req, res)=>{
    res.render('editar_users');
});


//rota middlewares
app.use(bodyParser.urlencoded({extended:false}));

//rota para receber o formulario de usuario


//ativar sistema
app.listen(PORT, ()=>{
    console.log('Servidor rodando no http://localhost:'+PORT);
})

app.post('/insert_users', (req,res)=>{
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;

    Usuario.create({
        nome: nome,
        email: email.toLowerCase(),
        senha: senha
    }).then(function(){
        console.log('Cadastro realizado com sucesso!');
        return res.redirect('/exibir_users');
    }).catch(function(erro){
console.log(`Ops, deu erro: ${erro}`)
    })
 });