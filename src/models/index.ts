export enum Tab {
  Main = 'main',
  Week = 'week',
}

export interface WeatherModel {
  id: number;
  name: string;
  popular: boolean;
  now: Forecast;
  dayForecast: Forecast[];
  weekForecast: Forecast[];
}

export interface Forecast {
  datetime: string;
  daytime: string;
  temp: number;
  wind: number;
  humidity: number;
  icon: string;
  description: string;
}
