import { useState, useEffect } from "react";
import { getNeoData } from "./api/neo";
import moment from 'moment'
import "./App.css";

function App() {
  const [asteroids, setAsteroids] = useState([]);

  const geNeoList = async () => {
    const startDate = moment().startOf('month').format('YYYY-MM-DD')
    const endDate = moment(startDate).add(6, 'days').format('YYYY-MM-DD');
    try {
      const data = await getNeoData(startDate, endDate);

      setAsteroids(data);
      // setAsteroids(prevState => [...prevState, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    geNeoList()
  }, [])

  console.log('asteroids--->', asteroids);

  return (
    <>
      <h1>Near Orbital Objects</h1>
    </>
  );
}

export default App;
