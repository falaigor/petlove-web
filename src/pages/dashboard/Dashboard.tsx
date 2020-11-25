import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiEdit3, FiTrash } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import SidebarDashboard from '../../components/SidebarDashboard';

import mapIcon from "../../utils/mapIcon";
import '../../styles/pages/dashboard/dashboard.css';

function Dashboard() {
  return(
    <div id="page-dashboard">

    <SidebarDashboard />

      <main>
        <div className="content-wrapper">
          <h2>ONGs Cadastradas</h2>
          <hr/>

          <div className="container-maps">
            <div className="map-container">
              <Map
                center={[-22.199547, -47.3804479]}
                style={{ width: '100%', height: 280 }}
                zoom={15}
              >

                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
              
              </Map>

              <footer>
                <p>Amigo Animal</p>
                <div className="btn-actions">
                  <Link to="/" className="btn">
                    <FiEdit3 size={26} />
                  </Link>
                  <Link to="/" className="btn">
                    <FiTrash size={26} />
                  </Link>
                </div>
                
              </footer>
            </div>
         
          </div>


        </div>
      </main>

    </div>
  );
}

export default Dashboard;