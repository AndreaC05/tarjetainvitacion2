import Contenido from "../components/Contenido";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <div className="container_home">
        <video
          className="video-background"
          src="https://res.cloudinary.com/dnao6nouz/video/upload/v1757714197/pindown.io__15giyuu15_1757714130_bgilfl.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Video principal normal */}
        <video
          className="video-main"
          src="https://res.cloudinary.com/dnao6nouz/video/upload/v1757714197/pindown.io__15giyuu15_1757714130_bgilfl.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="contenido_text">
          <Contenido />
        </div>
      </div>
    </>
  );
}
