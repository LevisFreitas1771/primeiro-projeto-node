const express = require("express");
const app = express();

const Product = require("./models/Products")

//Configurar body parses
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/register", function(req, res) {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    .then(function() {
        res.send("Product Register")
    })
    .catch(function(erro) {
        res.send("Product Not Register " + erro)
    })
})


app.get("/", function(req, res) {
    Product.findAll()
    .then(function(products) {
        res.send({products: products})
    })
    .catch(function(erro) {
        res.send("Erro to research products " + erro)
    })
})


app.get("/:name", function(req, res) {
    Product.findAll({where: {"name" : req.params.name}})
    .then(function(product) {
        res.send(product)
    })
    .catch(function(erro) {
        res.send("Product Don´t Exists")
    })
})

app.patch("/update/:id", function(req, res) {
    Product.update({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    },
        {where: {"id" : req.params.id}}
    )
    .then(function() {
        res.send("Product Updated")
    })
    .catch(function(erro) {
        res.send("Error to Update Product " + erro)
    })
});

app.delete("/delete/:id", function(req, res) {
    Product.destroy({where: {"id" : req.params.id}})
    .then(function() {
        res.send("Deleted Product With Success")
    })
    .catch(function(erro) {
        res.send("Erro to delete Product " + erro)
    })
})

app.listen(8081, function(){
    console.log("Server is running")
});