module.exports = {
  async rewrites() {
    return [
      {
        source: "/chat/:match*",
        destination: "https://chat.openai.com/:match*",
      },
      {
        source: "/api/:match*",
        destination: "https://api.openai.com/:match*",
      },
    ];
  },
};
