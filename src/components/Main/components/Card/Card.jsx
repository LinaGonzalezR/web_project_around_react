import trashIcon from "../../../../images/TrashIcon.svg";

export default function Card(props) {
  const { name, link, isLiked, onCardClick } = props.card;

  return (
    <div className="card">
      <button className="card__delete" aria-label="Eliminar">
        <img
          src={trashIcon}
          alt="Eliminar Carta"
          className="card__delete-icon"
        />
      </button>
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(Card)}
      />
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-icon"></div>
      </div>
    </div>
  );
}
