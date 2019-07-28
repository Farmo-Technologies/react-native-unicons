import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilLinkBroken = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M4.76,10.59a1,1,0,0,0,.26-2L3.26,8.15a1,1,0,1,0-.52,1.93l1.76.47A.78.78,0,0,0,4.76,10.59ZM8.62,5a1,1,0,0,0,1,.74.82.82,0,0,0,.26,0,1,1,0,0,0,.7-1.22l-.47-1.76a1,1,0,1,0-1.93.52Zm4.83,10A1,1,0,0,0,12,15L8.5,18.56a2.21,2.21,0,0,1-3.06,0,2.15,2.15,0,0,1,0-3.06L9,12a1,1,0,1,0-1.41-1.41L4,14.08A4.17,4.17,0,1,0,9.92,20l3.53-3.53A1,1,0,0,0,13.45,15ZM5.18,6.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41L5.3,3.89A1,1,0,0,0,3.89,5.3Zm16.08,7.33-1.76-.47A1,1,0,1,0,19,15.38l1.76.47.26,0a1,1,0,0,0,.26-2ZM15.38,19a1,1,0,0,0-1.23-.7,1,1,0,0,0-.7,1.22l.47,1.76a1,1,0,0,0,1,.74,1.15,1.15,0,0,0,.26,0,1,1,0,0,0,.71-1.23Zm3.44-1.57a1,1,0,0,0-1.41,1.41l1.29,1.29a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM21.2,7A4.16,4.16,0,0,0,14.08,4L10.55,7.56A1,1,0,1,0,12,9L15.5,5.44a2.21,2.21,0,0,1,3.06,0,2.15,2.15,0,0,1,0,3.06L15,12a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L20,9.92A4.19,4.19,0,0,0,21.2,7Z" />
    </Svg>
  );
};

UilLinkBroken.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilLinkBroken.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilLinkBroken;
