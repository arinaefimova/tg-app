import TelegramBot from 'node-telegram-bot-api';
// replace the value below with the Telegram token you receive from @BotFather
const token = '7661095573:AAGWXACg21rDjE1n-yX0ERVsZ_upvEJJFRk';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {


  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});