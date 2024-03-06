import PropTypes from "prop-types";

function Avatar(props) {
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Avatar;
