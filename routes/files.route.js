const route = require('express').Router();
const service= require('../services/files.service');

route.post('/',service.createFile);
route.get('/',service.listFiles);
route.get('/:name',service.getFileContent);

module.exports= route;
