import { ref } from 'vue';
import forecastData from '../mocks/weatherData.json';
import { WeatherModel } from '../models';

export function useWeather() {
  const forecast = ref<WeatherModel[]>(forecastData);

  return {
    forecast,
  };
}
