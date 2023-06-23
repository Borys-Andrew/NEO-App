import { useState, useEffect } from "react";
import { getNeoData } from "./api/neo";
import moment from 'moment'
import "./App.css";

function App() {
  const [asteroids, setAsteroids] = useState([]);

  const geNeoList = async () => {
    const startDate = moment(new Date).format('YYYY-MM-DD')
    const endDate = moment(new Date).format('YYYY-MM-DD')
    try {
      const data = await getNeoData(startDate, endDate);
      setAsteroids(data);
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
