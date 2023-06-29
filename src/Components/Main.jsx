import React, { useState, useEffect } from "react";
import Logo from "../images/Logo.png";
import "bootstrap/js/src/dropdown";
import Cards from "./Cards";
import axios from "axios";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();

  const pokeInfo = async (data) => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPreviousUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (items) => {
      const result = await axios.get(items.url);
      setPokeData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    pokeInfo();
  }, [url]);

  return (
    <>
      <div>
        {/* navbar */}
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <img src={Logo} alt="logo" width="280px" />
          </div>

          {/* end of navbar */}
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search your Pokemon"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </div>

          {/* Pokemon Listing */}
          <div
            className="dropdown"
            style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          >
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-funnel-fill"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button">
                  Abilities
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Characteristics
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Group
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Habitat
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Location
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Species
                </button>
              </li>
            </ul>
          </div>
          {/* Pokemon Cards Section */}
          <div className="card-container">
            <Cards pokemon={pokeData} loading={loading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
