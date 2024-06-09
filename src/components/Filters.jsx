import { useState } from 'react';

export default function Filters({ onFilterChange }) {
  const [selectedContinent, setSelectedContinent] = useState('');

  const handleFilterChange = (event) => {
    setSelectedContinent(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div className="flex items-center mb-4 w-auto">
      <p className="text-sm text-gray-800 mr-2">Filtre por continente:</p>
      <div className="relative inline-block w-auto text-gray-700">
        <select
          name="continente"
          id="continente"
          className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
          value={selectedContinent}
          onChange={handleFilterChange}
        >
          <option value="">Todos</option>
          <option value="africa">África</option>
          <option value="america">América</option>
          <option value="asia">Ásia</option>
          <option value="europe">Europa</option>
          <option value="oceania">Oceania</option>
          <option value="antarctica">Antártida</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293l4.293 4.293 4.293-4.293 1.414 1.414-5.707 5.707-5.707-5.707z" />
          </svg>
        </div>
      </div>
    </div>
  );
}


//filtrar por continente
// o resultado de users deve mudar de acordo com o filtro
// o resultado dos pontos no mapa deve mudar tbm