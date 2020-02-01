var express = require("express");
var app = express.Router();
const Mux = require("@mux/mux-node");
const MUX_TOKEN_ID = "7d5c07fb-dab4-4784-b353-b4b337c39355";
const MUX_TOKEN_SECRET =
  "GWvsq958vsvkWwZr6uySoILhfKH6AoVP/Ti8spZ7b9+RqNvhpt9UsSAmkFEqTefoE9IJmwmF3id";
const { Video, Data } = new Mux(MUX_TOKEN_ID, MUX_TOKEN_SECRET);

// const asset  = await Vide.Assets.create({
//   input: "",
// });

app.post("/", function(req, res, next) {
  console.log("suh dude");
  Video.LiveStreams.create({
    playback_policy: "public",
    new_asset_settings: { playback_policy: "public" }
  })
    .then(muxResponse => {
      console.log("muxResponse", muxResponse);
      res.json({
        playbackid: muxResponse.playback_ids[0].id,
        stream_key: muxResponse.stream_key
      });
    })
    .catch(next);
});

module.exports = app;
