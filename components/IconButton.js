import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { COLORS } from "../constants";

const IconButton = ({ containerStyle, iconStyle, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          tintColor: COLORS.white,
          ...iconStyle,
          width: 25,
          height: 25,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
