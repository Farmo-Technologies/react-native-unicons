import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilArrowsResizeH = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M10,6A1,1,0,0,0,9,7v4H5.41l.8-.79A1,1,0,0,0,4.79,8.79l-2.5,2.5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l2.5,2.5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H9v4a1,1,0,0,0,2,0V7A1,1,0,0,0,10,6Zm11.92,5.62a1,1,0,0,0-.21-.33l-2.5-2.5a1,1,0,0,0-1.42,1.42l.8.79H15V7a1,1,0,0,0-2,0V17a1,1,0,0,0,2,0V13h3.59l-.8.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2.5-2.5a1,1,0,0,0,.21-.33A1,1,0,0,0,21.92,11.62Z" />
    </Svg>
  );
};

UilArrowsResizeH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilArrowsResizeH.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilArrowsResizeH;
