import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilMasterCard = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M15.26465,5.27441a6.68141,6.68141,0,0,0-3.27295.85505,6.72754,6.72754,0,1,0,0,11.745,6.72551,6.72551,0,1,0,3.27295-12.6ZM10.23712,16.457a4.66714,4.66714,0,0,1-1.51837.27252,4.72754,4.72754,0,0,1,0-9.45508,4.66688,4.66688,0,0,1,1.51837.27253,6.68737,6.68737,0,0,0,0,8.91ZM11.9917,15.3996a4.69542,4.69542,0,0,1,0-6.79529,4.69542,4.69542,0,0,1,0,6.79529Zm3.27295,1.32989a4.66709,4.66709,0,0,1-1.51837-.27252,6.68737,6.68737,0,0,0,0-8.91,4.66683,4.66683,0,0,1,1.51837-.27253,4.72754,4.72754,0,0,1,0,9.45508Z" />
    </Svg>
  );
};

UilMasterCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilMasterCard.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilMasterCard;
