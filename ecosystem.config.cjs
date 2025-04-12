module.exports = {
  apps: [
    {
      name: "server",
      script: "./index.ts", // Указываем .ts файл
      interpreter: "/usr/local/bin/ts-node",
      interpreter_args: "-r ts-node/register tsconfig-paths/register", // Добавьте этот параметр
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
