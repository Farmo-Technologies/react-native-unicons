import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilFileMinusAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm5,12H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM20,18H16a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-7-2H8a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm1-4H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
    </Svg>
  );
};

UilFileMinusAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilFileMinusAlt.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilFileMinusAlt;
