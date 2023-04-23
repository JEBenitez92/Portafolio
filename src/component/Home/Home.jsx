import React from "react";
import { Link } from "react-router-dom";
import Style from "./Home.module.css";

function Home() {
  return (
    <div className={Style.contenedorGeneral}>
      <div>
        <h1>Hola!!!</h1>
      </div>
      <div className={Style.contenedorCuerpo}>
        <div className={Style.imagen}/>
        <div className={Style.contenedorNombreYTitulo}>
          <h2>Soy Jonathan Ezequiel Benítez</h2>
          <h3>FullStack Developer</h3>
          <div className={Style.contenedorParrafos}>
            <p>JavaScript</p> <p>Node Js</p> <p>Posgres</p> <p>React</p>{" "}
            <p>Redux</p> <p>SQL</p>
          </div>
        </div>
      </div>
      <Link to="/cv">
        <button className={Style.boton} >Conoceme</button>
      </Link>
    </div>
  );
}

export default Home;
