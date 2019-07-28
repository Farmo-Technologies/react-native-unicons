import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilServerConnection = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M11,13a1,1,0,1,0,1,1A1,1,0,0,0,11,13ZM7,13a1,1,0,1,0,1,1A1,1,0,0,0,7,13ZM22,4a3,3,0,0,0-3-3H5A3,3,0,0,0,2,4V8a3,3,0,0,0,.78,2A3,3,0,0,0,2,12v4a3,3,0,0,0,3,3h6v2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2H13V19h6a3,3,0,0,0,3-3V12a3,3,0,0,0-.78-2A3,3,0,0,0,22,8ZM20,16a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-8a1,1,0,0,1-1,1H5A1,1,0,0,1,4,8V4A1,1,0,0,1,5,3H19a1,1,0,0,1,1,1ZM11,5a1,1,0,1,0,1,1A1,1,0,0,0,11,5ZM7,5A1,1,0,1,0,8,6,1,1,0,0,0,7,5Z" />
    </Svg>
  );
};

UilServerConnection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilServerConnection.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilServerConnection;
