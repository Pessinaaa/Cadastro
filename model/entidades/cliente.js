// cliente.js
const Sequelize = require('sequelize')
const sequelize = require('./dborm')
const Cliente = database.sequelize.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER
    },
    endereco: Sequelize.STRING
})

module.exports = {Cliente}