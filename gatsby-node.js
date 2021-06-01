const fetch = require(`node-fetch`);
const jsdom = require("jsdom");

const getYouTubeVideos = async ({
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
  const thumbnails =
    dom.window.document.getElementsByTagName("media:thumbnail");
  const videos = dom.window.document.querySelectorAll("entry > link");
  const data = [];
  for (let index = 0; index < videos.length; index++) {
    const element = videos[index];
    data.push({
      title: titles[index].textContent,
      url: element.getAttribute("href"),
      thumbnail: thumbnails[index].getAttribute("url"),
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

const getBlogPosts = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) => {
  const { JSDOM } = jsdom;
  const response = await fetch("https://girgetto-io.netlify.app/rss.xml");
  const body = await response.text();
  const dom = new JSDOM(body, {
    contentType: "text/xml",
    storageQuota: 10000000,
  });
  const titles = dom.window.document.getElementsByTagName("title");
  const urls = dom.window.document.getElementsByTagName("link");
  const data = [];
  for (let index = 0; index < titles.length; index++) {
    const element = titles[index];
    data.push({
      title: element.textContent,
      url: urls[index].textContent,
    });
  }

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    createNode({
      ...element,
      id: createNodeId(`blog-post-${index}`),
      parent: null,
      children: [],
      internal: {
        type: `blogPosts`,
        content: JSON.stringify(element),
        contentDigest: createContentDigest(element),
      },
    });
  }
};

exports.sourceNodes = async (props) => {
  await getYouTubeVideos(props);
  await getBlogPosts(props);
};
