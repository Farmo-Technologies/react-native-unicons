import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCommentEdit = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21.71,4.72,19.28,2.29a1,1,0,0,0-1.41,0L12.29,7.87a1,1,0,0,0-.29.71V11a1,1,0,0,0,1,1h2.42a1,1,0,0,0,.71-.29l5.58-5.58A1,1,0,0,0,21.71,4.72ZM15,10H14V9l4.58-4.58,1,1Zm4,2h0a1,1,0,0,0-1,1,7,7,0,0,1-7,7H5.41l.64-.63a1,1,0,0,0,0-1.42A7,7,0,0,1,11,6a1,1,0,0,0,0-2h0A9,9,0,0,0,4,18.62L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,9-9A1,1,0,0,0,19,12Z" />
    </Svg>
  );
};

UilCommentEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilCommentEdit.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilCommentEdit;
