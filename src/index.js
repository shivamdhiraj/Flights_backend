const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    // bad code alert
 const {City , Airport} = require("./models");
 const city = await City.findByPk(1);
 console.log(city);

 //const airport = await Airport.create({name:'Ranchi' , code:'RNC1' , cityId:1 })
  
 const airport = await city.createAirport({name: 'Ranchi' , code:'RNC1'});
 console.log(airport);

 // This explains that sequelize gives us many api/functions that can make our life very easy.
 // so to use these functions steps are:-
 // first use as per your convinence
 // second if i am not getting correct response go check the implemtation first (Is the code implemented
 // according to you expectations or not). 

}); 
