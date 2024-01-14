import Weather from "./components/Weather";
import background from './assets/bg.jpg'
import { useState } from "react";

function App() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState([]);
  const myStyle = {
    backgroundImage: `url(${background})`,
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  const searchDataHandle = (value) => {
    setSearch(value)
  }

  const handleApi = async () => {
    if (search !== "") {
      let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=0985ab8de63ac4178ffcf91adfc9ea07&units=metric`)
      let response = await url.json();
      setWeather(response)
    }
  }
  return (
    <>
      <div style={myStyle} className="flex m-auto">
        <Weather searchData={search} searchChange={searchDataHandle} weatherData={weather} handleApi={handleApi}  />
      </div>
    </>
  )
}

export default App;
