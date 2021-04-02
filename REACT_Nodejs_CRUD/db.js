const { json } = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/postManagerDB',{useNewUrlParser:true,useUnifiedTopology:true},

     err => {
       if(!err)
       console.log('Mongodb connection succeeded.')
       else
       console.log('Error while connecting MongoDB : ' + json.stringify(err,undefined,2))
     }

)