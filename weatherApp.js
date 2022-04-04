const express = require('express')
const https = require('https')
const app = express()
const port = 3000

app.get('/', function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Tokyo, JP&lang=JA&appid=6d691e13a885d8d33c4b2c2bab3612bf&units=metric"

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data){
           const weatherData = JSON.parse(data);
           console.log(weatherData);
        })
    })
})

app.listen(port, function () {
    console.log('Server is running on port 3000');
})