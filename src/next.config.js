module.exports = {
  async rewrites() {
    return [
      {
        source: "/webhp",
        destination: "https://www.google.com/webhp",
      },
      {
        source: "/api/:path*",
        destination: "https://api.openai.com/:path*",
      },
    ];
  },
};
