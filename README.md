# Hi, Thank You For Checking Out This Mini Project - Weather Forecast Application 

## About This Project:

What the application does: This is a simple Weather Forecast Application that was used to practiced API GET Requests and displaying them on the client's browser. 

Motivation Behind Creation: I wanted to learn and understand about making external GET Requests and then displaying these on the client's side.

How It Works:
1) Firstly, feel free to fork this repository and visit the OpenWeatherApi website ("https://openweathermap.org/api") and request your own API key.
2) Secondly, go to weatherApp.js and navigate to "const apiKey" and replace the "enter your API Key here" with your API key.
3) Thirdly, use Node.JS from the Terminal to run nodemon and execute the server by typing this in the Terminal: nodemon weatherApp.js 
4) Lastly, go onto your browser and type in "localhost:3000" to navigate to the localhost at the port 3000, and then type in the desired city (e.g. Tokyo).

Key Learning Points Included:
- The set-up for making external GET Requests through; understanding the requirement for the endpoint (URL that contains the information), path & parameters that is used to navigate to the data,
and lastly, the requirement of API Authentication through the use of API keys provided.
- Although, I used Node.js' standard HTTPS Method to retrieve API data, I will be looking to explore to more simple alternatives such as the package "GOT".
- Function(res) - This function is called when a successful connection is made.
- res.on("data", function(data)) - The on("data") function is called when a chunk of data is received.
- on("close") - This is called when a connection to an external API server is closed.
side.

Technologies Used: 
- HTML
- Node.js
- Express.js 
- Nodemon (Node Package) - Monitors changes in your sourcecode and automatically restarts server for faster local development.
- Body Parser (Node Package) - Used to parse incoming request bodies to allow for POST Requests to be made to the backend server.
- PostMan (External Desktop/Web Application) - An external manager that assists with keeping API keys & API endpoints, paths and parameters.


