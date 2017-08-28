
class DataBaseCore {
    constructor(){
    
      this.sql =  require('mssql');
      this.config = {
        user: 'nodejs',
        password: '6,PPzr@@123456',
        server: 'localhost\\SQLEXPRESS', 
        database: 'practica' 
       };
    }

    
    
    ExcuteQuery (query)  {
        var sql = this.sql;
        var scope = this;
        var data =[];

        return  new Promise(function(resolve, reject){

            scope.con(function(){
                var request = new  sql.Request();
                request.query(query, function (err, recordset) {
                       
                    if (err) console.log(err)
                    // send records as a response
                    sql.close();
                 
                        resolve(recordset);
                    

                    });
            });

        });
   
    }

    con(callback){   
        var scope = this;     
        return scope.sql.connect(this.config, function (err) {
                if (err) console.log(err);
                callback();
        });
                
    }

}
 


module.exports = DataBaseCore;