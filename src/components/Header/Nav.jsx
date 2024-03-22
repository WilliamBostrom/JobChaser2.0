import PropTypes from "prop-types";

function Navbar({ linkText, imagePath, altText }) {
  return (
    <div className="menu-item" href="#">
      <img src={imagePath} alt={altText} />
      <span className="menu-title">{linkText}</span>
    </div>
  );
}
Navbar.propTypes = {
  linkText: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Navbar;
