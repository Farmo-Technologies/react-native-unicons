import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCompressV = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12.71,13.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2.5,2.5a1,1,0,0,0,1.42,1.42l.79-.8V21a1,1,0,0,0,2,0V16.41l.79.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm-1.42-2.58a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2.5-2.5a1,1,0,1,0-1.42-1.42l-.79.8V3a1,1,0,0,0-2,0V7.59l-.79-.8A1,1,0,1,0,8.79,8.21Z" />
    </Svg>
  );
};

UilCompressV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilCompressV.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilCompressV;
