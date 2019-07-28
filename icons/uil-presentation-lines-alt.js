import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilPresentationLinesAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M10.17,10.55a1,1,0,0,0,.73.45,1,1,0,0,0,.81-.29l1.13-1.14,1.33,2A1,1,0,0,0,15,12a.94.94,0,0,0,.55-.17,1,1,0,0,0,.28-1.38l-2-3A1,1,0,0,0,13.1,7a1,1,0,0,0-.81.29L11.16,8.43l-1.33-2a1,1,0,1,0-1.66,1.1ZM21,14H20V4h1a1,1,0,0,0,0-2H3A1,1,0,0,0,3,4H4V14H3a1,1,0,0,0,0,2h8v1.15l-4.55,3A1,1,0,0,0,7,22a.94.94,0,0,0,.55-.17L11,19.55V21a1,1,0,0,0,2,0V19.55l3.45,2.28A.94.94,0,0,0,17,22a1,1,0,0,0,.55-1.83l-4.55-3V16h8a1,1,0,0,0,0-2Zm-3,0H6V4H18Z" />
    </Svg>
  );
};

UilPresentationLinesAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilPresentationLinesAlt.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilPresentationLinesAlt;
