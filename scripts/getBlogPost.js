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

export default getBlogPosts;
