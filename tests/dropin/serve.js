// Static server for the TodoMVC app — started once per run by the `webServer`
// entry in playwright.dropin.config.js (so parallel spec files never race to
// bind the port).
const http = require('http');
const handler = require('serve-handler');

const PORT = process.env.PORT_NUMBER || 8000;

http
  .createServer((req, res) => handler(req, res, { public: `${__dirname}/../..`, cleanUrls: true }))
  .listen(PORT, () => console.log(`TodoMVC served on http://localhost:${PORT}`));
