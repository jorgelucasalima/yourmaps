import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-gray-700 mb-4">Desculpe, ocorreu um erro inesperado.</p>
        <p className="text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="bg-blue-primary hover:bg-blue-hover text-white font-bold py-4 px-6 rounded"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}