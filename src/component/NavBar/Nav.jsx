import React from 'react'
import { Link } from "react-router-dom";
import Style from "./Nav.module.css";

function Nav() {
  return (
    <div className={Style.contenedorGeneral}>

      <div className={Style.contenedorTitulos}>
        <h1>FullStack Developer</h1>
      </div>

      <div className={Style.contenedorBotones}>
      <Link to="/proyectos" >
      <button>
        Mi Trabajo
      </button>
      </Link>
      <Link to="/cv" >
        <button>
          Curriculum
        </button>
      </Link>
      <Link to="/info" >
        <button>
          Sobre Mi
        </button>
      </Link>
      <Link to="/" >
        <button>
            Salir
        </button>
      </Link>
      </div>
    </div>
  )
}

export default Nav