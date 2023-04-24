import React from 'react'
import Style from "./Proyectos.module.css";


function Proyectos() {

  return (
    <div className={Style.contenedorGeneral}>
      <div className={Style.contenedorTitulo}><h1>Te presento mis trabajos</h1></div>
      <div className={Style.contenedorParrafo}>
        <p>
        En este apartado vas a encontrar todos mis proyectos realizados, desde el primero, "Rick and Morty", hasta <br />
        los últimos que vaya realizando. <br />
        Vas a observar que el proyecto "Rick and Morty" tiene defectos. No olvides que fue el primer proyecto que <br /> armé en mis comienzos en esta carrera de programador. Podría corregirlo y dejarlo más presentable, pero <br /> decidí dejarlo como me salió en ese momento y que sirva para reflejar mi crecimiento personal y profesional.
        </p>
      </div>
      <div className={Style.contenedorProyectos}>

        <div className={Style.proyecto}>
          <h3>Rick and Morty</h3>
          <div className={Style.imagenRickAndMorty} />
          <a href="https://proyecto-rick-and-morty-58jctsoie-jebenitez92.vercel.app/">Rick and Morty</a>
          <p>
            Credenciales <br />
            username = 'jonathan92_24@hotmail.com' <br />
            password = 'Jo1234#'; <br />
            Descripción: Es una aplicación creada con <br /> 
            React y Redux. En esta aplicación, se puede buscar las <br /> 
            cartas de Rick and Morty colocando el número de la carta en <br /> 
            la barra de búsqueda. Además, se puede ver un detalle de <br />
            cada personaje y guardarlos en la sección de Favoritos.
          </p>
        </div>

        <div className={Style.proyecto}>
        <h3>PI-Henry-Dog</h3>
          <div className={Style.imagenPI} />
          <a href="https://pi-henry-dogs-1o350cgxe-jebenitez92.vercel.app/">PI-Henry-Dog</a>
          <p>
          Descripción: Esta app fue creada para mostrar distintas <br /> 
          razas de perros, proporcionando información sobre su <br />
          temperamento, peso, altura, años de vida y una imagen.<br /> 
          Las funcionalidades que se pueden encontrar son ordenar <br /> 
          por mayor o menor peso, orden alfabético, filtros por <br /> 
          nombre de raza y por temperamento. Además, se incluyen <br /> 
          una vista de detalle por raza, un formulario para agregar <br /> 
          una nueva raza o información a una ya existente, y <br />
          la posibilidad de seleccionar razas favoritas.<br />
          Fue creado con React, Redux, JavaScript, NodeJs, Express,<br /> 
          PostgreSQL
          </p>
        </div>

        <div className={Style.proyecto}>
        <h3>Henry-PF-FootWead</h3>
          <div className={Style.imagenPF} />
          <a href="https://henry-pf-footwead-client-jebenitez92.vercel.app/">Henry-PF-FootWead</a>
          <p>
          Descripción: Este proyecto fue creado por un grupo <br /> 
          de 5 personas. Es una tienda en línea de zapatillas <br /> 
          donde se pueden ver diversas marcas y filtrar por talles,<br /> 
          precios, entre otros. Se utiliza Firebase para el inicio<br /> 
          de sesión y MercadoPago como pasarela de pago. <br />
          Fue desarrollado con React, Redux, JavaScript, Node.js,<br /> 
          Express, PostgreSQL,Jsonwebtoken, nodemailer,<br /> 
          cloudinary y sweetalert.
          </p>
        </div>

      </div>
      <br />
    </div>
  )
}

export default Proyectos