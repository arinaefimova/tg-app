
import TelegramBot from 'node-telegram-bot-api';

const token = '7661095573:AAGWXACg21rDjE1n-yX0ERVsZ_upvEJJFRk'; // Вставьте ваш токен
const url = 'https://arinaefimova.github.io/tg-app/'; // Ваш URL
const bot = new TelegramBot(token, { webHook: true, polling: true });

// Установите webhook на ваш URL
bot.setWebHook(`${url}/bot${token}`);

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});
