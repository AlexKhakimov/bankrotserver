module.exports = {
  apps: [
    {
      name: "express-app",
      script: "server.js",
      instances: "max",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
    },
  ],
};
