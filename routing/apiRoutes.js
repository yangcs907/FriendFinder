var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
  // something goes here...
  });

  app.post("/api/clear", function() {
    friendsData = [];
    console.log(friendsData);
  });
};
