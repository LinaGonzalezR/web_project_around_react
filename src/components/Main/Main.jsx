import { useState } from "react";
import Card from "./components/Card/Card";

import Avatar from "../../images/Avatar.png";
import Pen from "../../images/Pen.png";
import ButtonSymbol from "../../images/Button-Symbol.svg";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

const Main = (props) => {
  const { onClickNewCard, onClickEditProfile, onClickEditAvatar } = props;

  return (
    <main className="profile">
      <img
        src={Avatar}
        alt="Foto Jacques Cousteau"
        className="profile__image"
        onClick={onClickEditAvatar}
      />
      <div className="profile__data">
        <h1 className="profile__title">Jacques Cousteau</h1>
        <h2 className="profile__subtitle">Explorador</h2>
      </div>

      <button className="profile__button-small">
        <img
          src={Pen}
          alt="imagen de lápiz"
          className="profile__image-small"
          onClick={onClickEditProfile}
        />
      </button>
      <button className="profile__button">
        <img
          src={ButtonSymbol}
          alt="símbolo adición"
          className="button__add"
          onClick={onClickNewCard}
        />
      </button>

      <section className="card">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </section>
    </main>
  );
};

export default Main;
