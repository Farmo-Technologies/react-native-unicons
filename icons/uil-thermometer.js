import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilThermometer = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M16.29,6.29l-7,7a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7-7a1,1,0,1,0-1.42-1.42Zm4.25-2.83a5,5,0,0,0-7.08,0L5.29,11.69a1,1,0,0,0-.29.7v5.19L2.29,20.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L6.42,19h5.19a1,1,0,0,0,.7-.29l8.23-8.17A5,5,0,0,0,20.54,3.46ZM19.12,9.12,11.2,17H7V12.8l7.88-7.92a3,3,0,0,1,4.24,4.24Z" />
    </Svg>
  );
};

UilThermometer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilThermometer.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilThermometer;
