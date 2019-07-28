import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilWall = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,9a1,1,0,0,0,0-2H20V5h1a1,1,0,0,0,0-2H3A1,1,0,0,0,3,5H6V7H3A1,1,0,0,0,3,9H4v2H3a1,1,0,0,0,0,2H6v2H3a1,1,0,0,0,0,2H4v2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2H18V17h3a1,1,0,0,0,0-2H20V13h1a1,1,0,0,0,0-2H18V9ZM8,5h4V7H8Zm8,4v2H12V9ZM6,9h4v2H6Zm6,4v2H8V13Zm-2,6H6V17h4Zm6,0H12V17h4Zm2-4H14V13h4ZM14,7V5h4V7Z" />
    </Svg>
  );
};

UilWall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilWall.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilWall;
