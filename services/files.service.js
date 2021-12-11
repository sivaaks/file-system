const fs=require('fs');

const files={

    async createFile(req,res){

        const date=new Date();
        const currentDateTime=`${date.getDay()}${date.getMonth()+1}${date.getFullYear()}-${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
        fs.writeFile(`./files/${currentDateTime}.txt`,`${(date.toLocaleDateString())} ${date.toLocaleTimeString()}`,function(err){
            if (err) return res.status(400).send(`Error creating file ${err}`);
            return res.status(200).send('File created successfully');
        });
    },

    async listFiles(req,res){

        const fileNames=[];
        fs.readdir('./files',(err,files)=>{
            files.forEach(file=>{
                fileNames.push(file);
                console.log(file);
            });
            return res.status(200).send(fileNames);
        })
        
    },

    async getFileContent(req,res){

        const fileName=req.params.name;
        fs.readFile(`./files/${fileName}`,'utf-8',(err,data)=>{
            if (err) return res.status(400).send(`Error reading file ${err}`);
            return res.status(200).send(data);
        })
        
    },

}

module.exports= files;