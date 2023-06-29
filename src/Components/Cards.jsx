import React from "react";

const Cards = ({ pokemon, loading }) => {
  console.log(pokemon);

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
                        >
                          {type.type.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Cards;
