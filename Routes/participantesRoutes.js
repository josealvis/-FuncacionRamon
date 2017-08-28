var express = require('express');
var presonasRepo =  require('../DataBase/repo/presonasRepo');
var __repo = new presonasRepo(); 


var routers = express.Router();

routers.get('/participante/:id', function(req, res){
      var id  = req.params.id;

     __repo.getPersonaPorId(id)
           .then(data =>{
               if(data) res.send(data);
               else res.send("No se econtraro registros.");
            })
           .catch(err => res.status(500).send(err));
           
    
 
 })

routers.put('/participante', function(req, res){
   
  

})

module.exports = routers;