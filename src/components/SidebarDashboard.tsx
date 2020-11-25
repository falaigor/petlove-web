import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidebar-dashboard.css';

export default function Sidebar() {
  const { goBack } = useHistory();
  
  return (
    <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="PetLove" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} />
          </button>
        </footer>
      </aside>
  );
}