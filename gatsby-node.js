const fetch = require(`node-fetch`);
const jsdom = require("jsdom");

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) => {
  const { JSDOM } = jsdom;
  const response = await fetch(
    "https://www.youtube.com/feeds/videos.xml?channel_id=UChqlNb3LpXclrYsIXzD2q_w"
  );
  const body = await response.text();
  const dom = new JSDOM(body, {
    contentType: "text/xml",
    storageQuota: 10000000,
  });
  const titles = dom.window.document.getElementsByTagName("media:title");
  const thumbnails = dom.window.document.getElementsByTagName("media:thumbnail");
  const videos = dom.window.document.querySelectorAll("entry > link");
  const data = [];
  for (let index = 0; index < videos.length; index++) {
    const element = videos[index];
    data.push({
      title: titles[index].textContent,
      url: element.getAttribute("href"),
      thumbnail: thumbnails[index].getAttribute("url")
    });
  }

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    createNode({
      ...element,
      id: createNodeId(`you-tube-${index}`),
      parent: null,
      children: [],
      internal: {
        type: `youTubeVideos`,
        content: JSON.stringify(element),
        contentDigest: createContentDigest(element),
      },
    });
  }
};
