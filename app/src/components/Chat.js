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

chatClient.setUser(
  {
    id: "divine-art-9",
    name: "Divine art",
    image: "https://getstream.io/random_svg/?id=divine-art-9&name=Divine+art"
  },
  userToken
);

const channel = chatClient.channel("livestream", "spacex", {
  image: "https://goo.gl/Zefkbx",
  name: "SpaceX launch discussion"
});

const Chatter = () => (
<div
                 style={{
                   display: "flex",
                   justifyContent: "left",
                   alignItems: "center",
                  //  height: "vh",
                  //  width: "80vh"
                 }}
               >
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
  </div>
);

export default Chatter;
