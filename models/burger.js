let orm = require("../config/orm");

let burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(name, cb) {
      orm.create("burgers", [
        "burger_name", "devoured"
      ], [
        name, false
      ], cb);
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, res => {
        cb(res);
    });
  }
};
  
// Export the database functions for the controller (burgersController.js).
module.exports = burger;
  