const { connect } = require("mongoose");

const uri = "mongodb+srv://shivkanya:TMQDC0OIgBdd8JcL@cluster0.cpfb1.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)