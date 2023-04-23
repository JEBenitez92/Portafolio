import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
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
  )
}

export default Nav