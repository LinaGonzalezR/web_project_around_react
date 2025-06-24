import { useState, useEffect } from "react";
import api from "../../utils/Api";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "../../index.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.updateUserInfo(data.name, data.about).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };

  const handleAddCard = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const link = event.target.link.value;
    api.createCard(name, link).then((card) => {
      setCards((prevCards) => [card, ...prevCards]);
      setPopup(null);
    });
  };

  const handleUpdateAvatar = (data) => {
    api
      .updateProfileAvatar(data.avatar)
      .then((newData) => {
        setCurrentUser(newData);
        setPopup(null);
      })
      .catch((err) => {
        err;
      });
  };

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        res;
        setCurrentUser(res);
      })
      .catch((err) => {
        err;
      });
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        res;
        setCards(res);
      })
      .catch((err) => {
        err;
      });
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    try {
      const newCard = isLiked
        ? await api.removeLike(card._id)
        : await api.likeCard(card._id);
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    } catch (err) {
      err;
    }
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        err;
      });
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .createCard(name, link)
      .then((newCard) => {
        setCards((prevCards) => [newCard, ...prevCards]);
        setPopup(null);
      })
      .catch((err) => {
        err;
      });
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
      >
        <div className="page">
          <Header />
          <Main
            cards={cards}
            onOpenPopup={handleOpenPopup}
            popup={popup}
            onClosePopup={() => setPopup(null)}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
            handleAddCard={handleAddCard}
            handleUpdateAvatar={handleUpdateAvatar}
            handleAddPlaceSubmit={handleAddPlaceSubmit}
          ></Main>
          <Footer />
          {/*<ImagePopup card={cards} onClose={() => setCards(null)} />*/}
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
