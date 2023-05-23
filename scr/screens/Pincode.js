import { View, Text, Image} from "react-native";
import React from "react";
import { useRoute } from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Pincode = () => {
  const route = useRoute();
  return (
    <View style={{flex:1}}>
      <Image
          style={{ alignSelf: "center", width: "100%", height: hp(50) }}
          source={require("../Images/5.png")}
        />
        <View style={{ marginTop: -40, marginBottom: 80 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(3),
              color: "#000",
              fontFamily:'Roboto-Bold'
            }}>
            Your Entered Location Pincode is
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(5),
              marginTop: 10,
              color: "#000",
              fontFamily:'Roboto-Bold'
            }}>
           {route.params.pin}
          </Text>
        </View>
      
    </View>
  );
};

export default Pincode;
