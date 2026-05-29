import { useState } from "react"
import SearchBar from "./components/search-bar";
import TempCard from "./components/temp-card";

// main app component

export default function App() {

  const [city, setCity] = useState("London");

  return(
    <>
    <div className="container">
      
      <SearchBar city={city} setCity={setCity} />
      <TempCard city={city} />
      </div>
      
    </>
  );
}