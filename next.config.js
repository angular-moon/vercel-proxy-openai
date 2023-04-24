module.exports = {
  async rewrites() {
    return [
      {
        source: "/:match*",
        destination: "https://api.openai.com/:match*",
      },
    ];
  },
};
