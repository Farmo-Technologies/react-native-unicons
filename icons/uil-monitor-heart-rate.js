import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilMonitorHeartRate = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M9,19a1,1,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.12-.16.56.56,0,0,0,.09-.17A.64.64,0,0,0,10,18.2a1.36,1.36,0,0,0,0-.2,1,1,0,0,0-.08-.38.9.9,0,0,0-.54-.54A1,1,0,0,0,8.8,17l-.18.06a.56.56,0,0,0-.17.09,1,1,0,0,0-.16.12,1,1,0,0,0-.21.33A1,1,0,0,0,8,18a1,1,0,0,0,1,1Zm-3.71-.29a1.15,1.15,0,0,0,.33.21A1,1,0,0,0,6,19l.19,0a.6.6,0,0,0,.19-.06.76.76,0,0,0,.18-.09l.15-.12a1.15,1.15,0,0,0,.21-.33A.84.84,0,0,0,7,18a1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.56.56,0,0,0-.09-.17,1,1,0,0,0-.12-.16,1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21,1,1,0,0,0-.12.16.56.56,0,0,0-.09.17A.64.64,0,0,0,5,17.8,1.36,1.36,0,0,0,5,18a1,1,0,0,0,.08.38A1.15,1.15,0,0,0,5.29,18.71ZM19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V16H20Zm0-5H4V10H8a1,1,0,0,0,.71-.29L10,8.46l2.8,3.2a1,1,0,0,0,.72.34h0a1,1,0,0,0,.71-.29L15.91,10H20Zm0-6H15.5a1,1,0,0,0-.71.29L13.55,9.54l-2.8-3.2a1,1,0,0,0-1.46,0L7.59,8H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" />
    </Svg>
  );
};

UilMonitorHeartRate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilMonitorHeartRate.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilMonitorHeartRate;
