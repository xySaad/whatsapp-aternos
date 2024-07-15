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
      console.log(typeof message.mentionedJidList);
      if (
        message.mentionedJidList.some((jid) => jid.includes("212665715774"))
      ) {
        client.sendMentioned(sender, "@everyone", sender);
        client.sendPhotoVideoViaTyping(
          sender,
          "https://www.youtube.com/watch?v=OO8c6EAePBs"
        );
      }

      break;
  }
};
export default handleMessages;
