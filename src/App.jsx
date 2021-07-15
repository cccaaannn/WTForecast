import Header from "./components/Header";
import Card1 from "./components/card1/Card1";
import Card2 from "./components/card2/Card2Background";
import GlobalStyles from "./styles/GlobalStyles";
import PhoneSizes from "./styles/PhoneSizes";
import { useState, useEffect } from 'react'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'


function App() {

	const [weather, setWeather] = useState({});
	const [forecast, setForecast] = useState({});


	useEffect(() => {
		async function fetchWeather(city){
			const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
			const data = await res.json();
			setWeather(data)
		}
		async function fetchForecast(city){
			const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
			const data = await res.json();
			setForecast(data)
		}
		fetchWeather("istanbul")
		fetchForecast("istanbul")
	  }, [])



	return (
		<Container>
			<GlobalStyles/>
			{/* <PhoneSizes /> */}
			<Header />
			<Card1 weather={weather}/>
			<Card2 forecast={forecast}/>
		</Container>
	);

	

	
}

export default App;
