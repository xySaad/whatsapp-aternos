const getServersList = async () => {
  const res = await fetch("https://aternos.org/servers/", {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9",
      priority: "u=0, i",
      "sec-ch-ua":
        '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      cookie: `ATERNOS_LANGUAGE=en; ATERNOS_SESSION=${process.env.ATERNOS_SESSION}`,
      Referer: "https://aternos.org/go/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  });

  const resText = await res.text();

  const htmlList = resText.matchAll(
    /<div class="servercard ([\S]*)"[\s]*data-id="([\S]*)" title="([\S]*)">/g
  );
  const listArray = [];
  Array.from(htmlList).forEach((match) =>
    listArray.push(`*Title:* ${match[3]}\n*Status:* ${match[1]}\n*ID:* ${match[2]}`)
  );
  let list = "";
  listArray.forEach(server => list += `\n_________\n${server}\n`)
  return list
};

export default getServersList;
