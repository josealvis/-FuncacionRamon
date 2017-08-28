var DataBaseCore =  require('../core/databaseContext');

class PersonasRepo extends  DataBaseCore{
 
    constructor(){
        super();
    }

    getPersonaPorId(Id){
        if(isNaN(Id))
        return  new Promise((resolve, reject)=> reject("El valor no es valido."));

        return  this.ExcuteQuery("select * from personas where ID ="+Id )
                    .then(respon => respon.recordset[0]);
    }
}

module.exports = PersonasRepo;