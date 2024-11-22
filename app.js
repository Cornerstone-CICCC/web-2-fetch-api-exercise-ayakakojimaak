const showData = async (data) => {
  console.log(data);
  document.querySelector(".js-temperature_2m").textContent =
    data.current.temperature_2m + data.current_units.temperature_2m;
  document.querySelector(".js-wind_speed_10m").textContent =
    data.current.wind_speed_10m + data.current_units.wind_speed_10m;
  document.querySelector(".js-timezone").textContent = data.timezone;
  const time = new Date(data.current.time);
  document.querySelector(".js-time").textContent = "Last updated:" + time;
};

const addStyle = async (isRain) => {
  if (isRain) {
    document.querySelector("body").style.background = "darksalmon";
  } else {
    document.querySelector("body").style.background = "deepskyblue";
  }
};
const result = async () => {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1"
    );
    const json = await res.json();
    await showData(json);
    await addStyle(json.current.temperature_2m);
  } catch (error) {
    console.log(error);
  }
};
result();
