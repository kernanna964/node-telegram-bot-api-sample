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
      case 'ncc_me':
        text = 'Выберите материалы NCC ME';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'ncc_me.info' }],
              [{ text: 'Логотипы', callback_data: 'ncc_me.logo' }],
              [{ text: 'Бланки', callback_data: 'ncc_me.blanks' }],
              [{ text: 'Профайлы', callback_data: 'ncc_me.profiles' }],
              [{ text: 'Презентации', callback_data: 'ncc_me.presentations' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return

      case 'ncc_me.info':
        text = data.ncc_me.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'ncc_me.logo':
        text = data.ncc_me.logo.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'ncc_me.blanks':
        text = data.ncc_me.blanks.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'ncc_me.profiles':
        text = data.ncc_me.profiles.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
		case 'ncc_me.presentations':
        text = data.ncc_me.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      default:
        return
    }
  });
}
