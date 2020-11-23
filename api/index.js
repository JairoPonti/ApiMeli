const express = require('express');
const cors = require('cors');
const server = express();
const fetch = require("node-fetch");


server.use(cors());


server.get(`/api/search`, (req, res) => {
    console.log(req.query.q)
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q)
        .then((res) => res.json())
        .then((data) => {
            res.send(data)
        })
});


server.listen(3003, ()=> {
    console.log ('%s listening at 3003')
});