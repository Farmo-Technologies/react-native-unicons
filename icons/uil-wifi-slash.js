import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilWifiSlash = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M6.92,5.51h0L3.71,2.29A1,1,0,0,0,2.29,3.71L4.56,6A15.21,15.21,0,0,0,1.4,8.39a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.7-.29A13.07,13.07,0,0,1,6.05,7.46L7.54,9a10.78,10.78,0,0,0-3.32,2.27,1,1,0,1,0,1.42,1.4,8.8,8.8,0,0,1,3.45-2.12l1.62,1.61a7.07,7.07,0,0,0-3.66,1.94,1,1,0,1,0,1.42,1.4A5,5,0,0,1,12,14a4.13,4.13,0,0,1,.63.05l7.66,7.66a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,16a3,3,0,1,0,3,3A3,3,0,0,0,12,16Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,20ZM22.61,8.39A15,15,0,0,0,10.29,4.1a1,1,0,1,0,.22,2A13.07,13.07,0,0,1,21.2,9.81a1,1,0,0,0,1.41-1.42Zm-4.25,4.24a1,1,0,0,0,1.42-1.4,10.75,10.75,0,0,0-4.84-2.82,1,1,0,1,0-.52,1.92A8.94,8.94,0,0,1,18.36,12.63Z" />
    </Svg>
  );
};

UilWifiSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilWifiSlash.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilWifiSlash;
