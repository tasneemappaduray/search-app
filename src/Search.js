import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Search() {

    const [artist, setArtist] = useState("");



    const getSearchApi = () => {
        axios.get("https://api.deezer.com/search?q=%60").then(data => console.log('Deezer List', data.data)).catch(error => console.log(error));
    };
    getSearchApi();

    const searchButton = () => {
        console.log("You pressed me beech")
    }

    const editSearchBar = (prop) => {

        // setArtist(prop.target.value)
        console.log('show me whats in the search box', prop.target.value)

    }

    return (
        <div>
            <h1>This is our Search Bar App</h1>
            <input type="search" onChange={editSearchBar} />
            <button onClick={searchButton}>Search me beech</button>
        </div>
    )
}

export default Search;