const data = require('./data.json')

const abSort = (a, b) => a.localeCompare(b);

module.exports = (bot) => {
  // Handle callback queries
  bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    let text = 'Sorry, in progress...';
    let options
    switch(action) {
      case 'ensys':
        text = 'Выберите материалы Энсис';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'ensys.info' }],
              [{ text: 'Логотипы', callback_data: 'ensys.logo' }],
              [{ text: 'Бланки', callback_data: 'ensys.blanks' }],
              [{ text: 'Презентации', callback_data: 'ensys.presentations' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return

      case 'ensys.info':
        text = data.ensys.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'ensys.logo':
        text = data.ensys.logo.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'ensys.blanks':
        text = data.ensys.blanks.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'ensys.presentations':
        text = data.ensys.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      default:
        return
    }
  });
}
