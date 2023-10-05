const data = require('./data.json')

const abSort = (a, b) => a.localeCompare(b);

module.exports = (bot) => {
  // Handle callback queries
  bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    // const userOpts = {
    //   chat_id: msg.chat.id,
    //   message_id: msg.message_id,
    // };
    let text = 'Sorry, in progress...';
    let options
    switch(action) {
      case 'tops_bi':
        text = 'Выберите материалы Tops BI';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'tops_bi.info' }],
              [{ text: 'Логотипы', callback_data: 'tops_bi.logo' }],
              [{ text: 'Бланки', callback_data: 'tops_bi.blanks' }],
              [{ text: 'Профайлы', callback_data: 'tops_bi.profiles' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return

      case 'tops_bi.info':
        text = data.tops_bi.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: 'Markdown' });
        return
      case 'tops_bi.logo':
        text = data.tops_bi.logo.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'tops_bi.blanks':
        text = data.tops_bi.blanks.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'tops_bi.profiles':
        text = data.tops_bi.profiles.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      default:
        // bot.editMessageText(text, userOpts)
        return
    }
  });
}
