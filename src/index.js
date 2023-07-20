const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
     // bad code allert
    const {Airport , City} = require('./models');
//     const  DNS = await City.findByPk(1);
//   //  console.log(city);
//     //  const airport = await Airport.create({name: 'kempagodwa airport' , code: 'BLR' , cityId:42} );
//     //  console.log(airport);

//   // const respone = await city.createAirport({name: 'mesra airport' , code: 'MRA'});
//    const mesraAirport = await Airport.findByPk(16);
//    console.log(mesraAirport);
//    //await DNS.removeAirport(mesraAirport);
 await  City.destroy(
    {
        where:{
            id: 1,
        }
    }
 )
}); 
