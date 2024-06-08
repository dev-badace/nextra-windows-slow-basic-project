const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  // ... your Nextra config
});

module.exports = withNextra({
  // ... your Next.js config
});
