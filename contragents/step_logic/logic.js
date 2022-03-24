const data = require('./data.json')

const abSort = (a, b) => a.localeCompare(b);

module.exports = (bot) => {
  bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    let text = 'Sorry, in progress...';
    let options
    switch(action) {
      case 'step_logic':
        text = 'Выберите материалы STEP LOGIC';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'step_logic.info' }],
              [{ text: 'Логотипы', callback_data: 'step_logic.logo' }],
              [{ text: 'Профайлы', callback_data: 'step_logic.profiles' }],
              [{ text: 'Презентации', callback_data: 'step_logic.presentations' }],
              [{ text: 'Материалы', callback_data: 'step_logic.materials' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return

      case 'step_logic.info':
        text = data.step_logic.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'step_logic.logo':
        text = data.step_logic.logo.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'step_logic.profiles':
        text = data.step_logic.profiles.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'step_logic.presentations':
        text = data.step_logic.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'step_logic.materials':
        text = data.step_logic.materials.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      default:
        return
    }
  });
}
