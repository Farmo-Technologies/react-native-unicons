import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilImageEdit = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M19,11.48a1,1,0,0,0-1,1v2.39L16.5,13.39a2.83,2.83,0,0,0-3.92,0l-.7.7L9.39,11.6a2.78,2.78,0,0,0-3.92,0L4,13.09V7.48a1,1,0,0,1,1-1h6a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v12a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3v-7A1,1,0,0,0,19,11.48Zm-14,9a1,1,0,0,1-1-1V15.92L6.88,13A.78.78,0,0,1,8,13l3.17,3.17,0,0,4.26,4.26Zm13-1a1,1,0,0,1-.17.54L13.29,15.5l.7-.69a.78.78,0,0,1,1.1,0L18,17.7ZM21.72,4.23,19.3,1.81a1,1,0,0,0-1.41,0L13.31,6.39A1,1,0,0,0,13,7.1V9.52a1,1,0,0,0,1,1h2.42a1,1,0,0,0,.7-.29l4.58-4.58A1,1,0,0,0,21.72,4.23ZM16,8.52H15v-1L18.6,3.93l1,1Z" />
    </Svg>
  );
};

UilImageEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilImageEdit.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilImageEdit;
