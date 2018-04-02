const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function createDocument() {
  const document = JSDOM(undefined);
  const window = document.defaultView;
  global.document = document;
  global.window = window;

  Object.keys(window).forEach((key) => {
    if (!(key in global)) {
      global[key] = window[key];
    }
  });

  return document;
}

export default createDocument;