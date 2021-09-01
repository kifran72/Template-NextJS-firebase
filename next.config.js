const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/react",
  "@fullcalendar/daygrid",
]);

module.exports = withTM({
  reactStrictMode: false,
  distDir: "functions/next",
});
