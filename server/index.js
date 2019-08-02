const app = require('./app');

const PORT = 3006;

module.exports = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
