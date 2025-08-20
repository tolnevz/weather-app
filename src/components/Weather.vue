<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useWeather } from '../composables/useWeather';
  import { Tab } from '../models';
  import DayForecast from './DayForecast.vue';
  import PopularCities from './PopularCities.vue';
  import WeekForecast from './WeekForecast.vue';

  const { forecast } = useWeather();
  const cities = ref(forecast.value);
  const selectedCity = ref(cities.value[0]);
  const tab = ref(Tab.Main);

  const weekDay = computed(() => {
    return new Date(selectedCity.value.now.datetime).toLocaleString('ru', { weekday: 'long' });
  });

  const date = computed(() => {
    return new Date(selectedCity.value.now.datetime).toLocaleString('ru', { day: 'numeric', month: 'long' });
  });

  const popularCities = computed(() => {
    let arr = cities.value.filter(city => city.popular && city.id !== selectedCity.value.id);
    return arr.length > 5 ? arr.slice(0, 5) : arr;
  });
</script>

<template>
  <div class="container">
    <section class="topbar">
      <div class="tabs">
        <button class="tab" :class="{ active: tab === Tab.Main }" @click="tab = Tab.Main"> Главная </button>
        <button class="tab" :class="{ active: tab === Tab.Week }" @click="tab = Tab.Week">Погода за неделю</button>
      </div>

      <div class="city-select">
        <select v-model="selectedCity">
          <option v-for="city in cities" :key="city.id" :value="city">{{ city.name }}</option>
        </select>
      </div>
    </section>

    <section class="hero">
      <h1 class="title">Погода в городе {{ selectedCity.name }}</h1>
      <p class="date">{{ weekDay }}, {{ date }}</p>
    </section>

    <section class="forecast-day" v-if="tab === Tab.Main">
      <DayForecast :city="selectedCity" />
    </section>

    <section class="forecast-week" v-if="tab === Tab.Week">
      <WeekForecast :forecast="selectedCity.weekForecast" />
    </section>

    <PopularCities :cities="popularCities" />
  </div>
</template>

<style scoped lang="scss">
  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    .tabs {
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.1);
      white-space: nowrap;

      .tab {
        appearance: none;
        border: none;
        padding: 10px 16px;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        color: rgba(255, 255, 255, 0.4);
        background: transparent;
        cursor: pointer;
        font-weight: 400;
        font-size: 22px;

        &:last-child {
          border-right: none;
        }

        &.active {
          color: #fff;
        }
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }

    .city-select {
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .hero {
    margin: 55px 0;

    .date {
      font-weight: 600;
      font-size: 30px;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .forecast-day {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    gap: 16px;

    @media screen and (max-width: 1100px) {
      grid-template-columns: 1fr;
    }
  }

  .forecast-week {
    margin: 55px 0;
    display: flex;
    overflow-x: auto;
    gap: 16px;
  }
</style>
