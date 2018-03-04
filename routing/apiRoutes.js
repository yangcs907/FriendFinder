var friends = require("../app/data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
  var newUser = req.body;
  console.log(newUser);
  friends.push(newUser);
  res.json(newUser);
  var newUserScore;
  var newUserName = newUser.nameInput;
  console.log(newUserName);
  newUserScoreArrary = [];
  newUserScoreArrary.push(newUser.scores);
  for (var i = 0; i < scores.length; i++) {
    newUserScore += parseInt(newUserScoreArrary.scores[i]);
    console.log(newUserScore);
  }
  });

  app.post("/api/clear", function() {
    friendsData = [];
    console.log(friends);
  });
};
