'use strict'
var express = require('express')
var bodyParser = require('body-parser');

var app = express();

var p =  __dirname + '/../angular-seed/app'


app.use('/',express.static(p))

// "/Users/Seba/PAGEART/angular2/server/../anular-seed/app"

app.use(bodyParser.json());


var books = [
    {
        id:0,
        author: 'AuthorA0',
        title: 'TitleT0',
        bookshops:['Empik1','Empik2','Empik3']
    },
    {
        id:1,
        author: 'AuthorA1',
        title: 'TitleT1',
        bookshops:['Empik1','Empik2','Empik3']
    }
]




app.get('/api/books',(req,res)=>{
    
    var b = []
    for(var i= 0;i<books.length;i++) {
        if(books[i]) b.push(books[i])
    }
    res.send(b)
})

app.get('/api/books/:id',(req,res)=>{
    let id  = req.params.id;
    res.send(books[id])
})

app.post('/api/books',(req,res)=>{
    let book  = req.body
    book.id = books.length
    books.push(book)
    res.send(book)
})

app.put('/api/books/:id',(req,res)=>{
    let id  = req.params.id
    let book = req.body
    books[id] = book
    res.send(book)
})

app.delete('/api/books/:id',(req,res)=>{
    let id  = req.params.id;
    books[id] = null   
    res.send(id)
})

app.listen(3000,() => {
    console.log('server is working')
})