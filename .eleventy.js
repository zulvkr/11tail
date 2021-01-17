module.exports = function (config) {

    config.setUseGitIgnore(false);

    config.addWatchTarget("src/_tmp/style.css");

    if (!process.env.ELEVENTY_PRODUCTION) 
    {
      config.addPassthroughCopy({ "src/_tmp/style.css": "./style.css" });
    }

    return {
          dir: {
          input: "src"
        }
      };
}