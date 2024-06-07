import { Outlet, Link } from "react-router-dom";
import Header from "../components/Navbar";

export default function Root() {
  return (
      <main class="flex flex-col">
        <Header/>
        <Outlet />
      </main>
  );
}