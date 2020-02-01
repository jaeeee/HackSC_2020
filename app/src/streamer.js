const Mux = require('@mux/mux-node');
const express = require('express'); //returns a function which creates objects
const app = express()
// assuming process.env.MUX_TOKEN_ID and process.env.MUX_TOKEN_SECRET
// contain your credentials
const { Video, Data }  = new Mux();

// Create an asset
const asset = await Video.Assets.create({
  input: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4',
});
