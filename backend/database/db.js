const mongoose = require('mongoose');

const uri = "mongodb+srv://elif:elif@cluster0.fcfmpgh.mongodb.net/?retryWrites=true&w=majority";

const connection = () => {
          mongoose.connect(uri,{
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
          })
          .then(() =>console.log("Connected to MongoDB"))
          .catch(err => console.log(err));

}

module.exports = connection;