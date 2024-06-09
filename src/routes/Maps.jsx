import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import api from '../services/api';
import Card from '../components/Card';
import Filters from '../components/Filters';

export default function Maps() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    api.get('/users')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  /**
   * Devido o google não carregar o maps quando troca de rota
   * devido o faturamento não está habilidade na api do google
   * foi realizado esse effect abaixo para atualizar a tela e 
   * recarregar o maps
   */

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!mapLoaded) {
        window.location.reload();
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [mapLoaded]);

  const containerStyle = {
    width: '100%',
    height: '1000px'
  };

  // Está essa localidade para ficar mais fácil do usuário vê alguém marcado no mapa
  const center = {
    lat: 24.8918,
    lng: 21.8984
  };

  const getContinent = (lat, lng) => {
    if (lat >= -35 && lat <= 37.5 && lng >= -17.5 && lng <= 51.08333) {
      return 'africa';
    } else if (lat >= -60 && lat <= 85 && lng >= -169 && lng <= -53) {
      return 'america';
    } else if (lat >= -10 && lat <= 82 && lng >= 25 && lng <= 180) {
      return 'asia';
    } else if (lat >= 36 && lat <= 72 && lng >= -24 && lng <= 45) {
      return 'europe';
    } else if (lat >= -90 && lat <= -60 && lng >= -180 && lng <= 180) {
      return 'antarctica';
    } else if (lat >= -49 && lat <= 11 && lng >= 110 && lng <= 180) {
      return 'oceania';
    } else {
      return 'other';
    }
  };

  const handleMarkerClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseInfoWindow = () => {
    setSelectedUser(null);
  };

  const handleFilterChange = (selectedContinent) => {
    setFilter(selectedContinent);
    if (selectedContinent === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => getContinent(user.address.geo.lat, user.address.geo.lng) === selectedContinent);
      setFilteredUsers(filtered);
    }
  };

  return (
    <div className="flex bg-white-primary">
      <div className="w-full h-full">
        <div className="flex items-center justify-between mb-1 w-auto p-4">
          <h1 className="text-2xl font-bold text-blue-primary">Usuários</h1>
          <Filters onFilterChange={handleFilterChange} />
        </div>


        <div className="mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lx:grid-cols-3 gap-3">
            {filteredUsers.map(user => (
              <Card
                key={user.id}
                name={user.name}
                email={user.email}
                city={user.address.city}
              />
            ))}
          </div>
        </div>

      </div>

      <div className="w-full h-full ">
          <LoadScript
            language='pt-BR'
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            loadingElement={
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-lg text-gray-700">Carregando o Google Maps...</p>
                </div>
              </div>
            }
            onLoad={() => setMapLoaded(true)}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={4}
              options={{
                disableDefaultUI: true,
                gestureHandling: 'cooperative',
              }}
            >
              {filteredUsers.map(user => (
                <Marker
                  key={user.id}
                  position={{ lat: parseFloat(user.address.geo.lat), lng: parseFloat(user.address.geo.lng) }}
                  title={user.name}
                  onClick={() => handleMarkerClick(user)}
                />
              ))}
              {selectedUser && (
                <InfoWindow
                  position={{ lat: parseFloat(selectedUser.address.geo.lat), lng: parseFloat(selectedUser.address.geo.lng) }}
                  onCloseClick={handleCloseInfoWindow}
                >
                  <div>
                    <h2 className="text-md font-bold mb-2">{selectedUser.name}</h2>
                    <p>Cidade: {selectedUser.address.city}</p>
                    <p>Rua: {selectedUser.address.street}</p>
                    <p>Contato: {selectedUser.phone}</p>
                    <p>Site: {selectedUser.website}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        
      </div>
    </div>
  );
}