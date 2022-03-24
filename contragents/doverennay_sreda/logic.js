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
      case 'doverennay_sreda':
        text = 'Выберите материалы Доверенная среда';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'doverennay_sreda.info' }],
              [{ text: 'Логотипы', callback_data: 'doverennay_sreda.logo' }],
              [{ text: 'Бланки', callback_data: 'doverennay_sreda.blanks' }],
              [{ text: 'Профайлы', callback_data: 'doverennay_sreda.profiles' }],
              [{ text: 'Презентации', callback_data: 'doverennay_sreda.presentations' }],
              [{ text: 'Материалы', callback_data: 'doverennay_sreda.materials' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return

      case 'doverennay_sreda.info':
        text = data.doverennay_sreda.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'doverennay_sreda.logo':
        text = data.doverennay_sreda.logo.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'doverennay_sreda.blanks':
        text = data.doverennay_sreda.blanks.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'doverennay_sreda.profiles':
        text = data.doverennay_sreda.profiles.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'doverennay_sreda.presentations':
        text = data.doverennay_sreda.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      case 'doverennay_sreda.materials':
        text = data.doverennay_sreda.materials.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      default:
        return
    }
  });
}
