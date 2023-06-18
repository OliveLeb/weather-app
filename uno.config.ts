import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['darkmode-color', 'color-black/80 dark:color-white/80'],
  ],
  presets: [
    presetUno(),

    presetIcons({
      scale: 1.5,
      warn: true,
    }),

    presetWebFonts({
      provider: 'google',
      fonts: {
        quicksand: 'Quicksand',
      },
    }),
  ],
})
