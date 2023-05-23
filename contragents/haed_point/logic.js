const data = require('./data.json')

function abSort(a, b) {
  return a.localeCompare(b);
}

module.exports = (bot) => {
  bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    let text = 'Sorry, in progress...';
    let options
    switch(action) {
      case 'haed_point':
        text = 'Выберите материалы HeadPoint';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'haed_point.info' }],
              [{ text: 'Логотипы', callback_data: 'haed_point.logo' }],
              [{ text: 'Бланки', callback_data: 'haed_point.blanks' }],
              [{ text: 'Профайлы', callback_data: 'haed_point.profiles' }],
              [{ text: 'Презентации', callback_data: 'haed_point.presentations' }],
              [{ text: 'Материалы', callback_data: 'haed_point.materials' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return

      case 'haed_point.info':
        text = data.haed_point.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'haed_point.logo':
        text = data.haed_point.logo.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'haed_point.blanks':
        text = data.haed_point.blanks.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'haed_point.profiles':
        text = data.haed_point.profiles.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
  case 'haed_point.presentations':
        text = data.haed_point.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'haed_point.materials':
        text = data.haed_point.materials.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      default:
        return
    }
  });
}
