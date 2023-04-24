module.exports = {
  async rewrites() {
    return [
      {
        source: "/api2/:path*",
        destination: "https://api.openai.com/:path*",
      },
    ];
  },
};
