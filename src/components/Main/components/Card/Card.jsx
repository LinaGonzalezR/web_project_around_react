import trahsIcon from "././images/trashIcon.svg";

export default function Card(props) {
  const { name, link, isLiked } = props.card;

  return (
    <div className="card">
      <button className="card__delete">
        <img src={trahsIcon} alt="Eliminar Carta" />
      </button>
      <img className="card__image" src={link} alt={name} />
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-icon"></div>
      </div>
    </div>
  );
}
