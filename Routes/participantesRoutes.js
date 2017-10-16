var express = require('express');
var presonasRepo =  require('../DataBase/repo/presonasRepo');
var __repo = new presonasRepo(); 

var routers = express.Router();

routers.get('/participante/:id', function(req, res){
      var id  = req.params.id;

     __repo.getPersonaPorId(id)
           .then(data =>{
               if(data) res.send(data);
               else res.send("No se econtraron registros.");
            })
           .catch(err => res.status(500).send(err));
 
 })

routers.post('/participante/', function(req, res){
      var personas  =  {nombre: req.query.persona};
      __repo.insertarPersona(personas)
      .then(data =>{
          if(data) res.send('registros Afectados: '+data);
          else res.send("No se econtraron registros.");
       })
      .catch(err => res.status(500).send(err));

})


routers.get('/participante/', function(req, res){
  let html =``;
  let personas  = [];           
             __repo.getPersonas()
             .then(data =>{
                 if(data){
                 /* personas = data ;
                  let rows='';
                  let x;
                  for(x=0; x < personas.length;x++){
                    rows += `<h3>Nombre</h3> ${personas[x].Nombre}</br>`; 
                  }

                  html = `<div>
                  <h2>Listado Personas</h2>
                  ${rows} 
                  </div>`*/
            
                 res.send(data);
               
                }
                 else res.send("No se econtraron registros.");
              })
             .catch(err => res.status(500).send(err));    

 

   
   })

module.exports = routers;