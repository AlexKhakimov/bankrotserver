module.exports = {
  apps: [
    {
      name: "express-app",
      script: "index.ts", // Указываем .ts файл
      interpreter: "ts-node",
      instances: "max",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
      interpreter_args: "-r tsconfig-paths/register",
    },
  ],
};
