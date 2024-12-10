const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,  // Set default value to false
        required: false,
    },
}, {
    timestamps: true,  // Ensure that "timestamps" is correctly spelled
});

const TodoModel = mongoose.models.todo || mongoose.model('todo', Schema);

export default TodoModel;