import React from "react";
import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Main/Popup/Popup";
import NewCard from "./components/Main/Popup/NewCard/NewCard";
import EditProfile from "./components/Main/Popup/EditProfile/EditProfile";
import EditAvatar from "./components/Main/Popup/EditAvatar/EditAvatar";

import "./index.css";

function App() {
  const [PopupState, setPopupState] = useState(null);

  const popupNewCard = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  const popupEditProfile = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const popupEditAvatar = {
    title: "Actualizar foto",
    children: <EditAvatar />,
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onClickNewCard={() => setPopupState(popupNewCard)}
          onClickEditProfile={() => setPopupState(popupEditProfile)}
          onClickEditAvatar={() => setPopupState(popupEditAvatar)}
        ></Main>
        <Footer />
        {PopupState && (
          <Popup title={PopupState.title} onClose={() => setPopupState(null)}>
            {" "}
            {PopupState.children}{" "}
          </Popup>
        )}
        {/*<section className="popup popup__delete" id="popup__delete">
          <div className="popup__container popup__container-delete">
            <div className="popup__close">
              <img


                src="./images/CloseIcon.svg"
                alt="Icono de cerrar ventana"
                className="popup__image"
              />
            </div>
            <h3 className="form__title">¿Estás seguro?</h3>
            <button type="submit" className="button__form">
              Sí
            </button>
          </div>
        </section>

        
        <section className="popup popup-image" id="popup-image">
          <div className="popup__content">
            <img className="popup__image-big" alt="Imagen ampliada" src="" />
            <h3 className="popup__title"></h3>
            <button className="popup__close">
              <img
                src="./images/CloseIcon.svg"
                alt="Icono de cerrar ventana"
                className="popup__image-close-icon"
              />
            </button>
          </div>
        
        </section>
  <section className="card__box"></section>
        */}
      </div>
    </>
  );
}

export default App;
