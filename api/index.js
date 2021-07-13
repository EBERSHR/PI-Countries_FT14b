const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Country, Activity } = require('./src/db');
// const Activity = require('./src/models/Activity.js');
// const Country = require('./src/models/Country.js');


//https://vimeo.com/573149512/fec1765cd7

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {

    Activity.create(
      {name: "Pollito Amarillo"}
    );

    Country.create(
      {
        name: "Eber Hernández"
      }
    );

    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
