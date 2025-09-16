import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState(""); 
  const [weather, setWeather] = useState(null); // API'den gelen hava durumu

  // input değiştiğinde city güncelle
  function handleChange(e) {
    setCity(e.target.value); 
  }

  // butona basıldığında API çağrısı yap
  async function handleSearch() {
    if (!city) {
      alert("Lütfen bir şehir giriniz!");
      return;
    }

    const apiKey = "cd05dbb0e262ee4efe1431011910017c"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;
 
    // burada verileri cekiyoruz 
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Şehir bulunamadı!");
      }
      const data = await response.json();  
      setWeather(data); // state'e kaydet
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="app">
      {/* Arama kutusu */}
      <h1>Hava Durumu Uygulaması</h1>
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Şehir adı giriniz" 
          value={city} 
          onChange={handleChange} 
          className="i"
        />
        <button onClick={handleSearch} className="b">Ara</button>
      </div>

      {/* Hava durumu varsa ekrana göster */}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <img 
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description} 
          />
          <p>🌡 Sıcaklık: {weather.main.temp}°C</p>
          <p> Hava: {weather.weather[0].description}</p>
          <p>💧 Nem: %{weather.main.humidity}</p>
          <p> Hissedilen sıcaklık: {weather.main.feels_like}°C</p>
          <p> Rüzgar hızı: {weather.wind.speed} m/s</p>
          <p> Basınç: {weather.main.pressure} hPa</p>
        </div>
      )}
    </div>
  );
}

export default App;
