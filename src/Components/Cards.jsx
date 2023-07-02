import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PokeDetails from "./PokeDetails";

const Cards = ({ pokemon, loading }) => {
  console.log(pokemon);
  const [poke, setPoke] = useState();

  const navigate = useNavigate();

  const PokeDetail = (value) => {
    console.log(`Details Button Clicked:${value}`);
  };

  return (
    <>
      {loading ? (
        <div className="custom-loader"></div>
      ) : (
        pokemon.map((item) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={item.sprites.other.dream_world.front_default}
                className="card-img-top"
                alt="Pokemon"
                height="250px"
                width="250px"
                style={{ padding: ".5rem .5rem" }}
              />
              <hr />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ textTransform: "capitalize" }}
                >
                  {item.name}
                </h5>
                <div
                  style={{
                    display: "flex",
                    rowGap: "1rem",
                    columnGap: "1rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                  }}
                  onClick={() => {}}
                >
                  {item.types.map((type, index) => {
                    return (
                      <div>
                        <button
                          type="button"
                          className={
                            index % 2 === 0 ? "btn btn-success" : "btn btn-info"
                          }
                          style={{ textTransform: "capitalize" }}
                          disabled
                        >
                          {type.type.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <hr />
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={(e) => {
                    setPoke(e.item.id);
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Cards;
