import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilFileShareAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M13.5,12.5a1,1,0,0,0-1-1h-5a1,1,0,0,0,0,2h5A1,1,0,0,0,13.5,12.5Zm5,5a2,2,0,0,0-1.18.39l-1.75-.8,1.91-.88a2,2,0,0,0,1,.29,2,2,0,1,0-2-2l-1.89.87A2,2,0,1,0,13.5,19a1.88,1.88,0,0,0,.92-.24l2.1,1a2,2,0,1,0,2-2.23Zm-8,2h-5a1,1,0,0,1-1-1V4.5a1,1,0,0,1,1-1h5v3a3,3,0,0,0,3,3h3a1,1,0,0,0,2,0v-1s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0,1.1,1.1,0,0,0-.26-.06H5.5a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3h5a1,1,0,0,0,0-2Zm2-14.59L15.09,7.5H13.5a1,1,0,0,1-1-1ZM7.5,15.5a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Z" />
    </Svg>
  );
};

UilFileShareAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilFileShareAlt.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilFileShareAlt;
