const { getYouTubeVideos } = require("./scripts/getYouTubeVideos");
const { getBlogPosts } = require("./scripts/getBlogPost");

exports.sourceNodes = async (props) => {
  await getYouTubeVideos(props);
  await getBlogPosts(props);
};
