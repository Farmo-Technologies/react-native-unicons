import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilWebcam = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12,13a3,3,0,1,0-3-3A3,3,0,0,0,12,13Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,12,9Zm9.59,9.16A10,10,0,0,0,19,13.89a8,8,0,1,0-14,0,9.9,9.9,0,0,0-2.6,4.27,3,3,0,0,0,.47,2.63A3,3,0,0,0,5.3,22H18.7a3,3,0,0,0,2.42-1.21A3,3,0,0,0,21.59,18.16ZM12,4a6,6,0,1,1-6,6A6,6,0,0,1,12,4Zm7.52,15.59a1,1,0,0,1-.82.41H5.3a1,1,0,0,1-.82-.41,1,1,0,0,1-.15-.87A7.85,7.85,0,0,1,6.21,15.5a8,8,0,0,0,11.58,0,7.85,7.85,0,0,1,1.88,3.22A1,1,0,0,1,19.52,19.59Z" />
    </Svg>
  );
};

UilWebcam.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilWebcam.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilWebcam;
