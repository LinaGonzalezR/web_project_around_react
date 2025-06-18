/*import { useRef, useContext }; */

import CloseIcon from "../../../../images/CloseIcon.svg";

const EditAvatar = () => {
  return (
    <form className="form" name="form-avatar" id="form-avatar" noValidate>
      <img
        src={CloseIcon}
        alt="Icono de cerrar ventana"
        className="popup__image"
      />
      <h3 className="form__title">Actualizar Foto</h3>
      <input
        type="url"
        placeholder="Enlace de la nueva imagen"
        className="form__input"
        required
        name="avatar"
        id="input-avatar"
      />
      <span className="form__input-error input-avatar-error"></span>
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

export default EditAvatar;
