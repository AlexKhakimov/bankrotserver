module.exports = {
  apps: [
    {
      name: "server",
      script: "./index.ts", // Указываем .ts файл
      interpreter: "/usr/local/bin/ts-node",
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
