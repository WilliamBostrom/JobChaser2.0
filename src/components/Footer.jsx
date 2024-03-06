function Footer() {
  let now = new Date();
  let year = now.getFullYear();

  return <footer>Copyright {year}</footer>;
}

export default Footer;
