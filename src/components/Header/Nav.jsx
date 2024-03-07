import PropTypes from "prop-types";

function Navbar({ linkText, imagePath, altText }) {
  return (
    <a className="menu-item" href="#">
      <img src={imagePath} alt={altText} />
      <span className="menu-title">{linkText}</span>
    </a>
  );
}
Navbar.propTypes = {
  linkText: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Navbar;
