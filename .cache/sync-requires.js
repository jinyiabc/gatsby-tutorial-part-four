// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("D:/temp/tutorial-part-four/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("D:\\temp\\tutorial-part-four\\.cache\\dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("D:\\temp\\tutorial-part-four\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\temp\\tutorial-part-four\\src\\pages\\index.js"))
}

exports.json = {
  "layout-index.json": require("D:\\temp\\tutorial-part-four\\.cache\\json\\layout-index.json"),
  "dev-404-page.json": require("D:\\temp\\tutorial-part-four\\.cache\\json\\dev-404-page.json"),
  "about.json": require("D:\\temp\\tutorial-part-four\\.cache\\json\\about.json"),
  "index.json": require("D:\\temp\\tutorial-part-four\\.cache\\json\\index.json")
}