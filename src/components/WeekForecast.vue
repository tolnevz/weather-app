<script setup lang="ts">
  import { Forecast } from '../models';

  const props = defineProps<{ forecast: Forecast[] }>();

  const getWeekDay = (datetime: string) => {
    return new Date(datetime).toLocaleString('ru', { weekday: 'long' });
  };
</script>
<template>
  <div class="week-forecast-item" v-for="(forecast, index) in props.forecast" :key="index">
    <div class="daytime">{{ getWeekDay(forecast.datetime) }}</div>
    <div class="icon">
      <img :src="`/images/${forecast.icon}`" :alt="forecast.description" />
    </div>
    <div class="temp">{{ forecast.temp }}°</div>
  </div>
</template>

<style scoped lang="scss">
  .week-forecast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 130px;

    .daytime {
      font-size: 18px;
    }
    .icon {
      margin: 8px 0;

      img {
        width: 60px;

        @media screen and (max-width: 768px) {
          width: 50px;
        }
      }
    }
    .temp {
      font-size: 18px;
      font-weight: 600;
    }
  }
</style>
