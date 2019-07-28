import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilOperaAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M11.9707,5.00044c-3.64355,0-3.64355,5.12207-3.64355,6.85742,0,1.95313,0,7.14258,3.66015,7.14258,3.6543,0,3.6543-5.16211,3.6543-7.10547C15.6416,7.31977,14.40625,5.00044,11.9707,5.00044Zm.0166,12c-1.10156,0-1.66015-1.73047-1.66015-5.19531,0-2.19141.28515-4.80469,1.64355-4.80469,1.4541,0,1.6709,3.0664,1.6709,4.89453C13.6416,15.28267,13.085,17.00044,11.9873,17.00044Zm.001-16C5.93652,1.00044,1.71,5.48188,1.71,11.89888c0,5.457,3.84668,11.10156,10.28516,11.10156,6.43359,0,10.27832-5.64453,10.27832-11.10156C22.27344,5.48188,18.044,1.00044,11.98828,1.00044Zm.00684,20c-5.18653,0-8.28516-4.62793-8.28516-9.10156,0-5.32227,3.32715-8.89844,8.27832-8.89844,4.95606,0,8.28516,3.57617,8.28516,8.89844C20.27344,16.37251,17.17676,21.00044,11.99512,21.00044Z" />
    </Svg>
  );
};

UilOperaAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilOperaAlt.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilOperaAlt;
