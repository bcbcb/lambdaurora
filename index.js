var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.AURORADB_INSTANCE_ADDRESS,
  user     : 'admin',
  password : 'PASSWORD_GOES_HERE',
  port     : process.env.AURORADB_INSTANCE_PORT
});

exports.handler = (event, context, callback) => {
  conosle.log('Lambda started')
  connection.query('show tables', function (error, results, fields) {
    if (error) {
      connection.destroy();
      throw error;
    } else {
      console.log('CONNECTED!')
      console.log(results);
      callback(error, results);
      connection.end(function (err) { callback(err, results);});
    }
  });
};
