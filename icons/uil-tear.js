import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilTear = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12.56,2.17a1,1,0,0,0-1.12,0c-.3.2-7.19,5-7.19,12.08a7.75,7.75,0,0,0,15.5,0C19.75,7.05,12.85,2.36,12.56,2.17ZM12,20a5.76,5.76,0,0,1-5.75-5.75c0-5,4.21-8.77,5.75-10,1.55,1.21,5.75,5,5.75,10A5.76,5.76,0,0,1,12,20Z" />
    </Svg>
  );
};

UilTear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilTear.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilTear;
