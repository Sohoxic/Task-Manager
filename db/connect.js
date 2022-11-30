const mongoose = require('mongoose')

const connectionString='mongodb+srv://sohoxic:Piku@2411@cluster0.icr0bt8.mongodb.net/task-manager?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
