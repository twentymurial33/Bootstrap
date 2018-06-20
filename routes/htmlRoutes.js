var path =require("path");
module.exports = function(app) {

    app.get("/main", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/main.html"));
    });
  
    app.get("/Portfolio", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/Portfolio.html"));
    });

    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });
    app.get("/Contact", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/Contact.html"));
    });
  };