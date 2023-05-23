import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions
} from "react-native";
import React, { useRef, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const sliderData = [
  {
    title: "Item 1",
    img: require("../Images/1.png"),
    text1: "Enter Your pincode",
    text2: "Enter your pincode to check the availability in your location."
  },
  {
    title: "Item 2",
    img: require("../Images/2.png"),
    text1: "Make your Purchase",
    text2: "Choose the product of your choice and place the order."
  },
  {
    title: "Item 3",
    img: require("../Images/3.png"),
    text1: "CheersByUnited",
    text2: "We deliver the products right at your doorstep."
  }
];

const renderSliderItem = ({ item, index }) => {
  return (
    <View key={String(index)} style={{ overflow: "hidden" }}>
      <Image
        source={item.img}
        resizeMode="stretch"
        style={{ width: wp(index===0?50:80), height: wp(index===0?70:80), alignSelf: "center" }}
      />
      <Text style={{ textAlign: "center", marginBottom: 10, color: '#030303', fontFamily: "Roboto-Bold", fontSize: RFPercentage(3.7) }}>
        {item.text1}
      </Text>
      <Text style={{ textAlign: "center", marginBottom: 5, color: '#070707', fontFamily: "Roboto-Regular", fontSize: RFPercentage(2.5) }}>{item.text2}</Text>
    </View>
  );
};
const Home = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{ marginTop: hp(1), alignItems: "center" }}>
      <Carousel
        ref={isCarousel}
        data={sliderData}
        renderItem={renderSliderItem}
        sliderWidth={wp(90)}
        itemWidth={wp(90)}
        onSnapToItem={(index) => setIndex(index)}
        autoplay={true}
        autoplayInterval={2500}
        autoplayDelay={1000}
      />
      <Pagination
        dotsLength={sliderData.length}
        activeDotIndex={index}
        containerStyle={{ marginTop: hp(-2) }}
        dotStyle={{
          width: wp(3),
          height: wp(3),
          borderRadius: wp(1.5),
          backgroundColor: "black"
        }}
        inactiveDotStyle={{ backgroundColor: "gray" }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <View style={{ marginTop: hp(1), alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("One");
          }}>
          <Text style={{ color: "#fff", fontFamily: "Roboto-Bold" }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  welcome: {
    fontSize: RFPercentage(5),
    textAlign: "center",
    margin: 10,
    fontFamily: "Roboto-BoldItalic"
  },
  button: {
    backgroundColor: "#00b951",
    padding: 12,
    borderRadius: 5,
    paddingHorizontal: 125
  }
});
