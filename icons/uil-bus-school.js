import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilBusSchool = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M1,12.5v4a1,1,0,0,0,1,1H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1V6.5a3,3,0,0,0-3-3H8.44A3,3,0,0,0,5.6,5.55L4.16,9.86,1.45,11.67A1,1,0,0,0,1,12.5Zm20-3H19v-4h1a1,1,0,0,1,1,1Zm-4,8a1,1,0,1,1,1,1A1,1,0,0,1,17,17.5Zm-2-6h6v4h-.78a3,3,0,0,0-4.44,0H15Zm0-6h2v4H15Zm-4,6h2v4H11Zm0-6h2v4H11Zm-2,4H6.39l1.1-3.32a1,1,0,0,1,.95-.68H9Zm-4,8a1,1,0,1,1,1,1A1,1,0,0,1,5,17.5ZM3,13,5.3,11.5H9v4H8.22a3,3,0,0,0-4.44,0H3Z" />
    </Svg>
  );
};

UilBusSchool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilBusSchool.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilBusSchool;
