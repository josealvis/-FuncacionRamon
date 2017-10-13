var DataBaseCore =  require('../core/databaseContext');

class PersonasRepo extends  DataBaseCore{
 
    constructor(){
        super(require('../config'));
    }

    getPersonaPorId(Id){

        var Parameteres =[
            this.newSqlParameter('Id', this.sql.Int, Id)
        ];

        if(isNaN(Id))
        {
            return  new Promise((resolve, reject)=> reject("El valor no es valido."));
        } 
        else
        {
            return  this.ExcuteQuery(`select * from personas where ID = ${Id}`)
                        .then(respon => respon.recordset[0]);
        }
    }


}

module.exports = PersonasRepo;