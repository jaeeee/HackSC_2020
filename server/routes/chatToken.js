var express = require('express');
var app = express();

const StreamChat = require('stream-chat').StreamChat
const uuidv4 = require('uuid/v4');


/*createNewToken = () => {
  const client = new StreamChat('7vymt35687z5', '{{ jgtefb5twrns3gp628wzw3qb9gvrmaxsp8hyuxdshd7kkgjzsvtkha5ens7vjqgg}}');
  var name = uuidv4();
  const tokn = client.createToken(name);
}*/

app.post("/", function(req, res, next) {
    const client = new StreamChat('7vymt35687z5', '{{ jgtefb5twrns3gp628wzw3qb9gvrmaxsp8hyuxdshd7kkgjzsvtkha5ens7vjqgg}}');
    var name = uuidv4();
    const tokn = client.createToken(name);
    res.json({
      chatToken : tokn
    });
    console.log(res);
    /*.then(muxResponse => {
      console.log("muxResponse", muxResponse);
      res.json({
        playbackid: muxResponse.playback_ids[0].id,
        stream_key: muxResponse.stream_key
      });
    })
    .catch(next);*/
});

module.exports = app;
