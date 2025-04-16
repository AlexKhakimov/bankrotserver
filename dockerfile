# Используем официальный образ Node.js
FROM node:18-alpine

# Создаем директорию приложения
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Открываем порт, на котором работает приложение
EXPOSE 3000

# Команда для запуска приложения
CMD ["node", "start"]  