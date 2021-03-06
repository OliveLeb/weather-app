<template>

    <main :class="[weather && weather.current.temp_c > 20 ? 'warm' : null]">
      <div>

        <LangSelect />

        <div class="search-box">
          <input type="text" class="search-bar" :placeholder="t('home.search')" v-model="query" @keypress="fetchWeather">
        </div>

        <template v-if="weather">
        <div class="weather-wrap" v-if="weather">
          <div class="location-box">
            <div class="location"> 
              <p>{{ weather.location.name }}, </p>
              <p>{{ weather.location.country }}</p>
            </div>
            <div class="date"> {{  weather.location.localtime }} </div>
          </div>

          <div class="weather-box">
            <div class="temp">  {{ Math.round(weather.current.temp_c) }}°c </div>

            
            <div class="weather"> 
              <img :src="weather.current.condition.icon" alt="">
              <p>{{ weather.current.condition.text }} </p>
            </div>
          </div>
        </div>

        <div v-else>
          {{ weather.message }}
        </div>

        </template>

        <TheFooter :timeAgo="timeAgo" />
      </div>
    </main>

</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
import { usePreferredLanguages } from '@vueuse/core'
import { useWeather } from './composables/useWeather';
import LangSelect from './components/LangSelect.vue';
// import { useTimeAgo } from '@vueuse/core';
import TheFooter from './components/TheFooter.vue';

const languages = usePreferredLanguages()

const { locale, t } = useI18n()
locale.value = languages.value[0]

const query = ref<String>('');
const weather = ref()
const timeAgo = ref()

watch(locale, async ()=> {
  if(!query.value) return
  weather.value = await useWeather(query.value, locale.value)
  // const time = useTimeAgo(Date.now())
  // timeAgo.value = time.value
  
})

const fetchWeather = async (e:KeyboardEvent) => {
  if(e.key != 'Enter') return
  weather.value = await useWeather(query.value, locale.value)
  // const time = useTimeAgo(Date.now())
  // timeAgo.value = time.value
}

const dateBuilder  = ():String => {
  let d = new Date();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
body {
  font-family: 'montserrat', sans-serif;
  background: #191919;
}
main {
  background-image: url('./assets/images/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  margin: auto;
  max-width: 500px;
}
main.warm {
  background-image: url('./assets/images/warm-bg.jpg');
}
main>div {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  position: relative;
}
.search-box {
  width: 100%;
  margin-bottom: 30px;
}
.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  
  color: #313131;
  font-size: 20px;
  appearance: none;
  border:none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.location-box .location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

</style>

