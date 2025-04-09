module.exports = {
  apps: [
    {
      name: "ts-express",
      script: "dist/index.js",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
