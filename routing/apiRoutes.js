var friends = require("../app/data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
  var newUser = req.body;
  console.log(newUser);
  friendsArray.push(newUser);
  res.json(newUser);
  });

  app.post("/api/clear", function() {
    friendsData = [];
    console.log(friends);
  });
};
