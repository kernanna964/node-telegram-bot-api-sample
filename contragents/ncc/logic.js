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
      case 'ncc':
        text = 'Выберите материалы НКК';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'ncc.info' }],
              [{ text: 'Логотипы', callback_data: 'ncc.logo' }],
              [{ text: 'Бланки', callback_data: 'ncc.blanks' }],
              [{ text: 'Презентации', callback_data: 'ncc.presentations' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return

      case 'ncc.info':
        text = data.ncc.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'ncc.logo':
        text = data.ncc.logo.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'ncc.blanks':
        text = data.ncc.blanks.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
		case 'ncc.presentations':
        text = 'Выберите презентации НКК';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Общие', callback_data: 'ncc.presentations.general' }, { text: 'Отраслевые', callback_data: 'ncc.presentations.industry' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return
      case 'ncc.presentations.general':
        text = data.ncc.presentations.general.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'ncc.presentations.industry':
        text = data.ncc.presentations.industry.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      default:
        return
    }
  });
}
