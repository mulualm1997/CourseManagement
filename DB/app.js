var mongoose= require('mongoose')

const url = "mongodb+srv://lecture867:Aa123456!@cluster0.f5jos.mongodb.net/FinalProject?retryWrites=true&w=majority";
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true)
mongoose
.connect(url,{useNewUrlParser:true})
.catch(e=>{console.error('connection error',e.message)});

const db =mongoose.connection

module.exports = db