import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilGrids = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM8,20H4V4H8Zm6,0H10V4h4Zm6,0H16V4h4Z" />
    </Svg>
  );
};

UilGrids.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilGrids.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilGrids;
