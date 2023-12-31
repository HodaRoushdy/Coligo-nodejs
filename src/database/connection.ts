const mongoose = require("mongoose");
const url = process.env.MONGO_URL
export const connectedDB = mongoose.connect(url,
{useNewUrlParser:true,
useCreateIndex : true,
useFindAndModify:false,
useUnifiedTopology:true
    });

module.exports = {
    connectedDB
}