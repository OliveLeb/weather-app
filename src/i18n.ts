import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  messages,
})

// Only if you want hot module replacement when translation message file change
if (import.meta.hot) {
  import.meta.hot.on('locales-update', (data) => {
    Object.keys(data).forEach((lang) => {
      i18n.global.setLocaleMessage(lang, data[lang])
    })
  })
}

export default i18n
