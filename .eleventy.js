//const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
//const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
const pluginRev = require("eleventy-plugin-rev");
const eleventySass = require("eleventy-sass");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");


module.exports = function(eleventyConfig) {

   
  // Copy `js/` to `_site/js`
  eleventyConfig.addPassthroughCopy("FrontEnd/wmbn/js");
  //eleventyConfig.addPassthroughCopy("FrontEnd/wmbn/img");
  //eleventyConfig.addPassthroughCopy("FrontEnd/wmbn/css");
  eleventyConfig.addPassthroughCopy("FrontEnd/wmbn/fonts");
  // Copy `img/` to `_site/img`
  
  eleventyConfig.addPassthroughCopy("files");
    

  // CSS is compiled via CodeKit – dont pass through!
  //eleventyConfig.addPassthroughCopy('css');

  // Copy `fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy('fonts');

  // exporting the manifest
  eleventyConfig.addPassthroughCopy("webmanifest");


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
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("humans.txt");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("browserconfig.xml");
  eleventyConfig.addPassthroughCopy(".htaccess");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy("assets/js");

  



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
