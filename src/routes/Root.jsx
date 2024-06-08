import { Outlet } from "react-router-dom";
import Header from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
  return (
      <main class="flex flex-col">
        <Header/>
        <Outlet />
        <Footer/>
      </main>
  );
}