module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://api.openai.com/:path*",
      },
    ];
  },
};
