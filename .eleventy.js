//const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
//const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
const pluginRev = require("eleventy-plugin-rev");
const eleventySass = require("eleventy-sass");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");


module.exports = function(eleventyConfig) {


  // filter fpr Dates of the talks:
  eleventyConfig.addFilter("date", require("./src/filters/date.js"));

  // limit the amount of slides in sliders
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));



  // Generate the Sitemap

  eleventyConfig.addPlugin(sitemap, {
    lastModifiedProperty: "modified",
    sitemap: {
        hostname: "https://www.boldandfriendly.de",
    },
  });

    
  // New SASS Compiler as of 11ty 2.0 stable:

  eleventyConfig.addPlugin(pluginRev);
  eleventyConfig.addPlugin(eleventySass, {
    compileOptions: {
      permalink: function(contents, inputPath) {
        return (data) => data.page.filePathStem.replace(/^\/scss\//, "/css/") + ".css";
      }
    },
    sass: {
      style: "compressed",
      sourceMap: true
    },
    rev: true
  });

  // Include our static assets
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/humans.txt");
  eleventyConfig.addPassthroughCopy("src/files");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/icon.png");
  eleventyConfig.addPassthroughCopy("src/webmontag-bonn-social-image.jpg");
  eleventyConfig.addPassthroughCopy("src/browserconfig.xml");
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/img-talks");

  



  // Copy all the HTML files for now
  

  // limit filter
  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
      templateFormats: ["html", "md", "njk", "gif", "jpg", "svg", "png", "avif", "mp4"],
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      passthroughFileCopy: true,
  }

};
