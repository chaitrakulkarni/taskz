const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true

    },
    content: {
        type: String,
        required: true
    },
    start:{
        type: String,
        required: true
    },
    end:{
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }

} , {
    collection: "tasks",
    timestamps:true
})

module.exports = mongoose.model("Task", TaskSchema)