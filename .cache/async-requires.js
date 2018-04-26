// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!D:\\temp\\tutorial-part-four\\.cache\\dev-404-page.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!D:\\temp\\tutorial-part-four\\src\\pages\\about.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!D:\\temp\\tutorial-part-four\\src\\pages\\index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!D:\\temp\\tutorial-part-four\\.cache\\json\\layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!D:\\temp\\tutorial-part-four\\.cache\\json\\dev-404-page.json"),
  "about.json": require("gatsby-module-loader?name=path---about!D:\\temp\\tutorial-part-four\\.cache\\json\\about.json"),
  "index.json": require("gatsby-module-loader?name=path---index!D:\\temp\\tutorial-part-four\\.cache\\json\\index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!D:/temp/tutorial-part-four/.cache/layouts/index.js")
}