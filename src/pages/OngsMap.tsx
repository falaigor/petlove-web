import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/ong-map.css';
import api from '../services/api';

interface Ong {
  id: number,
  latitude: number,
  longitude: number,
  name: string
}

function OngsMap() {
  const [ongs, setOngs] = useState<Ong[]>([]);

  useEffect(() => {
    api.get('ongs').then(response => {
      setOngs(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Petlove" />

          <h2>Escolha uma Ong no mapa</h2>
          <p>Muitas animais estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Leme</strong>
          <span>São Paulo</span>
        </footer>

      </aside>

      <Map
        center={[-22.199547, -47.3804479]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {ongs.map(ong => {
          return (
            <Marker
              key={ong.id}
              icon={mapIcon}
              position={[ong.latitude, ong.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {ong.name}
                <Link to={`ongs/${ong.id}`}>
                  <FiArrowRight size={20} />
                </Link>
              </Popup>
            </Marker>
          )
        })}

      </Map>

      <Link to="/ongs/create" className="create-ong">
        <FiPlus size={32} color="white" />
      </Link>
    </div>
  );
}

export default OngsMap;