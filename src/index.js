import venom from "venom-bot";
import handleMessages from "./Utils/handleMessages.js";
let client;

const botOwner = `${process.env.BOT_OWNER}@c.us`;

const start = async () => {
  client = await venom.create({
    session: "aternos",
    headless: "new",
  });

  setInterval(() => {
    client.sendText("212665715774@c.us", "alive");
  }, 20000);
  process.once("SIGINT", async () => {
    console.log("Closing client...");
    await client.sendText(botOwner, "Client Closed");
    await client.close();
    console.log("Client closed.");
    process.exit(0); // Exit the process after closing the client
  });

  client.sendText(botOwner, "Bot Started");
  client.onMessage(handleMessages);
  // client.onMessage((msg) =>msg.id);
};

start();

export { client, botOwner };
