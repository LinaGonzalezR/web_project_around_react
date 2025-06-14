import CloseIcon from "../../../../images/CloseIcon.svg";
import { useState } from "react";

const EditProfile = () => {
  const [name, description] = useState(null);

  return (
    <form className="form" name="form1" id="form1" noValidate>
      <h3 className="form__title">Editar Perfil</h3>
      <input
        type="text"
        placeholder="Nombre"
        id="input-nombre"
        className="form__input"
        minLength="2"
        maxLength="40"
        required
        name="name"
      />
      <span className="form__input-error input-nombre-error"></span>
      <input
        type="text"
        placeholder="Acerca de mí"
        id="input-mi"
        className="form__input"
        minLength="2"
        maxLength="200"
        required
        name="about"
      />
      <span className="form__input-error input-mi-error"></span>
      <button type="submit" className="button__form button__form_disabled">
        Guardar
      </button>
      <img
        src={CloseIcon}
        alt="Icono de cerrar ventana"
        className="popup__image"
      />
    </form>
  );
};

export default EditProfile;
