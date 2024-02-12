const express = require('express')

const app = express()

//localhost:3000/
app.get('/',(req, res) =>{
    return res.status(200).json({
        message:"Hello world"
    })
   
})

const PORT=process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`App is working om port ${PORT}`)
})