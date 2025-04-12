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
      port: 5000,
      env: {
        NODE_ENV: "production",
        TS_NODE_PROJECT: "./tsconfig.json",
        PORT: 5000,
      },
      interpreter_args: "-r tsconfig-paths/register",
    },
  ],
};
