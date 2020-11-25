import React from 'react';

import '../../styles/pages/dashboard/login.css';

import logoBig from '../../images/logoBigWhite.svg';
import { Link } from 'react-router-dom';

function Login() {
  return(
    <div id="page-login">
      <aside>
        <header>
          <img src={logoBig} alt="Petlove" width="250px" />
        </header>

        <footer>
          <strong>Leme</strong>
          <span>São Paulo</span>
        </footer>

      </aside>

      <div className="content-wrapper">
        <h2>Fazer login</h2>
        <form className="login-form" action="/dashboard">
          <fieldset>
            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email"/>
            </div>

            <div className="input-block">
              <label htmlFor="name">Senha</label>
              <input id="name" type="password" />
            </div>
          </fieldset>
          
          <fieldset className="remember-forgot">
            <div className="input-block">
              <input type="checkbox" id="remember" name="remember"/>
              <label htmlFor="remember">Lembrar-me</label>
            </div>

            <Link to="/forgoit" className="forgot">
              Esqueci minha senha
            </Link>

          </fieldset>
          
          <button className="confirm-button" type="submit">
            Entrar
          </button>

        </form>
      </div>

     </div>
  );
}

export default Login;