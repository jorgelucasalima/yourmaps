import { useState, useEffect } from 'react';

import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import api from '../services/api';
export default function Maps() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  // Está essa localidade para ficar mais fácil do usuário vê alguém marcado no mapa
  const center = {
    lat: 24.8918,
    lng: 21.8984
  };

  const handleMarkerClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseInfoWindow = () => {
    setSelectedUser(null);
  };

  return (
    <div className="p-4">
      <h2>Encontre os usuários:</h2>

      <div className="mt-4">
        <LoadScript
          language='pt-BR'
          googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
          >
            {users.map(user => (
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
                  <h2>{selectedUser.name}</h2>
                  <p>E-mail: {selectedUser.email}</p>
                  <p>Cidade: {selectedUser.address.city}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Usuários:</h2>
        {
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-2">
            {users.map(user => (
              <div key={user.id} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                <p className="text-gray-700 mb-4">E-mail: {user.email}</p>
                <p className="text-gray-700 mb-4">Cidade: {user.address.city}</p>
              </div>
            ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
}