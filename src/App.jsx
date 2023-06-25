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
    let endDate = startDate;
    const currentDate = moment().format('YYYY-MM-DD')

    while (startDate <= currentDate ) {
      try {
        const data = await getNeoData(startDate, endDate)

        setAsteroids(prevState => {
          if (prevState.length >= 6) {
            prevState.shift();
          }
          return [...prevState, getFilteredAsteroids(data)];
        });

        startDate = moment(startDate).add(1, 'days').format('YYYY-MM-DD')
        endDate = startDate
      } catch (error) {
        throw new error;
      }
    }
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
