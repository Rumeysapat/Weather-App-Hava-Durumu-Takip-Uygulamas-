const API_KEY = 'a9a95066df7158039e6a1933d3ff1664';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city = 'Istanbul', units = 'metric') => {
  const url = `${BASE_URL}?q=${city}&units=${units}&appid=${API_KEY}&lang=tr`;

  // fetch'i await ile çağır
  const response = await fetch(url);

  // gelen response'dan json verisini al
  const data = await response.json();

  console.log(data);

  return data;
};

//coordinatima gore veri al
export const getWeatherByCoords = async (lat, lon, units = 'metric') => {
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;

  const res = await fetch(url);

  return res.json();
};

//bayrak istegi

export const getFlagUrl = (countryCode) =>
  `https://flagcdn.com/108x81/${countryCode.toLowerCase()}.png`;
