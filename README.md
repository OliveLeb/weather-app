# Weather App

Personnal project to fecth weather from all over the world using Vue 3 + Ts + Vite and [Weather Api](https://www.weatherapi.com/)

## Setup

Make sure to install the dependencies

```bash
pnpm install
```

And copy the .env.example to .env

```bash
cp .env.example .env
```

### Weather Api

1. Create an account on [WeatherApi](https://www.weatherapi.com/)
2. Get an Api Key
3. fill VITE_WEATHER_API_KEY in the .env with it
4. fill VITE_WEATHER_URL in the .env with the url of the api you want to use

#### Todo

More options to come


# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
