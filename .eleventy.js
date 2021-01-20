module.exports = function (eleventyConfig) {

  // Use .eleventyignore
  //
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addNunjucksShortcode(
    "Button", require('./src/_includes/components/attributes/Button.11ty'
    /* arguments: value */)
  );
  eleventyConfig.addNunjucksShortcode(
    "Label", require('./src/_includes/components/attributes/Label.11ty'
    /* arguments: forId */)  
  );
  eleventyConfig.addNunjucksShortcode(
    "Field", require('./src/_includes/components/attributes/Field.11ty'
    /* arguments: type, id, , name, placeholder, required */)
  );
  eleventyConfig.addNunjucksShortcode(
    "Select", require('./src/_includes/components/attributes/Select.11ty'
    /* arguments: id, name, required */)
  );

  // Trigger reload when CSS updated
  //
  if (!process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addWatchTarget("src/_tmp/style.css");
    eleventyConfig.addPassthroughCopy({ "src/_tmp/style.css": "./style.css" });
  }

  return {
    dir: {
      input: "src"
    }
  };
}