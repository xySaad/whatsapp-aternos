import getServersList from "../Actions/serversList.js";
import { client, botOwner } from "../index.js";

const handleMessages = async (message) => {
  if (message.isGroupMsg === false) {
    switch (message.body.toLowerCase()) {
      case "hi":
        client.reply(message.from, "sup", message.id);
        break;
      default:
        break;
    }
  } else {
  }
  switch (message.body.toLowerCase()) {
    case "list":
      client.reply(message.from, await getServersList(), message.id);
      break;
    default:
      break;
  }
};
export default handleMessages;
