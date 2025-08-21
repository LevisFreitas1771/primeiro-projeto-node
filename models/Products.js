const db = require("./db")

const Product = db.sequelize.define("products", {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: db.Sequelize.DOUBLE,
        allowNull: false
    },
    description: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
});

Product.create({
    name: "RTX 4060",
    price: "3199.99",
    description: "Placa de Vídeo Nvidea"
})

Product.sync({force: false});
