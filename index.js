import venom from "venom-bot";
import handleMessages from "./Utils/handleMessages.js";
let client;

const botOwner = `${process.env.BOT_OWNER}@c.us`;

const start = async () => {
  client = await venom.create({ session: "aternos", headless: "new" });
  process.on("SIGINT", function () {
    client.close();
  });

  client.sendText(botOwner, "Bot Started");
  client.onMessage(handleMessages);
  // client.onMessage((msg) =>msg.id);
};

start();

export { client, botOwner };
