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
      case 'systematica_consulting':
        text = 'Выберите материалы Систематика Консалтинг';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'systematica_consulting.info' }],
              [{ text: 'Логотипы', callback_data: 'systematica_consulting.logo' }],
              [{ text: 'Бланки', callback_data: 'systematica_consulting.blanks' }],
              [{ text: 'Профайлы', callback_data: 'systematica_consulting.profiles' }],
              [{ text: 'Презентации', callback_data: 'systematica_consulting.presentations' }],
              [{ text: 'Материалы', callback_data: 'systematica_consulting.materials' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return

      case 'systematica_consulting.info':
        text = data.systematica_consulting.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'systematica_consulting.logo':
        text = data.systematica_consulting.logo.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'systematica_consulting.blanks':
        text = data.systematica_consulting.blanks.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'systematica_consulting.profiles':
        text = data.systematica_consulting.profiles.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
case 'systematica_consulting.presentations':
        text = data.systematica_consulting.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      case 'systematica_consulting.materials':
        text = data.systematica_consulting.materials.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      default:
        return
    }
  });
}
