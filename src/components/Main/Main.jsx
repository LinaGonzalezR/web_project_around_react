import React, { useContext } from "react";
import Card from "./components/Card/Card";
import Avatar from "../../images/Avatar.png";
import Pen from "../../images/Pen.png";
import ButtonSymbol from "../../images/Button-Symbol.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";
import EditProfile from "./Popup/EditProfile/EditProfile";
import Popup from "./Popup/Popup";
import NewCard from "./Popup/NewCard/NewCard";

const Main = ({
  onOpenPopup,
  onClosePopup,
  cards,
  popup,
  handleCardLike,
  handleCardDelete,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const popupNewCard = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  const popupEditAvatar = {
    title: "Actualizar foto",
    children: <EditAvatar />,
  };
  const popupEditProfile = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  /*async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));*/

  return (
    <main>
      <section className="profile">
        <img
          src={currentUser?.avatar || Avatar}
          alt={`Foto de ${currentUser?.name || "usuario"}`}
          className="profile__image"
          onClick={() => onOpenPopup(popupEditAvatar)}
        />
        <div className="profile__data">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <h2 className="profile__subtitle">{currentUser?.about}</h2>
        </div>

        <button
          className="profile__button-small"
          onClick={() => onOpenPopup(popupEditProfile)}
        >
          <img
            src={Pen}
            alt="imagen de lápiz"
            className="profile__image-small"
          />
        </button>
        <button
          className="profile__button"
          onClick={() => onOpenPopup(popupNewCard)}
        >
          <img
            src={ButtonSymbol}
            alt="símbolo adición"
            className="button__add"
          />
        </button>
      </section>

      <section className="card__box">
        {cards.map((card) => (
          /*const cardLikeButtonClassName = `card__like-button ${
            isLiked ? "card__like-button_is-active" : ""
          }`;*/
          /*<Card card={card}*/

          <Card
            key={card._id}
            card={card}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
        ;
      </section>
      {popup && (
        <Popup title={popup.title} onClose={onClosePopup}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
};

export default Main;
