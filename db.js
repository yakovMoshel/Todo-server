const mongoose = require('mongoose');

const mongo_Url='mongodb+srv://test:1234@cluster0.onb7tvx.mongodb.net/yakov?retryWrites=true&w=majority'

function conncet() {
    try {
        mongoose.connect(mongo_Url)
        .then(()=>{console.log("Connect-success")})
    }
    catch (err) {
        console.log("mongoose DB error: ", err);
    }
}

module.exports = {conncet}