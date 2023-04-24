import React from "react";
import Style from "./MisDatos.module.css"

function MisDatos() {
  return (
    <div className={Style.contenedor}>
      <div>
        <h1>Sobre mí</h1>
      </div>

      <div>
        <p>
          En este apartado voy a intentar contarte un como sobre mí. <br />
          Mi nombre es Jonathan Ezequiel Benitez. Me describiría como una persona 
          aplicada y responsable, comprometida con el progreso personal y profesional. <br />
          Actualmente resido en Buenos Aires junto a mi esposa e hijo. <br />
          Recientemente me gradué en Henry, donde me
          formé como Full Stack Developer, obteniendo conocimientos en
          tecnologías como JavaScript, React, Redux,<br /> Node Js y PosgresSQL, entre
          otras. <br />
          Aunque no cuento con una amplia experiencia en el área IT, he
          adquirido habilidades valiosas en trabajos previos, tales como
          liderazgo, trabajo en equipo, <br /> responsabilidad y capacidad de 
          adaptación, que creo que me serán útiles en el campo laboral. <br />
          Me apasiona mantenerme actualizado en las últimas tendencias y avances de
          la tecnología y me considero una persona autodidacta y dispuesta a
          aprender constantemente.
        </p>
      </div>
    </div>
  );
}

export default MisDatos;
