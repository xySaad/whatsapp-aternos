import venom from "venom-bot";

const start = async () => {
  const client = await venom.create({ session: "aternos" });
  const handleReceivedMessage = async (message) => {
    if (message.body === "Hi" && message.isGroupMsg === false) {
      const messageSent = await client.sendText(
        message.from,
        "Alo ra lbot 5dam, safi 4ayrha"
      );
    //   console.log(messageSent);
    }
  };
  client.onMessage(handleReceivedMessage);
};

start();
