import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCloudLock = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M18.42,6.72A7,7,0,0,0,5.06,8.61a4,4,0,0,0-.38,7.66,1.13,1.13,0,0,0,.32.05,1,1,0,0,0,.32-2A2,2,0,0,1,4,12.5a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,1,5.53,1,1,0,1,0,1,1.74A5,5,0,0,0,22,11.5,5,5,0,0,0,18.42,6.72Zm-3.42,9V14.5a3,3,0,0,0-6,0v1.18a3,3,0,0,0,1,5.82h4a3,3,0,0,0,1-5.82ZM11,14.5a1,1,0,0,1,2,0v1H11Zm3,5H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" />
    </Svg>
  );
};

UilCloudLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilCloudLock.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilCloudLock;
