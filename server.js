const express = require('express');
const app = express();

const port = 9000;

app.use(express.static(__dirname + '/public'))

app.get("/api/weather", function(req,res) {
    return res.json({"temperature": 30})
})

app.listen(port, () => { 
    console.log(`Слушаю порт ${port}`);
})