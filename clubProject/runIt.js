var Metalsmith  = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');

Metalsmith(__dirname)         // __dirname defined by node.js:
                              // name of current working directory
  .metadata({                 // add any variable you want
                              // use them in layout, other plugins
    author: "Merhawi Gebre",
    myClass: "Web Development",
  })
  .source('./src')            // source directory
  .destination('./build')     // destination directory
  .clean(true)                // clean destination before
  .ignore("*.dat1")           // Use to ignore files and directories
  .use(markdown())

.use(layouts({
  default: "base.njk",
  directory: "./layouts",
  pattern: ["Patterns for what to put through the layout and what not to",
            "*.html", "!*.txt", "!*.css"]
}))
  .build(function(err) {      // build process
    if (err) throw err;       // error handling is required
  });