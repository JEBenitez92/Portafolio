import React from "react";
import Style from "./Cv.module.css";

export default function Cv() {
  return (
    <div>
      <div className={Style.contenedorColumnas}>
        <div className={Style.contenerdorContactame}>
          <div className={Style.contenedorH1Contacto}>
            <h3>Contactame</h3>
          </div>

          <div className={Style.contenedorGithub}>
            <div className={Style.ImagenGithub} />
            <div className={Style.EnlaceGithub}>
              <a href="https://github.com/JEBenitez92">Mi GitHub</a>
            </div>
          </div>

          <div className={Style.contenedroLikedin}>
            <div className={Style.ImagenLikedin}></div>
            <div className={Style.EnlaceLinkedin}>
              <a href="https://www.linkedin.com/in/jonathan-ezequiel-benitez/">
                Mi Linkedin
              </a>
            </div>
          </div>

          <div className={Style.contenedorCorreo}>
            <div className={Style.ImagenCorreo} />
            <div className={Style.EnlaceCorreo}>
              <a href="mailto:Jonathan92_24@hotmail.com?subject=Te contacto desde tu portafolio">
                Mi correo
              </a>
            </div>
          </div>

          <div className={Style.contenedorWhatsapp}>
            <div className={Style.ImagenWhatsapp} />
            <div className={Style.EnlaceWhatsapp}>
              <a href="https://wa.me/+5491150645938">
                Enviame un mensaje de WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className={Style.contenedroImagenYNombre}>
            <div className={Style.imagen} />
            <div className={Style.contenedroH1Nombre}>
              <h1>Jonathan Ezequiel Benítez</h1>
            </div>
          </div>

          <div className={Style.contenedorCuerpoCv}>
            <h2>Experiencia Laboral</h2>
            <p>
              <h4>Redguard S.A Vigilador General</h4>
              <p>
                Julio 2014 - Acualidad <br />
                Control de ingreso y egreso de personal, visitas y proveedores.{" "}
                <br />
                Envio de email, llenado de planillas excel.
              </p>
            </p>
            <p>
              <h4>Ejército Argentino SubOficial(Cabo de Infanteria)</h4>
              <p>
                Diciembre 2012 - Junio 2014 <br />
                Jefe de Equipo, organizacion y capacitacion de soldados junto al
                jefe de grupo. <br />
                Auxiliar de sala de armas, encargado de la documentación y
                control de inventarios <br />
                de la sala de armas.
              </p>
            </p>
            <h2 className={Style.H2Educacion}>Educacíon</h2>
            <p>
              <h4>Soy Henry-Full Stack Developer</h4>
              <p>
                {" "}
                Agosto 2022 - Mayo 2023 <br />
                JavaScript, HTML, CSS, Node, React, Redux, SQL
              </p>

              <h4>Universidad Nacional José C Paz</h4>
              <p>
                Marzo 2019 - Actualidad. <br />
                Licenciatura en Administracion
              </p>
            </p>
            <h3>Otros Conocimientos</h3>
            <u>
              <li>MongoDB</li>
              <li>JSON Web Token</li>
              <li>Firebase</li>
              <br />
              <br />
            </u>
          </div>
        </div>
      </div>
    </div>
  );
}
