import React from "react";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Main/Popup/Popup";
import NewCard from "./components/Main/Popup/NewCard/NewCard";
import EditProfile from "./components/Main/Popup/EditProfile/EditProfile";
import api from "./utils/Api";
import "./index.css";
import CurrentUserContext from "./contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);

  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        console.log("Tarjetas API", res);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        console.log("Tarjetas recibidas API", res);
        setCards(res);
      })
      .catch((err) => {
        console.log("Error al recibir tarjetas", err);
      });
  }, []);

  /*function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log("Error al eliminar la tarjeta", err);
      });
  }*/

  /*async function handleCardLike(card) {
    const isLiked = card.isLiked;
    try {
      const newCard = await api.changeLikeCardStatus(card._id, !isLiked);
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    } catch (err) {
      console.error(err);
    }

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }*/

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            popup={popup}
            cards={cards}
            /* onClickNewCard={() => (popupNewCard)}
            onClickEditProfile={() => setPopupState(popupEditProfile)}
            onClickEditAvatar={() => setPopupState(popupEditAvatar)}
            cards={cards}
            setCards={setCards}*/
          ></Main>
          <Footer />

          {/*<ImagePopup card={cards} onClose={() => setCards(null)} />*/}
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
