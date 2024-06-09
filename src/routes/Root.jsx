import { Outlet } from "react-router-dom";
import Header from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
  return (
      <main class="flex flex-col min-h-screen">
        <Header/>
        <div className="flex-grow bg-white-primary">
          <Outlet />
        </div>
        <Footer/>
      </main>
  );
}