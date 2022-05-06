//const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
//const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
//const pluginSass = require("eleventy-plugin-sass");
//const sitemap = require("@quasibit/eleventy-plugin-sitemap");


module.exports = function(eleventyConfig) {

   
  // Copy `js/` to `_site/js`
  eleventyConfig.addPassthroughCopy("FrontEnd/wmbn/js");
  //eleventyConfig.addPassthroughCopy("FrontEnd/wmbn/img");
  eleventyConfig.addPassthroughCopy("FrontEnd/wmbn/css");
  // Copy `img/` to `_site/img`
  
  eleventyConfig.addPassthroughCopy("files");
    

  // CSS is compiled via CodeKit – dont pass through!
  //eleventyConfig.addPassthroughCopy('css');

  // Copy `fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy('fonts');

  // exporting the manifest
  eleventyConfig.addPassthroughCopy("webmanifest");

  // Include our static assets
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("humans.txt");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("browserconfig.xml");
  eleventyConfig.addPassthroughCopy(".htaccess");

  // Copy all the HTML files for now
  

  // limit filter
  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  return {
      templateFormats: ["html", "md", "njk", "gif", "jpg", "svg", "png", "avif", "mp4"],
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      passthroughFileCopy: true,
  }

};
