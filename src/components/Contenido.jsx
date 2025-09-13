import "../style/Contenido.css";
import Musica from "./Musica";

export default function Contenido() {
  return (
    <>
      <div className="container_texto_invitacion">
        <div className="img_logo">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1757729575/image_17_1_pyrbqg.png"
            alt=""
          />
          <div className="nombre">
            <h1>Chris</h1>
          </div>
        </div>

        <div className="musica_reproductor">
          <Musica />
        </div>
      </div>
    </>
  );
}
