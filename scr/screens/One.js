import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import RNExitApp from "react-native-exit-app";

const One = ({ navigation }) => {
  const text = "#898989";
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ alignSelf: "center", width: "80%", height: hp(45) }}
        source={require("../Images/4.png")}
      />
      <View
        style={{
          backgroundColor: "#de1f26",
          marginTop: hp(-10),
          marginHorizontal: 50,
          paddingVertical: 10
        }}>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "Roboto-Bold",
            fontSize: RFPercentage(3.5)
          }}>
          PLEASE{"\n"}CONFIRM YOUR AGE
        </Text>
        
      </View>
      <Image
        style={{width:50, height:50, tintColor: "#de1f26", alignSelf:'center', marginTop:-23}}
        source={require("../Images/red.png")}
        />
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: RFPercentage(2),
            color: text,
            fontFamily:'Roboto-Regular'
          }}>
          Want to get your favourite drinks delivered at {"\n"}
          your doorstep? All you have to do is tell us when {"\n"}
          where born.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#e30038",
          padding: 12,
          marginHorizontal: 40,
          borderRadius: 5,
          marginTop: 20
        }}
        onPress={() => {
          navigation.navigate("Location");
        }}>
        <Text style={{ alignSelf: "center", color: "#fff",fontFamily:'Roboto-Bold' }}>
          I AM ABOVE THE AGE OF 21
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => {
          RNExitApp.exitApp();
        }}>
        <Text
          style={{
            color: "#c24951",
            textAlign: "center",
            fontSize: RFPercentage(2.6),
            fontFamily:'Roboto-Bold'
          }}>
          EXIT
        </Text>
      </TouchableOpacity>
      <View style={{ marginTop: 10 }}>
        <Text style={{ textAlign: "center", color: text, fontFamily:'Roboto-Regular' }}>
          By entering this application, you hereby agree {"\n"}
          to the{" "}
          <Text
            style={{ textDecorationLine: "underline", color: "#e5a16f" }}
            onPress={() => {
              alert("Term of Service");
            }}>
            Term of Service
          </Text>{" "}
          and {" "}
          <Text
            style={{ textDecorationLine: "underline", color: "#e5a16f" }}
            onPress={() => {
              alert("Privacy Policy");
            }}> 
            Privacy Policy
          </Text>{" "}
          of {"\n"}
          CheersByUnited
        </Text>
      </View>
    </View>
  );
};

export default One;

const styles = StyleSheet.create({});
