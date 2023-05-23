import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useRef, useCallback, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop
} from "@gorhom/bottom-sheet";

const Location = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["53%"];

  function hundlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  const BackdropElement = useCallback(
    (backdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        opacity={0.7}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );
  return (
    <View style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Image
          style={{ alignSelf: "center", width: "100%", height: hp(50) }}
          source={require("../Images/5.png")}
        />
        <View style={{ marginTop: -40, marginBottom: 80 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(3.4),
              color: '#030303',
              fontFamily:"Roboto-Bold"
            }}>
            Enter Your Location
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(2.5),
              marginTop: 10,
              color: "#070707",
              fontFamily:"Roboto-Regular"
            }}>
            We are currently serviceable in selected locations.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#e30038",
              padding: 12,
              borderRadius: 3,
              marginHorizontal: 28
            }}
            onPress={() => {
                navigation.navigate('CurrentLocation');
              }}
            >
            <Text style={{ textAlign: "center", color: "#fff", fontFamily:"Roboto-Regular" }}>
              Use Current Location
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#00b951",
              padding: 12,
              borderRadius: 3,
              marginHorizontal: 28,
              marginTop: 25
            }}
            onPress={hundlePresentModal}>
            <Text style={{ textAlign: "center", color: "#fff", fontFamily:"Roboto-Regular" }}>
              Enter Pin Code manualy
            </Text>
          </TouchableOpacity>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            backdropComponent={BackdropElement}
            snapPoints={snapPoints}
            style={{}}>
            <View>
              <TouchableOpacity
                style={{ paddingHorizontal: 335 }}
                onPress={() => {
                  bottomSheetModalRef.current?.dismiss();
                }}>
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../Images/cross.png")}
                />
              </TouchableOpacity>
              <Image
                style={{
                  alignSelf: "center",
                  width: "25%",
                  height: hp(10),
                  marginTop: 10
                }}
                source={require("../Images/1.png")}
              />
              <TextInput
                style={{
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 5,
                  marginTop: 25,
                  fontFamily:'Roboto-Regular'
                }}
                value={pin}
                onChangeText={(number) => setPin(number)}
                placeholderTextColor='#000'
                placeholder="Enter Pincode"
                keyboardType="numeric"
                maxLength={6}
              />

              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={() =>
                  navigation.navigate("Pincode", {pin})
                }>
                <Text
                  style={{
                    backgroundColor: "#00b951",
                    padding: 12,
                    borderRadius: 5,
                    textAlign: "center",
                    marginHorizontal: 12,
                    color: "#fff",
                    fontFamily:'Roboto-Regular'
                  }}>
                  SUBMIT
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

export default Location;
