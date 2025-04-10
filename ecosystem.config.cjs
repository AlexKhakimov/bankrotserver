module.exports = {
  apps: [
    {
      name: "express-app",
      script: "index.js",
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
