import { useState, useEffect } from "react";
import "../style/Contenido.css";
import Musica from "./Musica";
import Calendario from "./Calendario";
import Hora from "./Hora";
import Linea from "../assets/linea.svg";
import Linea2 from "../assets/Linea_dos.svg";

export default function Contenido() {
  const [displayedText, setDisplayedText] = useState("");
  const [showSecondText, setShowSecondText] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const fullText =
    "¡Una nueva misión ha sido asignada! Los pilares te convocan para una celebración especial. Únete a esta aventura llena de música, amistad y mucha energía.";
  const secondText = "¡No faltes!";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, 80); // Velocidad de escritura (80ms por letra)
      } else {
        // Cuando termina el primer texto, ocultar cursor y mostrar el segundo
        setTimeout(() => {
          setShowCursor(false);
          setShowSecondText(true);
        }, 1000);
      }
    };

    // Empezar a escribir después de 1 segundo
    const timer = setTimeout(typeWriter, 1000);

    return () => clearTimeout(timer);
  }, [fullText]);

  return (
    <>
      <div className="container_texto_invitacion">
        <div className="img_logo">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1757729575/image_17_1_pyrbqg.png"
            alt=""
          />
          <div className="nombre">
            <h1>Carlos</h1>
            <h1>Morales</h1>
          </div>
        </div>

        <div className="musica_reproductor mt-5">
          <Musica />
        </div>

        <div className="texto_invitacion">
          <div className="parrafo">
            <p className={`cursor ${showCursor ? "blinking-cursor" : ""}`}>
              {displayedText}
            </p>
          </div>
          {showSecondText && (
            <p className="typewriter delay fade-in">¡No faltes!</p>
          )}
        </div>
        <section className="calendario mt-5">
          <h2>Reserva este día</h2>
          <img src={Linea} alt="" />
          <Calendario />
        </section>
        <section className="Hora mb-5">
          <h2>¡Tan solo faltan!</h2>
          <img src={Linea2} alt="" />
          <Hora />
        </section>
      </div>
    </>
  );
}
