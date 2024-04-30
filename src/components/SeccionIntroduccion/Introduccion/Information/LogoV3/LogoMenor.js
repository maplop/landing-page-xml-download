import PropTypes from 'prop-types';
import menor from "../../../../../assets/images/Path-604.png";

const LogoMenor = ({ size }) => {
  return <img src={menor} alt="Logo" width={size} height={size} />
};

LogoMenor.propTypes = {
  size: PropTypes.number.isRequired,
};

export default LogoMenor;