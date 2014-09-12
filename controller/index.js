
var pkg = require('../package');

function controller( req, res ){
  res.json({
    name: pkg.name,
    version: {
      number: pkg.version
    }
  });
}

module.exports = controller;