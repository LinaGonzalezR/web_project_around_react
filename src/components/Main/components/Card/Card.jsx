import React from "react";
import { userContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
import trashIcon from "../../../../images/trashIcon.svg";

export default function Card(props) {
  const {
    card,
    onCardClick,
    onCardLike,
    onCardDelete,
    /*onClickNewCard,
    onClickEditProfile,
    onClickEditAvatar,
    onCardClick,
    cards,*/
  } = props;

  const { CurrentUserContext } = userContext(CurrentUserContext);

  /*const { name, link, isLiked } = card;*/
  const { isLiked } = card;

  /*const isLiked = card.likes.some((user) => user.id === currentUser?._id);*/

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <div className="card">
      <button
        className="card__delete"
        aria-label="Eliminar"
        onClick={handleCardDelete}
      >
        <img
          src={trashIcon}
          alt="Eliminar Carta"
          className="card__delete-icon"
        />
      </button>
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick(card)}
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <button
          className={cardLikeButtonClassName}
          aria-label="Me Gusta"
          onClick={handleCardLike}
          src
        ></button>
      </div>
    </div>
  );
}
