<script setup lang="ts">
  import { WeatherModel } from '../models';
  import PopularCityCard from './PopularCityCard.vue';

  const props = defineProps<{ cities: WeatherModel[] }>();
</script>

<template>
  <section class="popular-cities">
    <div class="title-with-icon">
      <h2 class="title">Погода в популярных городах</h2>
      <div class="help-icon" title="Помощь">
        <img src="/images/question-sign.png" alt="Помощь" />
      </div>
    </div>

    <div class="cards">
      <PopularCityCard v-for="city in props.cities" :key="city.id" :city="city" />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .popular-cities {
    margin: 55px 0;

    .title-with-icon {
      display: flex;
      align-items: center;
      gap: 16px;

      h2 {
        margin-bottom: 4px;
      }

      .help-icon {
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.1);
        padding: 10px 14px;
        line-height: 0;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      }
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 16px;
      margin-top: 32px;

      @media screen and (max-width: 1145px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
