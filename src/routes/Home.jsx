import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImgWorldMap from "../assets/world-map.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white-primary">
      <Navbar />
      <section className="flex flex-col p-6 m-16 h-screen md:flex-row">
        <div className="w-full md:w-1/2 pr-8">
          <h1 className="text-blue-primary text-5xl">
            <p>Conheça o Your Maps, <b>seu explorador de mapas interativos</b></p> 
          </h1>
          <p className="text-black pt-6">
            Descubra, navegue e interaja com mapas <br />
            detalhados e cadastre-se para uma <br />
            experiência completa
          </p>
          <div className="flex space-x-4 pt-10">
            <Link to="/maps" className="bg-blue-primary hover:bg-blue-secondary text-white-primary py-4 px-6 rounded-xl">
              Navegar com mapas
            </Link>
            <Link to={"/user"} className="bg-blue-primary hover:bg-blue-secondary text-white-primary py-4 px-6 rounded-xl">
              Fazer cadastro
            </Link>
          </div>
        </div>
        <img
          src={ImgWorldMap}
          alt="Mapa Mundo"
          className="w-full md:w-1/2 object-cover mt-6"
        />
      </section>
      <Footer />
    </div>
  );
}