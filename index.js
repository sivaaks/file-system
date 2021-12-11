const express= require('express');
const cors=require('cors');

const filesRoute= require('./routes/files.route');

const app= express();
const PORT=3001;

(async()=>{
    
    try{

        app.use(cors({
            origin:['http://localhost:3000']
        }))
        app.use(express.json());
        
        app.use('/files',filesRoute);
        
        app.listen(process.env.PORT||PORT);

    } catch(err){
        console.log(`Error: ${err}`);
    }
})();




