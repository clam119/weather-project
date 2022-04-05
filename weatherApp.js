const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({
    extended: true
}))
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {

    const query = req.body.cityName;
    const apiKey = "enter your API key here";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;


    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const iconImageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png" //String concactenation to create iconImageUrl to callback.
            res.write("<h1>The temperature in " + query + " is " + temperature + " degrees celcius.</h1>");
            res.write("The weather is currently " + description);
            res.write("<img src=" + iconImageUrl + ">"); //Img's self-closing tag, so concactenate img code with iconImageUrl.
            res.send();
        })
    })
})




app.listen(port, function () {
    console.log('Server is running on port 3000');
})