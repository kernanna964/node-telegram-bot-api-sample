const TelegramBot = require('node-telegram-bot-api')
const path = require('path')
const axios = require('axios')
const { Base64 } = require('js-base64')

const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  require('dotenv').config({ path: path.join(__dirname, './.dev.env') })
} else {
  require('dotenv').config({ path: path.join(__dirname, './.prod.env') })
}

// Middlewares (contragents & etc.):
const withLabLogic = require('./lab/logic')
const withGcsLogic = require('./contragents/gcs/logic')
const withSystematicaLogic = require('./contragents/systematica/logic')
const withStepLogicLogic = require('./contragents/step_logic/logic')
const withHaedPointLogic = require('./contragents/haed_point/logic')
const withLandataLogic = require('./contragents/landata/logic')
const withEnsysLogic = require('./contragents/ensys/logic')
const withRstLogic = require('./contragents/rst/logic')
const withSystematicaConsultingLogic = require('./contragents/systematica_consulting/logic');
const withDoverennayaSredaLogic = require('./contragents/doverennay_sreda/logic');
const withTopsBILogic = require('./contragents/tops_bi/logic');
const withLanmaxLogic = require('./contragents/lanmax/logic');
const withSystematicaBelLogic = require('./contragents/systematica_bel/logic');
const withNccLogic = require('./contragents/ncc/logic');
const withAquariusLogic = require('./contragents/aquarius/logic');
const withNationalPlatformLogic = require('./contragents/national_platform/logic');
const withNccMeLogic = require('./contragents/ncc_me/logic');
const withTest = require('./contragents/test/logic')
// Others...

const usersMap = new Map()
const { TG_BOT_TOKEN } = process.env
const bot = new TelegramBot(TG_BOT_TOKEN, { polling: true })

bot.on('new_chat_members', (msg) => {
  bot.sendMessage(msg.chat.id, 'Добрый день! Я с радостью пришлю Вам все необходимые материалы, но для начала работы напишите мне Baza');
});
bot.onText(/\/start/, function(msg) {
  const opts = {
    reply_markup: JSON.stringify({
      keyboard: [
        [{ text: 'Menu' }],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    }),
  };
  bot.sendMessage(msg.chat.id, 'Чем могу помочь?', opts);
})

bot.onText(/(\/menu|Menu|menu|\/baza|Baza|gcs)/, function(msg) {
  const options = {
    reply_markup: JSON.stringify({
   inline_keyboard: [
        [{ text: 'НКК', callback_data: 'ncc' }],
        [{ text: 'ГКС', callback_data: 'gcs' }, { text: 'Систематика', callback_data: 'systematica' }],
        [{ text: 'HeadPoint', callback_data: 'haed_point' }, { text: 'Landata', callback_data: 'landata' }],
        [{ text: 'Энсис Технологии', callback_data: 'ensys' }, { text: 'Систематика Консалтинг', callback_data: 'systematica_consulting' }],
        [{ text: 'Триафлай', callback_data: 'doverennay_sreda' }, { text: 'ТопС Бизнес Интегратор', callback_data: 'tops_bi' }],
        [{ text: 'Продукты и компетенции', callback_data: 'lanmax' }, { text: 'STEP LOGIC', callback_data: 'step_logic' }],
        [{ text: 'РСТ-Инвент', callback_data: 'rst' }, { text: 'Национальная платформа', callback_data: 'national_platform' }],        
       // [{ text: 'НЭП', callback_data: 'nap' }, { text: 'СистематикаБел', callback_data: 'systematica_bel' }]
      ],
    })
  };
  
  bot.sendMessage(msg.chat.id, 'Выберите компанию:', options);
})
withLabLogic(bot, usersMap)
withGcsLogic(bot)
withSystematicaLogic(bot)
withStepLogicLogic(bot)
withHaedPointLogic(bot)
withLandataLogic(bot)
withEnsysLogic(bot)
withRstLogic(bot)
withSystematicaConsultingLogic(bot)
withDoverennayaSredaLogic(bot)
withTopsBILogic(bot)
withLanmaxLogic(bot)
withSystematicaBelLogic(bot)
withNccLogic(bot)
withNccMeLogic(bot)
withAquariusLogic(bot)
withNationalPlatformLogic(bot)
withTest(bot)
