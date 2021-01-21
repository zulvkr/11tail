const inspect = require("util").inspect;

module.exports = function (eleventyConfig) {

  // Use .eleventyignore
  //
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addShortcode(
    "Button", require('./src/_includes/components/attributes/Button.11ty')
    /* arguments: value */
  );
  eleventyConfig.addShortcode(
    "Label", require('./src/_includes/components/attributes/Label.11ty')
    /* arguments: forId */
  );
  eleventyConfig.addShortcode(
    "Text", require('./src/_includes/components/attributes/Text.11ty')
    /* arguments: id, name, placeholder, required:bool */
  );
  eleventyConfig.addShortcode(
    "Select", require('./src/_includes/components/attributes/Select.11ty')
    /* arguments: id, name, required:bool */
  );
  eleventyConfig.addShortcode(
    "SelectField", require('./src/_includes/components/SelectField.11ty')
    /* arguments: id, name, required:bool, ...options */
  );
  eleventyConfig.addPairedShortcode(
    "FieldGroup", require('./src/_includes/components/FieldGroup.11ty')
    /* arguments: content, id, name */
  );


  // Trigger reload when CSS updated
  //
  if (!process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addWatchTarget("src/_tmp/style.css");
    eleventyConfig.addPassthroughCopy({ "src/_tmp/style.css": "./style.css" });
  }

  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  return {
    dir: {
      input: "src"
    }
  };
}