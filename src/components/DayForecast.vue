<script setup lang="ts">
  import { WeatherModel } from '../models';

  const props = defineProps<{ city: WeatherModel }>();

  const getTime = (datetime: string) => {
    return new Date(datetime).toLocaleString('ru', { hour: 'numeric', minute: 'numeric' });
  };
</script>
<template>
  <div class="now">
    <div class="icon">
      <img :src="`/images/${props.city.now.icon}`" :alt="props.city.now.description" />
    </div>
    <div class="temp">
      <span>{{ props.city.now.temp }}°</span>
    </div>
    <div class="params">
      <ul>
        <li>{{ props.city.now.description }}</li>
        <li>Влажность: {{ props.city.now.humidity }}%</li>
        <li>Ветер: {{ props.city.now.wind }} м/с</li>
      </ul>
    </div>
  </div>
  <div class="day">
    <table class="day-forecast">
      <tr v-for="(forecast, index) in props.city.dayForecast" :key="index">
        <td class="time">
          <div>{{ getTime(forecast.datetime) }}</div>
          <div>{{ forecast.daytime }}</div>
        </td>
        <td class="temp">{{ forecast.temp }}°</td>
        <td class="icon">
          <img :src="`/images/${forecast.icon}`" :alt="forecast.description" />
          <span class="description">{{ forecast.description }}</span>
        </td>
        <td class="wind">{{ forecast.wind }} м/с</td>
        <td class="humidity">{{ forecast.humidity }}%</td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
  .now {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 44px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }

    .icon img {
      width: 160px;
    }

    .temp {
      font-size: 100px;
      font-weight: 800;
    }

    .params ul {
      list-style: none;
      padding: 0;
      margin: 0;
      white-space: nowrap;

      li {
        font-size: 24px;
        margin-bottom: 12px;

        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }
    }
  }

  table.day-forecast {
    width: 100%;

    td {
      padding: 8px 0;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .time {
      font-size: 18px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }

      div {
        margin-bottom: 8px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .temp {
      text-align: center;
      font-size: 48px;
      font-weight: 800;

      @media screen and (max-width: 768px) {
        font-size: 38px;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;

      .description {
        font-size: 18px;

        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }

      img {
        width: 60px;

        @media screen and (max-width: 768px) {
          width: 50px;
        }
      }
    }

    .wind,
    .humidity {
      font-size: 18px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
</style>
