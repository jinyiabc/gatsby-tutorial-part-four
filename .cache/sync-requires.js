// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/src/pages/my-files.js"))
}

exports.json = {
  "layout-index.json": require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/layout-index.json"),
  "pandas-and-bananas.json": require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/pandas-and-bananas.json"),
  "sweet-pandas-eating-sweets.json": require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/sweet-pandas-eating-sweets.json"),
  "dev-404-page.json": require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/dev-404-page.json"),
  "about.json": require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/about.json"),
  "index.json": require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/index.json"),
  "my-files.json": require("/Users/jinyi/Desktop/gatsby-tutorial-part-four/.cache/json/my-files.json")
}