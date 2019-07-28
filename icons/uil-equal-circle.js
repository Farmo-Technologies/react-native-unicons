import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilEqualCircle = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M15,13H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm0-4H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
    </Svg>
  );
};

UilEqualCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilEqualCircle.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilEqualCircle;
