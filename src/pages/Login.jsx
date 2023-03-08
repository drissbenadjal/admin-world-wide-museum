import React, { useRef } from "react";
import { Link } from "react-router-dom";

//images
import logo from "../images/logo.svg";

export const Login = ({ login }) => {

  const pathImg = './images/tableaux/';
  const extImg = '.webp';
  //img list : boulevardMontmatre, coucherDeSoleilEragny, jardinMontmatre, nuitEtoile, pontNeuf, soleilLevant
  const listImg = ['boulevardMontmatre', 'coucherDeSoleilEragny', 'jardinMontmatre', 'nuitEtoile', 'pontNeuf', 'soleilLevant'];
  const randomImg = listImg[Math.floor(Math.random() * listImg.length)];
  let img = pathImg + randomImg + extImg;

  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginRef.current.value, passwordRef.current.value);
  };

  return (
    <>
      <div className="login__container">
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="form">
            <div className="field">
              <label className="display3" htmlFor="login">
                Login ou Email <span>*</span>
              </label>
              <input
                type="text"
                name="login"
                id="login"
                placeholder="exemple@gmail.com"
                ref={loginRef}
              />
              <small></small>
            </div>
            <div className="field">
              <label className="display3" htmlFor="password">
                Mot de passe <span>*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Veuillez saisir votre mot de passe"
                ref={passwordRef}
              />
              <small></small>
            </div>
          </div>
          <input
            type="submit"
            value="Se connecter"
            className="btn"
          />
          {
            img && <img className="img__login" src={img} alt="login" />
          }
        </form>
      </div>
    </>
  );
}
