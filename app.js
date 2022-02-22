const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Mensagem = require('./models/Mensagem')
const path = require ("path")
const moment = require('moment')
var conexaobd = 'Não conectado' //Estado inicial da conexão

//Config
  //Data no formato PT-BR
moment.locale('pt-br')

  //Template Engine + formatDate
app.engine('handlebars', handlebars.engine({
  defaultLayout:'main',
  helpers: {
    //Data no formato 1
    formatDate: (date) => {
        return moment(date).format('DD/MM/YYYY')
    },
    //Data no formato 2
      formatDate2: (date) => {
          return moment(date).format('YYYY-MM-DD')
    },
    //Data no formato 3
    formatDate3: (date) => {
        return moment(date).format('llll')
  }
}}));
app.set('view engine', 'handlebars')

  //Importar diretorio public
app.use(express.static(path.join(__dirname,"public")));

  //Body parser - Pegar dados por meio do req.body e req.params
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

  //Rotas
  //Retorna valores do banco ordenados pela data descrescente, renderiza a home.hbs e mostra status da conexão com bd
app.get('/', function(req, res){
  Mensagem.findAll({order: [['createdAt', 'DESC']]}).then(function(listademensagens){
    res.render('home',{lista: listademensagens, conexaobd: conexaobd})
  })
})
  //Faz o cadastro de mensagem e redireciona para a home
app.post('/cadastro', function(req, res){
  Mensagem.create({
    mensagem: req.body.mensagem
  }).then(function(){
    res.redirect('/')
  }).catch(function(erro){
    res.send ("Falha no cadastro da mensagem: "+erro)
  })
})
  //Apaga registro com base no id do bd e retornar para a home
app.get('/apagar/:id', function(req, res){
  Mensagem.destroy({where: {'id': req.params.id}}).then(function(){
    res.redirect('/')
  }).catch(function(erro){
    res.send ("Falha no cadastro da mensagem: "+erro)
  })
})

app.listen(8081, function(){
  conexaobd = 'ok'; //Altera status da conexão
  console.log(conexaobd)
});