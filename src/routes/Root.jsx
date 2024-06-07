import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div class="flex h-screen bg-gray-100">
      <aside class="w-64 bg-gray-800 text-white">
        <div class="p-4 text-center">
            <h1 class="text-xl font-bold">Logo mapas</h1>
        </div>
        <nav class="mt-4 p-2">
            <ul class="space-y-2">
                <li class="px-4 py-2 hover:bg-gray-700 rounded">
                  <Link to="/maps">Mapas</Link>
                </li>
                <li class="px-4 py-2 hover:bg-gray-700 rounded">
                  <Link to="/user">Usuário</Link>
                </li>
            </ul>
        </nav>
      </aside>

      <main class="flex-1 p-4">
          <Outlet />
      </main>
    </div>
  );
}