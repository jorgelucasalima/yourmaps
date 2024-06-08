import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImgWorldMap from "../assets/world-map.png";

export default function Home() {
  return (
    <div className="bg-white-primary">
      <Navbar />
      <section className="flex flex-col p-8 m-16 h-screen md:flex-row">
        <div className="w-full md:w-1/2 pr-8">
          <h1 className="text-blue-primary text-5xl">
            Conheça o Your <br /> Maps, <b>seu explorador de <br /> mapas interativos</b>
          </h1>
          <p className="text-black pt-6">
            Descubra, navegue e interaja com mapas <br />
            detalhados e cadastre-se para uma <br />
            experiência completa
          </p>
          <div className="flex space-x-4 pt-10">
            <button className="bg-blue-primary hover:bg-blue-hover text-white-primary py-4 px-6 rounded-xl">
              Navegar com mapas
            </button>
            <button className="bg-blue-primary hover:bg-blue-hover text-white-primary py-4 px-6 rounded-xl">
              Fazer cadastro
            </button>
          </div>
        </div>
        <img
          src={ImgWorldMap}
          alt="Mapa Mundo"
          className="md:w-1/3 h-auto object-cover mt-2"
        />
      </section>
      <Footer />
    </div>
  );
}