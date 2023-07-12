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
      case 'gcs':
        text = 'Выберите направление';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'ГКС', callback_data: 'gcs.main' }],
              [{ text: 'Комплексная безопасность', callback_data: 'gcs.dcsb' }],
              [{ text: 'Цифровизация предприятий', callback_data: 'gcs.pp' }],
              [{ text: 'PLM-технологии', callback_data: 'gcs.plm' }],
	 [{ text: 'Облако.ру', callback_data: 'gcs.oblako' }]
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return

      // 1. GCS MAIN
      case 'gcs.main':
        text = 'Выберите материалы ГКС';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [
                { text: 'Информационный блок', callback_data: 'gcs.main.info' },
                { text: 'Логотипы', callback_data: 'gcs.main.logo' }
              ],
              [{ text: 'Бланки', callback_data: 'gcs.main.blanks' }],
              [{ text: 'Профайлы', callback_data: 'gcs.main.profiles' }],
              [{ text: 'Презентации', callback_data: 'gcs.main.presentations' }],
              [{ text: 'Буклеты', callback_data: 'gcs.main.buklets' }],
              [{ text: 'Структура', callback_data: 'gcs.main.structure' }],
              [{ text: 'Материалы', callback_data: 'gcs.main.materials' }],
              [{ text: 'Compliance', callback_data: 'gcs.main.compliance' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return
      case 'gcs.main.logo':
        text = data.gcs.main.logo.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.main.info':
        text = data.gcs.main.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.main.blanks':
        text = data.gcs.main.blanks.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.main.profiles':
        text = data.gcs.main.profiles.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.main.presentations':
        text = data.gcs.main.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.main.buklets':
        text = data.gcs.main.buklets.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.main.structure':
        text = data.gcs.main.structure.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.main.materials':
        text = data.gcs.main.materials.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.main.compliance':
        text = data.gcs.main.compliance.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      // 2. DCSB
      case 'gcs.dcsb':
        text = 'Выберите материалы Комплексная безопасность';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'gcs.dcsb.info' }],
              [{ text: 'Профайлы', callback_data: 'gcs.dcsb.profiles' }],
              [{ text: 'Презентации', callback_data: 'gcs.dcsb.presentations' }],
              [{ text: 'Материалы', callback_data: 'gcs.dcsb.materials' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return
      case 'gcs.dcsb.info':
        text = data.gcs.dcsb.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.dcsb.profiles':
        text = data.gcs.dcsb.profiles.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.dcsb.presentations':
        text = data.gcs.dcsb.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.dcsb.materials':
        text = data.gcs.dcsb.materials.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      // 3. PP
      case 'gcs.pp':
        text = 'Выберите материалы ПП';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'gcs.pp.info' }],
              [{ text: 'Презентации', callback_data: 'gcs.pp.presentations' }],
              [{ text: 'Материалы', callback_data: 'gcs.pp.materials' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return
      case 'gcs.pp.info':
        text = data.gcs.pp.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.pp.presentations':
        text = data.gcs.pp.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.pp.materials':
        text = data.gcs.pp.materials.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

   // 4. PLM
      case 'gcs.plm':
        text = 'Выберите материалы PLM';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'gcs.plm.info' }],
              [{ text: 'Презентации', callback_data: 'gcs.plm.presentations' }],
              [{ text: 'Материалы', callback_data: 'gcs.plm.materials' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return
      case 'gcs.plm.info':
        text = data.gcs.plm.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.plm.presentations':
        text = data.gcs.plm.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.plm.materials':
        text = data.gcs.plm.materials.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
		
		 // 5. oblako
      case 'gcs.oblako':
        text = 'Выберите материалы Облако.ру';
        options = {
          reply_markup: JSON.stringify({
            inline_keyboard: [
              [{ text: 'Информационный блок', callback_data: 'gcs.oblako.info' }],
              [{ text: 'Логотипы', callback_data: 'gcs.oblako.logo' }],
              [{ text: 'Бланки', callback_data: 'gcs.oblako.blanks' }],			  
              [{ text: 'Презентации', callback_data: 'gcs.oblako.presentations' }],
              [{ text: 'Материалы', callback_data: 'gcs.oblako.materials' }],
            ]
          })
        };
        bot.sendMessage(msg.chat.id, text, options);
        return
      case 'gcs.oblako.info':
        text = data.gcs.oblako.info.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.oblako.logo':
        text = data.gcs.oblako.logo.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.oblako.blanks':
        text = data.gcs.oblako.blanks.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return		
      case 'gcs.oblako.presentations':
        text = data.gcs.oblako.presentations.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return
      case 'gcs.oblako.materials':
        text = data.gcs.oblako.materials.sort(abSort).join('\n\n');
        bot.sendMessage(msg.chat.id, text, { parse_mode: "Markdown" });
        return

      default:
        return
    }
  });
}
