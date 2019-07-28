import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilToggleOff = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M8,8.5A3.5,3.5,0,1,0,11.5,12,3.5,3.5,0,0,0,8,8.5Zm0,5A1.5,1.5,0,1,1,9.5,12,1.5,1.5,0,0,1,8,13.5ZM16,5H8A7,7,0,0,0,8,19h8A7,7,0,0,0,16,5Zm0,12H8A5,5,0,0,1,8,7h8a5,5,0,0,1,0,10Z" />
    </Svg>
  );
};

UilToggleOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilToggleOff.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilToggleOff;
