import "./googleButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export const GoogleButton = () => {
  return (
    <>
      <button className="buttonGoogle text-base cursor-pointer">
        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
        Sign in with Google
      </button>
    </>
  );
};
