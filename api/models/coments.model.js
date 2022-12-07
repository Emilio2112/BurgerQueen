const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    Comentario:{
        type: Array,
        required:true
    },
    Foto:{
        type: String
    }

})

module.exports = commentsSchema