const pg = require('pg');

pg.defaults.ssl = true;

var config = {
    connectionString: process.env.DATABASE_URL,
    max: 4,
    idleTimeoutMillis: 30000
}

var pool = new pg.Pool(config)


pool.connect(function (err, client, done) {
  if(err) {
    process.exit(1);
  } else {
    client.query("INSERT INTO testuser VALUES('user1')", function (err, result) {
      console.log("inserted");
    });
  }
});

