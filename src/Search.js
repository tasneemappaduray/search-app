import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const SEARCH_URL = "https://api.deezer.com/search?q=";

function Search() {

    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);

    const getSearchSongs = () => {
        axios.get(SEARCH_URL + search)
            .then(
                (response) => {
                    console.log('Deezer List', response.data.data)
                    setList(response.data.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            );
    };
    // getSearchSongs();

    const searchButton = () => {
       
        if(search !== ""){
            getSearchSongs()
        } else if (search === "") {
            console.log("Search is empty")
        } else {
            console.log("Something ain't right!")
        }
    }

    useEffect(() => {
        searchButton();
        console.log("Output search", list)
    },[])

    return (
        <div>
            <h1>Search Bar App</h1>
            <input type="search" placeholder="Search for an artist" value={search} onChange={(event) => setSearch(event.target.value)} />
            <button onClick={searchButton}>Search</button>
        </div>
    )

}

export default Search;