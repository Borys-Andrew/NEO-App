import { useState, useEffect } from "react";
import { getNeoData } from "./api/neo";
import moment from 'moment'
import "./App.css";

function App() {
  const [asteroids, setAsteroids] = useState([]);

  const geNeoList = async () => {
    let startDate = moment().startOf('month').format('YYYY-MM-DD')
    let endDate = moment(startDate).add(7, 'days').format('YYYY-MM-DD');
    const currentDate = moment().format('YYYY-MM-DD')
  
    while (startDate <= currentDate ) {
      if (endDate > currentDate) {
        endDate = currentDate
      }
      try {
        const data = await getNeoData(startDate, endDate)
        setAsteroids(prevstate => [...prevstate, ...data])

        startDate = moment(endDate).add(1, 'days').format('YYYY-MM-DD')
        endDate = moment(startDate).add(7, 'days').format('YYYY-MM-DD');
      } catch (error) {
        throw new error;
      }
    }
  };

  useEffect(() => {
    geNeoList()
  }, [])

  console.log('asteroids--->', asteroids.sort());

  return (
    <>
      <h1>Near Orbital Objects</h1>
    </>
  );
}

export default App;
