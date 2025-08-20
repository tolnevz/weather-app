<script setup lang="ts">
  import { WeatherModel } from '../models';

  const props = defineProps<{ city: WeatherModel }>();
</script>

<template>
  <div class="city-card">
    <div class="name">{{ props.city.name }}</div>
    <div class="description">{{ props.city.now.description }}</div>
    <div class="icon">
      <img :src="`/images/${props.city.now.icon}`" :alt="props.city.now.description" />
    </div>
    <div class="temp">{{ props.city.now.temp }}°</div>
    <div class="humidity">Влажность: {{ props.city.now.humidity }}%</div>
  </div>
</template>

<style scoped lang="scss">
  .city-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 26px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(238, 237, 237, 0.1) 100%);

    .name {
      font-size: 26px;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .description, .humidity {
      font-size: 18px;
      font-weight: 600;
    }

    .icon {
      margin: 16px 0;

      img {
        width: 60px;

        @media screen and (max-width: 768px) {
          width: 50px;
        }
      }
    }

    .temp {
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 16px;
    }
  }
</style>
