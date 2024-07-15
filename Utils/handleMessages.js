import getServersList from "../Actions/serversList.js";
import { client, botOwner } from "../index.js";

const handleMessages = async (message) => {
  const body = message?.body?.toLowerCase();
  const fromGrp = message.isGroupMsg;
  const sender = message.from;

  switch (body) {
    case "hi":
      client.reply(sender, "sup", message.id);
      break;
    case "list":
      client.reply(sender, await getServersList(), message.id);
      break;
    default:
      switch (true) {
        case message.mentionedJidList.includes("212665715774"):
          client.reply(sender, "?", message.id)
          client.sendPhotoVideoViaTyping(
            sender,
            "https://www.youtube.com/watch?v=OO8c6EAePBs"
          );
          break;

        default:
          break;
      }
      break;
  }
};
export default handleMessages;
