    import "./search-bar.css"
    import { IoMdSearch } from "react-icons/io";

    // component

    export default function SearchBar({ city, setCity }){
        return(
        <>
        <div className="container-search-bar">
        <div className="search-bar">
        <input 
        type="text"
        name="input"
        className="search-bar-input"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />

        <IoMdSearch className="icon" />
        </div>
        </div>
        </>
        );
            
    }