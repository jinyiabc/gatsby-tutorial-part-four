// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/jinyi/Desktop/gatsby-tutorial-part-four/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/dev-404-page.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/jinyi/Desktop/gatsby-tutorial-part-four/src/pages/about.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/jinyi/Desktop/gatsby-tutorial-part-four/src/pages/index.js"),
  "component---src-pages-my-files-js": require("gatsby-module-loader?name=component---src-pages-my-files-js!/Users/jinyi/Desktop/gatsby-tutorial-part-four/src/pages/my-files.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/layout-index.json"),
  "pandas-and-bananas.json": require("gatsby-module-loader?name=path---pandas-and-bananas!/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/pandas-and-bananas.json"),
  "sweet-pandas-eating-sweets.json": require("gatsby-module-loader?name=path---sweet-pandas-eating-sweets!/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/sweet-pandas-eating-sweets.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/dev-404-page.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/about.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/index.json"),
  "my-files.json": require("gatsby-module-loader?name=path---my-files!/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/my-files.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/layouts/index.js")
}