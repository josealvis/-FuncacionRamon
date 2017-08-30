var admin = require('firebase-admin');


var serviceAccount = require("./key/key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sample-31b6b.firebaseio.com"
});




// Get a database from https://sample-31b6b.firebaseio.com/cliente
var db = admin.database();
var ref = db.ref("Participantes");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
