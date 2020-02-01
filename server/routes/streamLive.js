var express = require("express");
var app = express.Router();
const Mux = require('@mux/mux-node');

const  {Video, Data} = new Mux();

const asset  = await Vide.Assets.create({
  input: "",
});

app.get("/", function(req, res, next) {
    res.send("fDNFIAFMDI");
});


module.exports = app;
