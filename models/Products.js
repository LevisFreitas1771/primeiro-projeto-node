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

Product.sync({force: false});
