import React from "react";
import "./App.css";
import Main from "./Main"
import { useEffect, useState } from "react";
import axios from "axios";
import { subDays, format } from "date-fns";


const örnekVeri = {
  date: "2023-04-28",
  explanation: "Like a ship plowing through cosmic seas, runaway star Alpha Camelopardalis has produced this graceful arcing bow wave or bow shock. The massive supergiant star moves at over 60 kilometers per second through space, compressing the interstellar material in its path. At the center of this nearly 6 degree wide view, Alpha Cam is about 25-30 times as massive as the Sun, 5 times hotter (30,000 kelvins), and over 500,000 times brighter. About 4,000 light-years away in the long-necked constellation Camelopardalis, the star also produces a strong stellar wind. Alpha Cam's bow shock stands off about 10 light-years from the star itself. What set this star in motion? Astronomers have long thought that Alpha Cam was flung out of a nearby cluster of young hot stars due to gravitational interactions with other cluster members or perhaps by the supernova explosion of a massive companion star.",
  hdurl: "https://apod.nasa.gov/apod/image/2304/AlphaCamelopardis_s3100.png",
  media_type: "image",
  service_version: "v1",
  title: "Runaway Star Alpha Camelopardalis",
  url: "https://apod.nasa.gov/apod/image/2304/AlphaCamelopardis_s1024.png"
}


function App() {

  const [data, setData] = useState(örnekVeri)

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetchApod(format(date, "yyyy-MM-dd"));
  }, []);

  const fetchApod = (date) => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=vfhcsdNC5ezG2y3jv14lTRhGe30bqSmvRS9DJOQM&date=${date}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleNextPhoto = () => {
    const newDate = subDays(date, 1);
    setDate(newDate);
    fetchApod(format(newDate, "yyyy-MM-dd"));
  };

  return (

    <div className="App">
      <Main data = {data} handleNextPhoto={handleNextPhoto}/>
    </div>
  );
}

export default App;


