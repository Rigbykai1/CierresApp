import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const DrawerLink = (props) => {
  const { nombre, url, icono } = props;
  const location = useLocation();
  const getLastWordOfURL = (string) => {
    const urlSegments = string.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];
    const words = lastSegment.split("-");
    const lastWord = words[words.length - 1];
    return lastWord;
  };

  const actualPage = getLastWordOfURL(location.pathname);
  const selectedLink = (link) =>
    actualPage === link
      ? "bg-neutral-content text-neutral hover:btn-ghost"
      : "";
  return (
    <Link
      className={`btn ${selectedLink(nombre)} justify-between btn-ghost`}
      to={url}
    >
      {icono}
      {nombre}
    </Link>
  );
};

export default DrawerLink;
