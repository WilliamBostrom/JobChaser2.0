interface Props {
  linkText: string;
  imagePath: string;
  altText: string;
}

function Navbar({ linkText, imagePath, altText }: Props): JSX.Element {
  return (
    <div className="menu-item">
      <img src={imagePath} alt={altText} />
      <span className="menu-title">{linkText}</span>
    </div>
  );
}

export default Navbar;
