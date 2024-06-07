import { useState, useEffect } from 'react';

import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import api from '../services/api';
import Card from '../components/Card';
export default function Maps() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    api.get('/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
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
      <h2 className="text-md font-bold mb-4">Encontre os usuários:</h2>


      <div className="mt-4">
        <LoadScript
          language='pt-BR'
          googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          loadingElement={
            <div className=" items-center justify-center">
              <div className="text-center">
                <p className="text-lg text-gray-700">Carregando o Google Maps...</p>
              </div>
            </div>
          }
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

      <div className="mt-4">
        <h2 className="text-md font-bold mb-2">Usuários:</h2>
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lx:grid-cols-4 gap-3">
            {users.map(user => (
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
    </div>
  );
}