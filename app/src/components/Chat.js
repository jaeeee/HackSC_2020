import React from "react";
import { Chat, Channel, ChannelHeader, Window } from "stream-chat-react";
import {
  MessageList,
  MessageInput,
  MessageLivestream
} from "stream-chat-react";
import { MessageInputSmall, Thread } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

const chatClient = new StreamChat("4zbz7yw374h6");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGl2aW5lLWFydC05In0.0Ce-vmn7fcec-PCD2OWy3sIVRLrmKRhBXp69vSGlgtw";
let localChatToken = "";
let localChatname = "";
let localChatID = "";
let localChatImage = "";



chatClient.setUser(
  {
    id: localChatID,
    name: localChatname,
    image: localChatImage
  },
  localChatToken
);

const channel = chatClient.channel("livestream", "spacex", {
  image: "https://goo.gl/Zefkbx",
  name: "SpaceX launch discussion"
});


componentWillUnmount() {
  this._isMounted = false;
}

componentDidMount() {
  this._isMounted = true;

  let currentComp = this;

  fire.auth().onAuthStateChanged(function(user) {
    if (user) {
      var found = 0;
      var userRef = db.collection("users").doc(fire.auth().currentUser.email);
      var username = fire.auth().currentUser.email;
      userRef.onSnapshot(
        {
          includeMetadataChanges: true
        },
        function(doc) {
          try {


              localChatID = doc.data().chatID,
              localChatImage = doc.data().chatImage,
              localChatname =  doc.data().chatName,
              localChatToken = doc.data().chatToken,


          } catch (error) {
            console.log("We getting an error: ", error);
            found = 0;
          }
        }
      );

      if (found == 1) {
        //console.log("does hit this")
      } else {
        currentComp.setState({
          budget: ["N/A"]
        });
      }
    }
  });
};





const Chatter = () => (
  <Chat client={chatClient} theme={"livestream dark"}>
    <Channel channel={channel} Message={MessageLivestream}>
      <Window hideOnThread>
        <ChannelHeader live />
        <MessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
      <Thread fullWidth />
    </Channel>
  </Chat>
);

export default Chatter;
