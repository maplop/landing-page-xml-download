import PropTypes from 'prop-types';
import mayor from "../../../../../assets/images/Path-604.png";

const LogoMayor = ({ size }) => {
  return <img src={mayor} alt="Logo" width={size} height={size} />
};

LogoMayor.propTypes = {
  size: PropTypes.number.isRequired,
};

export default LogoMayor;