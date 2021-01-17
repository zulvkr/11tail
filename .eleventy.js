module.exports = function (eleventyConfig) {

  eleventyConfig.setUseGitIgnore(false);

  // Register Components as Shortcode
  eleventyConfig.addShortcode("Button", require('./src/_includes/components/attributes/Button.11ty'));
  eleventyConfig.addShortcode("Label", require('./src/_includes/components/attributes/Label.11ty'));
  eleventyConfig.addShortcode("TextForm", require('./src/_includes/components/attributes/Text.11ty'));
  eleventyConfig.addShortcode("Select", require('./src/_includes/components/attributes/Select.11ty'));

  eleventyConfig.addWatchTarget("src/_tmp/style.css");

  if (!process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addPassthroughCopy({ "src/_tmp/style.css": "./style.css" });
  }

  return {
    dir: {
      input: "src"
    }
  };
}