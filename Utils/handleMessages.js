import getServersList from "../Actions/serversList.js";
import { client, botOwner } from "../index.js";

const handleMessages = async (message) => {
  const msg = message?.body?.toLowerCase();
  const fromGrp = message.isGroupMsg;
  const sender = message.from;

  switch (msg) {
    case "hi":
      client.reply(sender, "sup", message.id);
      break;
    case "list":
      client.reply(sender, await getServersList(), message.id);
      break;
    default:
      switch (true) {
        case msg.mentionedJidList.includes("212665715774"):
          client.sendPhotoVideoViaTyping(
            sender,
            "https://www.youtube.com/watch?v=OO8c6EAePBs"
          );
          break;

        default:
          break;
      }
      fromGrp ? console.log(message) : null;
      break;
  }
};
export default handleMessages;