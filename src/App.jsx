import { useState, useEffect } from "react";
import { getNeoData } from "./api/neo";
import { getFilteredAsteroids } from './helpers/getFilteredAsteroids';
import moment from 'moment'
import "./App.css";
import NeoList from './components/NeoList/NeoList';

function App() {
  const [asteroids, setAsteroids] = useState([]);

  const getNeoList = async () => {
    let startDate = moment().startOf('month').format('YYYY-MM-DD')
    const currentDate = moment().format('YYYY-MM-DD')

    setInterval(async() => {
      try {
        const data = await getNeoData(startDate)
        const neoDaySummary = getFilteredAsteroids(data)

        setAsteroids(prevState => {
          if (prevState.length >= 6) {
            prevState.shift();
          }
          return [...prevState, neoDaySummary];
        });

        if (startDate !== currentDate) {
          startDate = moment(startDate).add(1, 'days').format('YYYY-MM-DD')
        } else {
          startDate = moment().startOf('month').format('YYYY-MM-DD')
        }
      } catch (error) {
        throw new error;
      }
    }, 5000)
  };

  useEffect(() => {
    getNeoList()
  }, [])

  console.log('asteroids--->', asteroids);

  return (
    <div className="main">
      <h1>Near Orbital Objects</h1>
      <NeoList neoList={asteroids}/>
    </div>
  );
}

export default App;