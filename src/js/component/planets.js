import React, { useContext } from "react";
import "../../styles/characters.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const name = props.name;

  let favs = store.favorites.filter(e => e.name === name).length

  return (
    <div className="card mx-2  bg-dark bg-gradient px-0 text-light border border-secondary my-3" style={{ width: "18rem" }}>
      <img className="card-img-top img-fluid img-cover" src={props.imageURL} alt="Card image cap" />
      <div className="my-auto">
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <Link to={props.link} className="btn btn-warning">Learn more</Link>
          <i onClick={() =>
             favs === 1 ? actions.deleteFav(name) :  actions.addFav(props)} className={favs === 1 ? "fas fa-heart heart" : "far fa-heart heart"} style={{ marginLeft: "10px" }}
          ></i>
        </div>
      </div>
    </div>
  );
};