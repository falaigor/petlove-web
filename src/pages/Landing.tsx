import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
 
import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} className="logo" alt="Petlove" />

        <div className="location">
          <strong>Leme</strong>
          <span>São Paulo</span>
        </div>

        <main>
          <h1>Leve feliciade para os pets</h1>
          <p>Conheça ONGs e Petshops que cuidam de animais</p>
        </main>

        <div className="location">
          <strong>Leme</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/login" className="enter-adm">
          Acesso Restrito
        </Link>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} />
        </Link>

      </div>
    </div>
  );
}

export default Landing;