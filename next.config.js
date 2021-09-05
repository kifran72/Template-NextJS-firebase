const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/react",
  "@fullcalendar/daygrid",
  "@fullcalendar/timegrid",
]);

module.exports = withTM({
  reactStrictMode: false,
  distDir: "functions/next",
});
